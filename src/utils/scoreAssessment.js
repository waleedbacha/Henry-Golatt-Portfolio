// ============================================================
// DISCOVERY ASSESSMENT — SCORING ENGINE
// ============================================================
// Takes an array of answers and returns a full scored result
// object ready for the result screen.
// ============================================================

import { discoveryQuestions } from "../data/discoveryQuestions";
import { discoveryInsights } from "../data/discoveryInsights";
import { discoveryTiers, discoveryTierOrder } from "../data/discoveryTiers";

/**
 * @typedef {Object} Answer
 * @property {string} questionId   - e.g. "access-to-support"
 * @property {string} optionId     - "A" | "B" | "C" | "D"
 * @property {number} score        - 1 | 2 | 3 | 4
 */

/**
 * @typedef {Object} ScoredResult
 * @property {number} totalScore         - 5..20
 * @property {number} averageScore       - 1..4
 * @property {string} tierId             - "reactive" | ...
 * @property {Object} tier               - full tier object
 * @property {Object} tierDistribution   - counts per tier
 * @property {Object} tierPercentages    - % per tier (for pie chart)
 * @property {Object} weakest            - { questionId, question, score, insight }
 * @property {Object} strongest          - { questionId, question, score }
 * @property {Array}  breakdown          - per-question breakdown
 */

// ------------------------------------------------------------
// MAIN SCORER
// ------------------------------------------------------------
export function scoreAssessment(answers) {
  if (!Array.isArray(answers) || answers.length === 0) {
    throw new Error("scoreAssessment: answers must be a non-empty array");
  }

  // -------- 1. Total + average --------
  const totalScore = answers.reduce((sum, a) => sum + (a.score || 0), 0);
  const averageScore = Number((totalScore / answers.length).toFixed(2));

  // -------- 2. Overall tier --------
  const tier = getOverallTier(totalScore);

  // -------- 3. Distribution --------
  const tierDistribution = buildTierDistribution(answers);
  const tierPercentages = buildTierPercentages(
    tierDistribution,
    answers.length,
  );

  // -------- 4. Weakest + strongest --------
  const sorted = [...answers].sort((a, b) => a.score - b.score);
  const weakestAnswer = sorted[0];
  const strongestAnswer = sorted[sorted.length - 1];

  const weakestQuestion = discoveryQuestions.find(
    (q) => q.id === weakestAnswer.questionId,
  );
  const strongestQuestion = discoveryQuestions.find(
    (q) => q.id === strongestAnswer.questionId,
  );

  const weakestTierId = scoreToTierId(weakestAnswer.score);
  const weakestInsight =
    discoveryInsights[weakestAnswer.questionId]?.[weakestTierId] || null;

  // -------- 5. Full breakdown (for the result page) --------
  const breakdown = answers.map((a) => {
    const q = discoveryQuestions.find((x) => x.id === a.questionId);
    const tierId = scoreToTierId(a.score);
    const tier = discoveryTiers[tierId];
    return {
      questionId: a.questionId,
      blockTitle: q?.blockTitle || a.questionId,
      optionId: a.optionId,
      score: a.score,
      tierId,
      tierLabel: tier?.label || "",
      tierIcon: tier?.icon || "",
      tierColor: tier?.color || "#999",
    };
  });

  return {
    totalScore,
    averageScore,
    tierId: tier.id,
    tier,
    tierDistribution,
    tierPercentages,
    weakest: {
      questionId: weakestAnswer.questionId,
      question: weakestQuestion,
      score: weakestAnswer.score,
      optionId: weakestAnswer.optionId,
      tierId: weakestTierId,
      tier: discoveryTiers[weakestTierId],
      insight: weakestInsight,
    },
    strongest: {
      questionId: strongestAnswer.questionId,
      question: strongestQuestion,
      score: strongestAnswer.score,
      optionId: strongestAnswer.optionId,
    },
    breakdown,
  };
}

// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
function getOverallTier(totalScore) {
  for (const id of Object.keys(discoveryTiers)) {
    const t = discoveryTiers[id];
    if (totalScore >= t.range.min && totalScore <= t.range.max) return t;
  }
  return discoveryTiers.reactive; // fallback
}

function scoreToTierId(score) {
  switch (score) {
    case 1:
      return "reactive";
    case 2:
      return "emerging";
    case 3:
      return "developing";
    case 4:
      return "leading";
    default:
      return "reactive";
  }
}

function buildTierDistribution(answers) {
  const dist = { reactive: 0, emerging: 0, developing: 0, leading: 0 };
  for (const a of answers) {
    const tierId = scoreToTierId(a.score);
    dist[tierId] += 1;
  }
  return dist;
}

function buildTierPercentages(distribution, total) {
  const pct = {};
  for (const key of Object.keys(distribution)) {
    pct[key] = Math.round((distribution[key] / total) * 100);
  }
  return pct;
}

// ------------------------------------------------------------
// UTILITIES FOR UI
// ------------------------------------------------------------
export function getTierOrder() {
  return discoveryTierOrder;
}

export function getTotalPossibleScore() {
  return discoveryQuestions.length * 4;
}

export function getMaxScorePerQuestion() {
  return 4;
}
