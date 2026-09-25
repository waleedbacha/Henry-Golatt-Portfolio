// ============================================================
// DISCOVERY ASSESSMENT — MATURITY TIERS
// ============================================================
// 4 tiers. Overall score is 5–20. Tier is derived from the total.
// ============================================================

export const discoveryTiers = {
  reactive: {
    id: "reactive",
    label: "Reactive",
    icon: "🔴",
    color: "#ef4444",
    colorSoft: "rgba(239, 68, 68, 0.12)",
    colorBorder: "rgba(239, 68, 68, 0.35)",
    range: { min: 5, max: 9 },
    tagline: "Early stage — foundational work needed.",
    headline: "You're at the starting line.",
    summary:
      "Your community has not yet built a coordinated approach to inclusive economic development. Programs may exist, but they operate in isolation, and entrepreneurs face significant barriers to accessing support. This is the most common starting point — and the most rewarding to improve.",
  },
  emerging: {
    id: "emerging",
    label: "Emerging",
    icon: "🟠",
    color: "#f59e0b",
    colorSoft: "rgba(245, 158, 11, 0.12)",
    colorBorder: "rgba(245, 158, 11, 0.35)",
    range: { min: 10, max: 13 },
    tagline: "Foundations in place — coordination is the unlock.",
    headline: "You have pieces in place, but they aren't connected.",
    summary:
      "Your community has recognized the need for inclusive economic development and has taken initial steps. Programs exist, but they are fragmented, hard to navigate, and not coordinated across organizations. Entrepreneurs still struggle to find what they need at the right time.",
  },
  developing: {
    id: "developing",
    label: "Developing",
    icon: "🟡",
    color: "#eab308",
    colorSoft: "rgba(234, 179, 8, 0.12)",
    colorBorder: "rgba(234, 179, 8, 0.35)",
    range: { min: 14, max: 17 },
    tagline: "Real momentum — time to deepen what's working.",
    headline: "You're on the right track.",
    summary:
      "Your community has built meaningful infrastructure for inclusive economic development. Programs are in place, partnerships exist, and entrepreneurs are finding support. The remaining opportunity is refining what works, closing gaps, and moving from 'some access' to 'equitable access' for all entrepreneurs.",
  },
  leading: {
    id: "leading",
    label: "Leading",
    icon: "🟢",
    color: "#32b554",
    colorSoft: "rgba(50, 181, 84, 0.12)",
    colorBorder: "rgba(50, 181, 84, 0.35)",
    range: { min: 18, max: 20 },
    tagline: "A national model — let's make sure everyone knows it.",
    headline: "You're a national model.",
    summary:
      "Your community has built a coordinated, inclusive ecosystem that other cities look to as an example. Entrepreneurs have clear pathways, partners collaborate, and feedback loops drive continuous improvement. The next chapter is about scaling your story, deepening impact, and helping others learn from your work.",
  },
};

// Ordered list — useful for rendering breakdown bars in a fixed order.
export const discoveryTierOrder = [
  "leading",
  "developing",
  "emerging",
  "reactive",
];

// Get the tier object for a given overall tier id ("emerging" etc.)
export const getTierById = (tierId) => discoveryTiers[tierId] || null;

// Get the tier object for a given score (1–4) of a single question.
export const getTierByOptionScore = (score) => {
  switch (score) {
    case 1:
      return discoveryTiers.reactive;
    case 2:
      return discoveryTiers.emerging;
    case 3:
      return discoveryTiers.developing;
    case 4:
      return discoveryTiers.leading;
    default:
      return null;
  }
};

export default discoveryTiers;
