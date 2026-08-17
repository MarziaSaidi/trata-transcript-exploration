# Trata transcript reader — a product exploration

A small, working exploration of one idea: a Trata research conversation
becomes easier to evaluate quickly if the reader can see the investment
debate first and jump straight to the passage that supports it.

Full context is on the page itself at `/`.

## Run locally

```bash
npm install
npm run dev
```

## Stack

Next.js (App Router) + React + TypeScript, Tailwind CSS v4. No backend,
no external data — the conversation in `lib/data.ts` is static and
original (not real Trata content).

## Reviewing the states

The reader has four real states, not just a happy path:

- `/` — brief simulated load, then the full reader
- `/?state=loading` — stays on the loading skeleton indefinitely
- `/?state=error` — the error state; "Try again" recovers into the
  normal ready state
- `/?state=empty` — the summary panel's empty state, with the full
  transcript still readable

## Where to look

- `components/reader/TranscriptReader.tsx` — state machine + the
  jump-to-evidence interaction (scroll, focus, highlight, live-region
  announcement)
- `hooks/useActiveEvidence.ts` — scroll-spy that tracks which passage
  is centered in the viewport, via `IntersectionObserver`
- `hooks/useReadingProgress.ts` — the thin progress bar in the header
- `lib/data.ts` — the illustrative conversation and its evidence links
