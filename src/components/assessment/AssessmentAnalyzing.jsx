import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MESSAGES = [
  "Analyzing your responses…",
  "Mapping your maturity level…",
  "Identifying your strongest block…",
  "Finding your biggest opportunity…",
  "Building your personalized report…",
];

const AssessmentAnalyzing = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setStep((s) => Math.min(s + 1, MESSAGES.length - 1));
    }, 500);

    const doneTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearInterval(msgTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <section className="discovery-section discovery-analyzing">
      <div className="discovery-glow discovery-glow-strong" />

      <div className="discovery-container discovery-analyzing-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="discovery-analyzing-ring"
        >
          <svg viewBox="0 0 120 120" className="discovery-analyzing-svg">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(50, 181, 84, 0.15)"
              strokeWidth="3"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="#32b554"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 52}
              strokeDashoffset={2 * Math.PI * 52 * 0.75}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "60px 60px" }}
            />
          </svg>
          <div className="discovery-analyzing-icon">
            <Sparkles size={28} />
          </div>
        </motion.div>

        <div className="discovery-analyzing-text">
          {MESSAGES.map((m, i) => (
            <motion.p
              key={m}
              className={`discovery-analyzing-line ${
                i === step ? "active" : i < step ? "done" : ""
              }`}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: i <= step ? 1 : 0.25,
                y: 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {m}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentAnalyzing;
