"use client";

import type { SummaryItem } from "@/lib/types";
import { SummaryCard } from "./SummaryCard";
import { EmptySummary } from "./ReaderStates";

interface SummaryPanelProps {
  items: SummaryItem[];
  activeEvidenceId: string | null;
  onJump: (evidenceId: string) => void;
}

export function SummaryPanel({ items, activeEvidenceId, onJump }: SummaryPanelProps) {
  return (
    <aside
      aria-label="Research summary"
      className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1"
    >
      <h2 className="font-serif text-[15px] font-semibold text-ink mb-1">
        Before you read the whole thing
      </h2>
      <p className="text-[13px] text-ink-muted mb-4 leading-relaxed">
        The debate in one pass. Click a point to jump straight to where it’s
        said.
      </p>

      {items.length === 0 ? (
        <EmptySummary />
      ) : (
        <ul className="no-scrollbar flex flex-row gap-2.5 overflow-x-auto snap-x snap-mandatory pb-1 -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0 lg:snap-none">
          {items.map((item) => (
            <SummaryCard
              key={item.id}
              item={item}
              isActive={item.evidenceId === activeEvidenceId}
              onJump={onJump}
            />
          ))}
        </ul>
      )}
    </aside>
  );
}
