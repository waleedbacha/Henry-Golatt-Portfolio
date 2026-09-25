import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CreditCard } from "lucide-react";

const AssessmentCta = ({ price = 299, tier, onBook }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="discovery-cta"
    >
      <div className="discovery-cta-glow" />

      <div className="discovery-cta-inner">
        <div className="discovery-cta-kicker">
          <Calendar size={13} />
          <span>Your Next Step</span>
        </div>

        <h3 className="discovery-cta-title">
          Ready to move from{" "}
          <span
            className="discovery-cta-highlight"
            style={{ color: tier.color }}
          >
            {tier.label} → Leading?
          </span>
        </h3>

        <p className="discovery-cta-text">
          Book a 1-hour strategy session with Henry A. Golatt to map out exactly
          how your community can close its biggest gaps — with a custom roadmap
          you can act on.
        </p>

        <div className="discovery-cta-price">
          <span className="discovery-cta-price-currency">$</span>
          <span className="discovery-cta-price-amount">{price}</span>
          <span className="discovery-cta-price-label">Strategy Session</span>
        </div>

        <button
          type="button"
          className="discovery-cta-primary discovery-cta-primary-large"
          onClick={onBook}
        >
          <CreditCard size={16} />
          Book Your Strategy Session
          <ArrowRight size={16} />
        </button>

        <div className="discovery-cta-features">
          <span>✓ 60-minute session</span>
          <span>✓ Personalized roadmap</span>
          <span>✓ Follow-up summary</span>
        </div>

        <p className="discovery-cta-note">
          Secure checkout via Stripe. Instant booking confirmation.
        </p>
      </div>
    </motion.section>
  );
};

export default AssessmentCta;
