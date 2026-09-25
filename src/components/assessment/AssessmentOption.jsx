import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AssessmentOption = ({ option, selected, onSelect, index }) => {
  return (
    <motion.button
      type="button"
      className={`discovery-option ${selected ? "discovery-option-selected" : ""}`}
      onClick={() => onSelect(option)}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={selected}
    >
      <span className="discovery-option-marker" aria-hidden="true">
        {selected ? (
          <Check size={14} strokeWidth={3} />
        ) : (
          <span className="discovery-option-marker-dot" />
        )}
      </span>
      <span className="discovery-option-text">{option.text}</span>
    </motion.button>
  );
};

export default AssessmentOption;
