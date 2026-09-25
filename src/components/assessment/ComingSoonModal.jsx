import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, CalendarCheck, Mail } from "lucide-react";

const ComingSoonModal = ({ onClose, user, tier }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="discovery-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="discovery-modal"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="discovery-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="discovery-modal-icon">
            <CalendarCheck size={26} />
          </div>

          <h3 className="discovery-modal-title">Paid booking coming soon</h3>

          <p className="discovery-modal-text">
            {user?.name ? `${user.name}, ` : ""}you're ready for the next step.
            The Stripe checkout and Calendly booking flow is currently being
            finalized and will be live shortly.
          </p>

          <div className="discovery-modal-steps">
            <div className="discovery-modal-step">
              <div className="discovery-modal-step-num">1</div>
              <div className="discovery-modal-step-text">
                <strong>Stripe checkout</strong> — secure $299 payment
              </div>
              <CreditCard size={15} />
            </div>

            <div className="discovery-modal-step">
              <div className="discovery-modal-step-num">2</div>
              <div className="discovery-modal-step-text">
                <strong>Calendly booking</strong> — pick a time with Henry
              </div>
              <CalendarCheck size={15} />
            </div>

            <div className="discovery-modal-step">
              <div className="discovery-modal-step-num">3</div>
              <div className="discovery-modal-step-text">
                <strong>Session confirmation</strong> — sent to your email
              </div>
              <Mail size={15} />
            </div>
          </div>

          {tier && (
            <div className="discovery-modal-tier">
              Your readiness tier:{" "}
              <strong style={{ color: tier.color }}>{tier.label}</strong>
            </div>
          )}

          <button
            className="discovery-cta-primary discovery-modal-cta"
            onClick={onClose}
          >
            Got it
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ComingSoonModal;
