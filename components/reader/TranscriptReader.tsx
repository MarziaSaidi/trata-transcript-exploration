"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ConversationData, ReaderState } from "@/lib/types";
import { conversation } from "@/lib/data";
import { ReaderHeader } from "./ReaderHeader";
import { SummaryPanel } from "./SummaryPanel";
import { Transcript } from "./Transcript";
import { LoadingSkeleton, ErrorState } from "./ReaderStates";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { useActiveEvidence } from "@/hooks/useActiveEvidence";

const READY_DELAY = 550;
const RETRY_DELAY = 700;

export function TranscriptReader() {
  const [status, setStatus] = useState<ReaderState>("loading");
  const [data, setData] = useState<ConversationData | null>(null);
  const [flashEvidenceId, setFlashEvidenceId] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");

  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const flashTimeout = useRef<number | undefined>(undefined);

  const progress = useReadingProgress(transcriptRef, status);
  const activeEvidenceId = useActiveEvidence(transcriptRef, status);

  const load = useCallback((delay: number, forced?: "error" | "empty") => {
    window.setTimeout(() => {
      if (forced === "error") {
        setStatus("error");
        return;
      }
      if (forced === "empty") {
        setData({ ...conversation, summary: [] });
        setStatus("ready");
        return;
      }
      setData(conversation);
      setStatus("ready");
    }, delay);
  }, []);

  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).get("state");
    if (forced === "loading") return; // stay in skeleton indefinitely
    if (forced === "error" || forced === "empty") {
      load(READY_DELAY, forced);
      return;
    }
    load(READY_DELAY);
  }, [load]);

  const retry = useCallback(() => {
    setStatus("loading");
    load(RETRY_DELAY);
  }, [load]);

  const jumpToEvidence = useCallback((evidenceId: string) => {
    const target = document.getElementById(`evidence-${evidenceId}`);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Move focus first, with scrolling suppressed: focusing a non-interactive
    // element right after starting a smooth scrollIntoView can truncate that
    // scroll's animation in some engines. Doing it in this order means the
    // scroll below is the last thing touching the viewport, so it always
    // finishes uninterrupted.
    const turnEl = target.closest<HTMLElement>("[data-turn-id]");
    turnEl?.focus({ preventScroll: true });

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });

    setFlashEvidenceId(evidenceId);
    setAnnouncement("Jumped to the supporting passage in the transcript.");

    window.clearTimeout(flashTimeout.current);
    flashTimeout.current = window.setTimeout(() => {
      setFlashEvidenceId(null);
    }, 2200);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(flashTimeout.current);
  }, []);

  if (status === "loading") {
    return (
      <div className="rounded-sm border border-border bg-bg">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-3 flex items-center gap-2.5">
          <span className="h-3.5 w-14 rounded-sm bg-border animate-pulse" />
          <span className="h-3.5 w-32 rounded-sm bg-border animate-pulse" />
        </div>
        <div className="h-[2px] w-full bg-border" />
        <LoadingSkeleton />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-sm border border-border bg-bg">
        <ErrorState onRetry={retry} />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="rounded-sm border border-border bg-bg">
      <ReaderHeader meta={data.meta} progress={progress} />
      <div
        aria-live="polite"
        className="sr-only"
        role="status"
      >
        {announcement}
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        <SummaryPanel
          items={data.summary}
          activeEvidenceId={activeEvidenceId}
          onJump={jumpToEvidence}
        />
        <Transcript
          ref={transcriptRef}
          turns={data.turns}
          flashEvidenceId={flashEvidenceId}
        />
      </div>
    </div>
  );
}
