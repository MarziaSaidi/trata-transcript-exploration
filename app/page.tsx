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
              On trata.com, the public transcript samples present analyst
              debates primarily as continuous dialogue. The ticker, date, and
              stance are visible, but there is little structure to help a
              reader understand the debate before reading through the
              conversation.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
              Hypothesis
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink-muted">
              If a reader could see the investment debate first and jump
              directly to the supporting evidence, they might be able to
              decide faster whether a conversation deserves a deeper read.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
              Exploration
            </dt>
            <dd className="text-[13px] leading-relaxed text-ink-muted">
              I built a working transcript reader around that idea, using an
              original illustrative conversation rather than real Trata
              content.
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
            The summary isn’t a generic recap. Every point links directly to
            the passage that supports it, so a reader can move from thesis →
            evidence without losing context.
          </p>
          <p className="text-[13px] leading-relaxed text-ink-muted mb-2">
            Clicking a point scrolls to and highlights the supporting
            passage. As you read, the summary rail tracks your position in
            the conversation so you can stay oriented without navigating a
            separate table of contents.
          </p>
          <p className="text-[13px] leading-relaxed text-ink-muted">
            The prototype is intentionally small: one research conversation,
            one core interaction, no invented backend.
          </p>
        </div>

        <p className="mt-8 text-[11px] leading-relaxed text-ink-muted max-w-2xl">
          I built it against Trata’s publicly visible experience rather than
          the signed-in product, so this is an exploration — not a claim
          about how the private product currently works. The conversation is
          entirely original and illustrative; Brightline Fitness (BRTL) is
          fictional and no proprietary Trata transcript text is reproduced.
          Built by Marzia Saidi as an unsolicited product exploration for
          Trata’s Founding Product Designer / Design Engineer role.
        </p>
      </div>
    </main>
  );
}
