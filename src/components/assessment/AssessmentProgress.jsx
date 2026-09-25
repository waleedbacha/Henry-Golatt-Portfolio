import React from "react";
import { motion } from "framer-motion";

const AssessmentProgress = ({ current, total }) => {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="discovery-progress">
      <div className="discovery-progress-meta">
        <span className="discovery-progress-label">
          Question {current} of {total}
        </span>
        <span className="discovery-progress-percent">{percent}%</span>
      </div>

      <div className="discovery-progress-track">
        <motion.div
          className="discovery-progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="discovery-progress-glow" />
      </div>
    </div>
  );
};

export default AssessmentProgress;
