"use client";

export function LoadingSkeleton() {
  return (
    <div
      className="mx-auto max-w-5xl px-5 sm:px-8 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8"
      role="status"
      aria-label="Loading conversation"
    >
      <div className="flex flex-col gap-2">
        <div className="h-3.5 w-40 rounded-sm bg-border animate-pulse" />
        <div className="h-3 w-56 rounded-sm bg-border animate-pulse mb-3" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[86px] rounded-sm border border-border bg-surface animate-pulse"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-3.5 w-32 rounded-sm bg-border animate-pulse" />
        <div className="rounded-sm border border-border bg-surface p-5 flex flex-col gap-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-3">
              <div className="h-3 w-14 rounded-sm bg-border animate-pulse shrink-0 mt-1" />
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="h-3 w-full rounded-sm bg-border animate-pulse" />
                <div className="h-3 w-[85%] rounded-sm bg-border animate-pulse" />
                {i % 2 === 0 && (
                  <div className="h-3 w-[60%] rounded-sm bg-border animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      role="alert"
      className="mx-auto max-w-5xl px-5 sm:px-8 py-16 flex flex-col items-center text-center"
    >
      <div className="max-w-sm">
        <p className="font-serif text-[18px] text-ink mb-1.5">
          This conversation didn’t load
        </p>
        <p className="text-[14px] text-ink-muted leading-relaxed mb-5">
          Something interrupted the request. Your place in the library is
          saved — try again.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full border border-border-strong px-4 py-1.5 text-[13px] font-medium text-ink hover:bg-ink hover:text-bg transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function EmptySummary() {
  return (
    <div className="rounded-sm border border-dashed border-border px-4 py-5 text-center">
      <p className="text-[13px] text-ink-muted leading-relaxed">
        A summary isn’t available for this conversation yet. The full
        transcript is still readable to the right.
      </p>
    </div>
  );
}
