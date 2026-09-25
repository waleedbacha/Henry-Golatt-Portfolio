import React from "react";
import { motion } from "framer-motion";
import { discoveryTiers, discoveryTierOrder } from "../../data/discoveryTiers";

const SIZE = 220;
const STROKE = 34;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const AssessmentPieChart = ({ distribution, totalScore, tier }) => {
  // Build slices only for tiers with count > 0
  const slices = [];
  let offset = 0;

  for (const tierId of discoveryTierOrder) {
    const count = distribution[tierId] || 0;
    if (count === 0) continue;

    const t = discoveryTiers[tierId];
    const fraction =
      count / Object.values(distribution).reduce((a, b) => a + b, 0);
    const length = fraction * CIRCUMFERENCE;

    slices.push({
      tierId,
      color: t.color,
      length,
      offset,
      count,
    });

    offset += length;
  }

  return (
    <div className="discovery-chart">
      <div className="discovery-chart-svg-wrap">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="discovery-chart-svg"
          role="img"
          aria-label="Maturity distribution donut chart"
        >
          {/* Background ring */}
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(50, 181, 84, 0.08)"
            strokeWidth={STROKE}
          />

          {/* Colored slices */}
          <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
            {slices.map((s, i) => (
              <motion.circle
                key={s.tierId}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                fill="none"
                stroke={s.color}
                strokeWidth={STROKE}
                strokeDasharray={`${s.length} ${CIRCUMFERENCE}`}
                strokeDashoffset={-s.offset}
                strokeLinecap="butt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              />
            ))}
          </g>
        </svg>

        {/* Center overlay */}
        <div className="discovery-chart-center">
          <motion.div
            className="discovery-chart-score"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ color: tier.color }}
          >
            {totalScore}
            <span className="discovery-chart-score-max">/20</span>
          </motion.div>
          <motion.div
            className="discovery-chart-tier"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ color: tier.color }}
          >
            {tier.label}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPieChart;
