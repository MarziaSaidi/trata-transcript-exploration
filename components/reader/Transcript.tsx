"use client";

import { forwardRef } from "react";
import type { TranscriptTurn as TranscriptTurnData } from "@/lib/types";
import { TranscriptTurn } from "./TranscriptTurn";

interface TranscriptProps {
  turns: TranscriptTurnData[];
  flashEvidenceId: string | null;
}

export const Transcript = forwardRef<HTMLDivElement, TranscriptProps>(
  function Transcript({ turns, flashEvidenceId }, ref) {
    return (
      <div ref={ref}>
        <h2 className="font-serif text-[15px] font-semibold text-ink mb-1">
          Full conversation
        </h2>
        <p className="text-[13px] text-ink-muted mb-3 leading-relaxed">
          Underlined passages are referenced in the summary.
        </p>
        <div className="rounded-sm border border-border bg-surface px-5">
          {turns.map((turn) => (
            <TranscriptTurn
              key={turn.id}
              turn={turn}
              flashEvidenceId={flashEvidenceId}
            />
          ))}
        </div>
      </div>
    );
  }
);
