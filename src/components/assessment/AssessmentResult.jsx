import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, RotateCcw, Share2, TrendingUp } from "lucide-react";
import AssessmentPieChart from "./AssessmentPieChart";
import AssessmentTierBar from "./AssessmentTierBar";
import AssessmentCta from "./AssessmentCta";
import { discoveryTierOrder, discoveryTiers } from "../../data/discoveryTiers";

const AssessmentResult = ({ result, user, onReset, onBook }) => {
  const { tier, totalScore, tierDistribution, tierPercentages, weakest } =
    result;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="discovery-section discovery-result">
      <div
        className="discovery-glow"
        style={{
          background: `radial-gradient(circle, ${tier.color}22, transparent 70%)`,
        }}
      />

      <div className="discovery-container">
        {/* Completion badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="discovery-result-badge"
        >
          ✓ Assessment Complete
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="discovery-result-header"
        >
          <h1 className="discovery-title">
            Your Inclusive Growth{" "}
            <span className="discovery-title-highlight">Readiness</span>
          </h1>
          <p className="discovery-subtitle">
            {user?.name ? `${user.name}, here's` : "Here's"} what your answers
            reveal about your community — and where the biggest opportunity is.
          </p>
        </motion.div>

        {/* Chart + Score summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="discovery-result-summary"
        >
          <div className="discovery-result-chart-col">
            <AssessmentPieChart
              distribution={tierDistribution}
              totalScore={totalScore}
              tier={tier}
            />
          </div>

          <div className="discovery-result-info-col">
            <div className="discovery-result-tier-badge">
              <span
                className="discovery-result-tier-dot"
                style={{ background: tier.color }}
              />
              <span
                className="discovery-result-tier-label"
                style={{ color: tier.color }}
              >
                {tier.label}
              </span>
            </div>

            <h2 className="discovery-result-headline">{tier.headline}</h2>

            <p className="discovery-result-summary-text">{tier.summary}</p>

            <div className="discovery-result-score-row">
              <span className="discovery-result-score-label">Score</span>
              <span className="discovery-result-score-value">
                {result.averageScore} / 4.0
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tier breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="discovery-result-block"
        >
          <div className="discovery-block-header">
            <h3 className="discovery-block-title">Your Maturity Breakdown</h3>
            <p className="discovery-block-subtitle">
              How your 5 answers distributed across the four maturity levels.
            </p>
          </div>

          <div className="discovery-tierbars">
            {discoveryTierOrder.map((tierId, i) => {
              const t = discoveryTiers[tierId];
              return (
                <AssessmentTierBar
                  key={tierId}
                  tier={t}
                  count={tierDistribution[tierId] || 0}
                  percent={tierPercentages[tierId] || 0}
                  delay={0.4 + i * 0.1}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Weakest block insight */}
        {weakest?.insight && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="discovery-result-block discovery-result-insight"
          >
            <div className="discovery-block-header">
              <div className="discovery-insight-kicker">
                <TrendingUp size={14} />
                <span>Your Biggest Opportunity</span>
              </div>
              <h3 className="discovery-block-title">{weakest.insight.title}</h3>
              <p className="discovery-insight-blockname">
                Focus area:{" "}
                <span style={{ color: weakest.tier.color }}>
                  {weakest.question?.blockTitle}
                </span>
              </p>
            </div>

            <p className="discovery-insight-body">{weakest.insight.body}</p>

            {weakest.insight.leadingPractice && (
              <div className="discovery-insight-practice">
                <div className="discovery-insight-practice-title">
                  What leading communities do
                </div>
                <p>{weakest.insight.leadingPractice}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Paid CTA */}
        <AssessmentCta
          tier={tier}
          price={299}
          onBook={() => onBook(result, user)}
        />

        {/* Footer actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="discovery-result-actions"
        >
          <button
            type="button"
            className="discovery-result-action"
            onClick={onReset}
          >
            <RotateCcw size={14} />
            Retake Assessment
          </button>

          <button
            type="button"
            className="discovery-result-action"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Inclusive Growth Assessment",
                  text: "Check your community's inclusive growth readiness",
                  url: window.location.href,
                });
              }
            }}
          >
            <Share2 size={14} />
            Share
          </button>

          <div className="discovery-result-email-note">
            <Mail size={13} />
            <span>
              A copy has been sent to{" "}
              <strong>{user?.email || "your email"}</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentResult;
