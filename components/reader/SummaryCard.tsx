"use client";

import type { SummaryItem } from "@/lib/types";
import { categoryMeta } from "./categoryMeta";

interface SummaryCardProps {
  item: SummaryItem;
  isActive: boolean;
  onJump: (evidenceId: string) => void;
}

export function SummaryCard({ item, isActive, onJump }: SummaryCardProps) {
  const meta = categoryMeta[item.category];

  return (
    <li className="w-[78vw] max-w-[320px] shrink-0 snap-start lg:w-auto lg:max-w-none lg:shrink">
      <button
        type="button"
        onClick={() => onJump(item.evidenceId)}
        aria-current={isActive ? "location" : undefined}
        className={`group h-full w-full text-left rounded-sm border px-4 py-3 transition-colors duration-150 cursor-pointer ${
          isActive
            ? "border-border-strong bg-surface"
            : "border-border bg-surface/60 hover:border-ink-faint hover:bg-surface"
        }`}
      >
        <span className="flex items-center gap-1.5 mb-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full shrink-0 ${meta.dotClassName}`}
            aria-hidden="true"
          />
          <span
            className={`font-mono text-[10px] tracking-wider uppercase ${meta.textClassName}`}
          >
            {meta.label}
          </span>
        </span>
        <span className="block text-[15px] leading-snug font-medium text-ink">
          {item.label}
        </span>
        <span className="mt-1 block text-[13px] leading-relaxed text-ink-muted">
          {item.detail}
        </span>
        <span className="mt-2 flex items-center gap-1 text-[12px] font-medium text-ink-muted group-hover:text-accent-ink transition-colors">
          Jump to passage
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path
              d="M2 8L8 2M8 2H3M8 2V7"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </li>
  );
}
