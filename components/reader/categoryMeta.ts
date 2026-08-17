import type { SummaryCategory } from "@/lib/types";

export const categoryMeta: Record<
  SummaryCategory,
  { label: string; dotClassName: string; textClassName: string }
> = {
  bull: {
    label: "Bull case",
    dotClassName: "bg-bull",
    textClassName: "text-bull",
  },
  skeptic: {
    label: "Skeptic",
    dotClassName: "bg-skeptic",
    textClassName: "text-skeptic",
  },
  takeaway: {
    label: "Key point",
    dotClassName: "bg-ink-faint",
    textClassName: "text-ink-muted",
  },
  "open-question": {
    label: "Open question",
    dotClassName: "bg-accent",
    textClassName: "text-accent-ink",
  },
};
