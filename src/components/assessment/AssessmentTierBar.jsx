import React from "react";
import { motion } from "framer-motion";

const AssessmentTierBar = ({ tier, count, percent, delay = 0 }) => {
  return (
    <div className="discovery-tierbar">
      <div className="discovery-tierbar-head">
        <span className="discovery-tierbar-label">
          <span
            className="discovery-tierbar-dot"
            style={{ background: tier.color }}
          />
          {tier.label}
        </span>
        <span className="discovery-tierbar-value">
          {count} {count === 1 ? "answer" : "answers"}
          <span className="discovery-tierbar-pct">{percent}%</span>
        </span>
      </div>

      <div className="discovery-tierbar-track">
        <motion.div
          className="discovery-tierbar-fill"
          style={{
            background: `linear-gradient(90deg, ${tier.color}, ${tier.color}dd)`,
            boxShadow: `0 0 12px ${tier.color}66`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
};

export default AssessmentTierBar;
