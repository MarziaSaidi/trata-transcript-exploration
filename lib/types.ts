export type Speaker = "analyst" | "skeptic";

export interface TranscriptSegment {
  text: string;
  /** When set, this exact span is a jump target referenced by a SummaryItem. */
  evidenceId?: string;
}

export interface TranscriptTurn {
  id: string;
  speaker: Speaker;
  segments: TranscriptSegment[];
}

export type SummaryCategory = "bull" | "skeptic" | "takeaway" | "open-question";

export interface SummaryItem {
  id: string;
  category: SummaryCategory;
  label: string;
  detail: string;
  /** Which transcript passage substantiates this — the click target. */
  evidenceId: string;
}

export interface ConversationMeta {
  ticker: string;
  company: string;
  date: string;
  stance: string;
  turnCount: number;
  readMinutes: number;
}

export interface ConversationData {
  meta: ConversationMeta;
  summary: SummaryItem[];
  turns: TranscriptTurn[];
}

export type ReaderState = "loading" | "error" | "empty" | "ready";
