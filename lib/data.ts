import type { ConversationData } from "./types";

/**
 * Entirely original, illustrative content written for this exploration.
 * Brightline Fitness / BRTL is a fictional company. No proprietary Trata
 * transcript text is reproduced anywhere in this file.
 */
export const conversation: ConversationData = {
  meta: {
    ticker: "BRTL",
    company: "Brightline Fitness, Inc.",
    date: "Aug 12, 2026",
    stance: "Bull + Skeptic",
    turnCount: 11,
    readMinutes: 4,
  },
  summary: [
    {
      id: "s-bull",
      category: "bull",
      label: "Retention inflected in Q2",
      detail:
        "Core monthly churn fell to 3.1% from 4.4% — the first real improvement since the 2023 price cuts.",
      evidenceId: "bull-retention",
    },
    {
      id: "s-skeptic",
      category: "skeptic",
      label: "That cohort hasn't been tested yet",
      detail:
        "It's still inside a bundled free-premium window — nobody has seen it hit a real renewal decision.",
      evidenceId: "skeptic-promo",
    },
    {
      id: "s-takeaway-1",
      category: "takeaway",
      label: "The ex-bundle number may just be seasonality",
      detail:
        "Even excluding promo subs, the improvement is close to what Q2 has produced in each of the last two years.",
      evidenceId: "takeaway-seasonality",
    },
    {
      id: "s-takeaway-2",
      category: "takeaway",
      label: "Content volume isn't the same as content that works",
      detail:
        "40,000 hours sounds like a moat, but instructor headcount is flat — the library may be outgrowing engagement.",
      evidenceId: "takeaway-content",
    },
    {
      id: "s-takeaway-3",
      category: "takeaway",
      label: "EU hardware economics are unproven",
      detail:
        "Announced EU pricing sits ~35% above local comps, with no disclosed breakeven volume per market.",
      evidenceId: "intl-pricing",
    },
    {
      id: "s-open",
      category: "open-question",
      label: "What needs to happen next",
      detail:
        "Both sides agree the thesis hinges on Q3 renewal data plus a real signal on EU unit economics.",
      evidenceId: "closing-bar",
    },
  ],
  turns: [
    {
      id: "t1",
      speaker: "analyst",
      segments: [
        {
          text: "The thing that got me interested again is the June retention cohort. ",
        },
        {
          text: "Gross churn on the core subscription dropped to 3.1% monthly from 4.4% a year ago, right after they rolled out usage-based pricing in April.",
          evidenceId: "bull-retention",
        },
        {
          text: " That's the first real inflection in retention since the 2023 price cuts.",
        },
      ],
    },
    {
      id: "t2",
      speaker: "skeptic",
      segments: [
        { text: "I'd be careful reading too much into one cohort. " },
        {
          text: "April is also when they bundled three months of premium into every hardware sale for the spring promo — a chunk of that cohort is still inside the free window and hasn't hit a real renewal decision yet.",
          evidenceId: "skeptic-promo",
        },
      ],
    },
    {
      id: "t3",
      speaker: "analyst",
      segments: [
        {
          text: "Fair, and it's the one thing I can't underwrite yet — we won't see true renewal behavior on that cohort until the bundled months roll off in Q3. What I'd say is even excluding the hardware-bundle subs, blended churn across the base still improved about 60 basis points.",
        },
      ],
    },
    {
      id: "t4",
      speaker: "skeptic",
      segments: [
        {
          text: "60 basis points could just as easily be seasonality — Q2 has been their best retention quarter two years running, bundle or not. Blended churn improved roughly 40 to 50 basis points quarter-over-quarter in both '24 and '23, for the same reason: it's the quarter furthest from the January cancel wave.",
          evidenceId: "takeaway-seasonality",
        },
      ],
    },
    {
      id: "t5",
      speaker: "analyst",
      segments: [
        {
          text: "Where I get more confident is content. They crossed 40,000 hours of proprietary class content this spring, and the usage panels we track show daily active minutes per subscriber up almost 20% year-over-year. That's harder for the cheap app-only competitors to replicate without years of catalog investment.",
        },
      ],
    },
    {
      id: "t6",
      speaker: "skeptic",
      segments: [
        {
          text: "Volume isn't the same as content that drives retention, though. A lot of that 40,000-hour figure is legacy catalog getting re-tagged — instructor headcount has been flat for two years. I'd want completion rates on new releases specifically, not total library size.",
          evidenceId: "takeaway-content",
        },
      ],
    },
    {
      id: "t7",
      speaker: "analyst",
      segments: [
        {
          text: "Don't have completion rate by release date. Agreed that's the sharper metric — flagging it as something worth digging into before I'd size this up.",
        },
      ],
    },
    {
      id: "t8",
      speaker: "skeptic",
      segments: [
        { text: "The bigger swing factor for me is international. " },
        {
          text: "They opened a Mexico facility last year specifically to bring hardware landed cost down for the EU rollout, but the announced EU pricing is still about 35% above a comparable connected-fitness bike sold locally. Nobody's shown a breakeven volume per market, and I don't think the unit economics work there without a subsidy from the US business.",
          evidenceId: "intl-pricing",
        },
      ],
    },
    {
      id: "t9",
      speaker: "analyst",
      segments: [
        {
          text: "Agreed that's the open question — nobody on this call has visibility into per-market hardware margin yet. If EU volume disappoints, that's more likely to break the 2027 guide than anything happening domestically.",
        },
      ],
    },
    {
      id: "t10",
      speaker: "skeptic",
      segments: [
        {
          text: "So for me the whole bull case rests on two things: Q3 renewal data confirming retention is real and not just the promo cohort working through the system, and some signal on EU unit economics before year-end. Absent both, I'd stay on the sideline even with the stock down 30% off highs.",
          evidenceId: "closing-bar",
        },
      ],
    },
    {
      id: "t11",
      speaker: "analyst",
      segments: [
        {
          text: "That's roughly where I land too. Sized small until Q3 prints, add on confirmation.",
        },
      ],
    },
  ],
};
