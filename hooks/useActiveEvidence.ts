"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Tracks which evidence-linked passage is currently nearest the top of the
 * viewport, so the summary rail can show the reader where they are.
 */
export function useActiveEvidence(
  containerRef: RefObject<HTMLElement | null>,
  /** Re-attach once the container's real content has mounted (e.g. reader status). */
  readySignal: unknown
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-evidence-id]")
    );
    if (targets.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.evidenceId;
          if (!id) continue;
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
        }
        if (visible.size > 0) {
          const first = targets.find((t) => visible.has(t.dataset.evidenceId!));
          setActiveId(first?.dataset.evidenceId ?? null);
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [containerRef, readySignal]);

  return activeId;
}
