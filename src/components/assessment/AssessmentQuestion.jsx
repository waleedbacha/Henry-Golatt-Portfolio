import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AssessmentProgress from "./AssessmentProgress";
import AssessmentOption from "./AssessmentOption";

const AssessmentQuestion = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  onSelect,
  onNext,
  onBack,
}) => {
  // Reset focus & scroll to top when question changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  const canContinue = Boolean(selectedOptionId);
  const isLast = currentIndex === totalQuestions - 1;

  return (
    <section className="discovery-section discovery-question-section">
      <div className="discovery-glow" />

      <div className="discovery-container">
        <AssessmentProgress current={currentIndex + 1} total={totalQuestions} />

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="discovery-question"
          >
            <div className="discovery-question-head">
              <span className="discovery-question-kicker">
                Block {currentIndex + 1} — {question.blockTitle}
              </span>
              <p className="discovery-question-desc">
                {question.blockDescription}
              </p>
            </div>

            <h2 className="discovery-question-text">{question.question}</h2>

            <div className="discovery-options">
              {question.options.map((opt, i) => (
                <AssessmentOption
                  key={opt.id}
                  option={opt}
                  index={i}
                  selected={selectedOptionId === opt.id}
                  onSelect={(o) => onSelect(question.id, o)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="discovery-nav">
          <button
            type="button"
            className="discovery-cta-ghost"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            type="button"
            className="discovery-cta-primary"
            onClick={onNext}
            disabled={!canContinue}
          >
            {isLast ? "See My Results" : "Next"}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentQuestion;
