"use client";

import type { TranscriptTurn as TranscriptTurnData } from "@/lib/types";

interface TranscriptTurnProps {
  turn: TranscriptTurnData;
  flashEvidenceId: string | null;
}

const speakerLabel: Record<TranscriptTurnData["speaker"], string> = {
  analyst: "Analyst",
  skeptic: "Skeptic",
};

export function TranscriptTurn({ turn, flashEvidenceId }: TranscriptTurnProps) {
  const isSkeptic = turn.speaker === "skeptic";

  return (
    <article
      id={`turn-${turn.id}`}
      data-turn-id={turn.id}
      tabIndex={-1}
      className="flex gap-3 py-4 border-b border-border last:border-b-0 outline-none"
    >
      <div className="w-[86px] shrink-0 pt-0.5">
        <span
          className={`font-mono text-[11px] tracking-wide uppercase ${
            isSkeptic ? "text-skeptic" : "text-bull"
          }`}
        >
          {speakerLabel[turn.speaker]}
        </span>
      </div>
      <p className="text-[15px] leading-[1.7] text-ink flex-1">
        {turn.segments.map((segment, i) =>
          segment.evidenceId ? (
            <span
              key={i}
              id={`evidence-${segment.evidenceId}`}
              data-evidence-id={segment.evidenceId}
              className={`rounded-[3px] px-0.5 -mx-0.5 border-b-2 border-dotted border-ink-muted/70 transition-colors duration-300 ${
                flashEvidenceId === segment.evidenceId
                  ? "evidence-flash border-accent"
                  : ""
              }`}
            >
              {segment.text}
            </span>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </p>
    </article>
  );
}
