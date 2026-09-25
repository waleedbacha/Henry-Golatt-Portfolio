// ============================================================
// DISCOVERY ASSESSMENT — STATE MACHINE
// ============================================================
// Manages the entire assessment lifecycle:
//   intro → question (x5) → analyzing → result
// Persists progress to localStorage so users can resume.
// ============================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import { discoveryQuestions } from "../data/discoveryQuestions";
import { scoreAssessment } from "../utils/scoreAssessment";

const STORAGE_KEY = "hg-discovery-progress";
const STORAGE_VERSION = 1;

// ------------------------------------------------------------
// STORAGE HELPERS
// ------------------------------------------------------------
function loadStoredProgress() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveProgress(state) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: STORAGE_VERSION, ...state }),
    );
  } catch {
    /* ignore quota errors */
  }
}

function clearProgress() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

// ------------------------------------------------------------
// HOOK
// ------------------------------------------------------------
export function useAssessment() {
  const totalQuestions = discoveryQuestions.length;

  // ---- phase: "intro" | "question" | "analyzing" | "result"
  const [phase, setPhase] = useState("intro");
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---- user info (captured on intro)
  const [user, setUser] = useState({ name: "", email: "" });

  // ---- answers: { [questionId]: { questionId, optionId, score } }
  const [answers, setAnswers] = useState({});

  // ---- final scored result
  const [result, setResult] = useState(null);

  // ---- restore progress on mount
  useEffect(() => {
    const saved = loadStoredProgress();
    if (!saved) return;
    if (saved.phase === "intro") return; // nothing to resume
    setPhase(saved.phase || "intro");
    setCurrentIndex(saved.currentIndex || 0);
    setUser(saved.user || { name: "", email: "" });
    setAnswers(saved.answers || {});
    if (saved.phase === "result" && saved.result) {
      setResult(saved.result);
    }
  }, []);

  // ---- persist on every meaningful change
  useEffect(() => {
    saveProgress({ phase, currentIndex, user, answers, result });
  }, [phase, currentIndex, user, answers, result]);

  // ---- derived
  const currentQuestion = discoveryQuestions[currentIndex] || null;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = useMemo(() => {
    if (phase === "intro") return 0;
    if (phase === "result") return 100;
    return Math.round((currentIndex / totalQuestions) * 100);
  }, [phase, currentIndex, totalQuestions]);

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  // ---- actions
  const start = useCallback((name, email) => {
    setUser({ name: name.trim(), email: email.trim() });
    setPhase("question");
    setCurrentIndex(0);
  }, []);

  const selectAnswer = useCallback((questionId, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        optionId: option.id,
        score: option.score,
      },
    }));
  }, []);

  const next = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }
    // last question → go to analyzing → result
    setPhase("analyzing");
  }, [currentIndex, totalQuestions]);

  const back = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    } else {
      setPhase("intro");
    }
  }, [currentIndex]);

  const finishAnalyzing = useCallback(() => {
    const orderedAnswers = discoveryQuestions.map(
      (q) => answers[q.id] || { questionId: q.id, optionId: null, score: 0 },
    );
    const scored = scoreAssessment(orderedAnswers);
    setResult(scored);
    setPhase("result");
  }, [answers]);

  const reset = useCallback(() => {
    clearProgress();
    setPhase("intro");
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    // keep user info so they don't have to retype
  }, []);

  return {
    // state
    phase,
    currentIndex,
    currentQuestion,
    currentAnswer,
    totalQuestions,
    answeredCount,
    progressPercent,
    user,
    answers,
    result,

    // actions
    start,
    selectAnswer,
    next,
    back,
    finishAnalyzing,
    reset,
  };
}

export default useAssessment;
