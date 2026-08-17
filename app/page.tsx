import { TranscriptReader } from "@/components/reader/TranscriptReader";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg pb-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-10 pb-6">
        <p className="font-mono text-[11px] tracking-wider uppercase text-accent-ink mb-3">
          Product exploration for Trata
        </p>
        <h1 className="font-serif text-[26px] sm:text-[30px] leading-[1.25] text-ink max-w-2xl mb-5">
          I explored how Trata could make analyst conversations faster to
          evaluate.
        </h1>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl border-t border-border pt-4">
          <div>
            <dt className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
              Observation
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink-muted">
              On trata.com, three sample transcripts are readable without an
              account. Each one presents a real debate as a continuous block
              of dialogue, with no structure layered on top to show what the
              debate actually is.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
              Hypothesis
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink-muted">
              If a reader could see the investment debate first and jump
              directly to the supporting evidence, they might decide faster
              whether a conversation deserves a deeper read.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
              Exploration
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink-muted">
              I built a working transcript reader around that idea, with an
              original, illustrative conversation — not real Trata content.
            </dd>
          </div>
        </dl>
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <TranscriptReader />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-10">
        <div className="max-w-2xl border-t border-border pt-6">
          <h2 className="font-serif text-[15px] font-semibold text-ink mb-2">
            Why it’s built this way
          </h2>
          <p className="text-[13px] leading-relaxed text-ink-muted mb-2">
            The summary isn’t a generic AI recap — every point links to the
            exact passage that supports it, so skimming it is never
            disconnected from the actual conversation. Clicking a point
            scrolls to and highlights that passage; the summary rail tracks
            which passage you’re reading as you scroll, so orientation in a
            long call doesn’t require a separate table of contents.
          </p>
          <p className="text-[13px] leading-relaxed text-ink-muted">
            Everything here is client-rendered against static, original data —
            no backend was invented. Loading, error, and empty states are
            real and reachable at{" "}
            <code className="font-mono text-[12px] bg-accent-soft text-accent-ink px-1 py-0.5 rounded-sm">
              ?state=loading
            </code>
            ,{" "}
            <code className="font-mono text-[12px] bg-accent-soft text-accent-ink px-1 py-0.5 rounded-sm">
              ?state=error
            </code>{" "}
            and{" "}
            <code className="font-mono text-[12px] bg-accent-soft text-accent-ink px-1 py-0.5 rounded-sm">
              ?state=empty
            </code>
            .
          </p>
        </div>

        <p className="mt-8 text-[11px] leading-relaxed text-ink-muted max-w-2xl">
          I don’t have a Trata account, so this is built against what’s
          publicly visible on trata.com — not the signed-in product, which
          may already look different. Illustrative content written for this
          exploration — Brightline Fitness (BRTL) is a fictional company, and
          no proprietary Trata transcript text is reproduced here. Built by
          Marzia Saidi as an unsolicited exploration for Trata’s Founding
          Product Designer / Design Engineer role.
        </p>
      </div>
    </main>
  );
}
