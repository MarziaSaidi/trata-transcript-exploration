"use client";

import type { ConversationMeta } from "@/lib/types";

interface ReaderHeaderProps {
  meta: ConversationMeta;
  progress: number;
}

export function ReaderHeader({ meta, progress }: ReaderHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-baseline gap-2.5 min-w-0">
          <span className="font-mono text-[13px] font-semibold tracking-wide text-ink shrink-0">
            {meta.ticker}
          </span>
          <span className="font-serif text-[16px] text-ink truncate">
            {meta.company}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-[11px] font-medium text-ink">
            {meta.stance}
          </span>
          <span className="hidden sm:inline text-[12px] text-ink-muted">
            {meta.date}
          </span>
          <span className="hidden sm:inline text-ink-faint" aria-hidden="true">
            ·
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-ink-muted">
            {meta.turnCount} turns · ~{meta.readMinutes} min
          </span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-border" role="presentation">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
