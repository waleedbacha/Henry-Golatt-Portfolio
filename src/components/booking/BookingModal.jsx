import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { X, Calendar, Check, ShieldCheck, Loader2 } from "lucide-react";
import "./BookingModal.css";

const CALCOM_LINK =
  import.meta.env.VITE_CALCOM_LINK || "your-username/strategy-session";

const BookingModal = ({ isOpen, onClose, user, tier }) => {
  const [loaded, setLoaded] = useState(false);
  const [booked, setBooked] = useState(false);

  // ---- Initialize Cal.com embed + auto-hide loader ----
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    (async function init() {
      try {
        const cal = await getCalApi();

        // Configure the embed UI
        cal("ui", {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: {
            dark: {
              "cal-brand": "#32b554",
              "cal-bg": "#0b160e",
              "cal-bg-emphasis": "#0f2618",
              "cal-border": "#1a2a1f",
              "cal-text": "#ffffff",
            },
          },
        });

        // Listen for successful booking
        cal("on", {
          action: "bookingSuccessful",
          callback: () => {
            if (!cancelled) setBooked(true);
          },
        });

        // Try the "linkReady" event (fires when embed is ready)
        cal("on", {
          action: "linkReady",
          callback: () => {
            if (!cancelled) setLoaded(true);
          },
        });

        // FALLBACK: Force-hide the loader after 1.5s
        // (Cal.com's onReady prop is unreliable in some versions)
        setTimeout(() => {
          if (!cancelled) setLoaded(true);
        }, 1500);
      } catch (err) {
        console.error("Cal.com init error:", err);
        // Even on error, hide loader so the iframe is visible
        if (!cancelled) setLoaded(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  // ---- Lock body scroll when open ----
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ---- Esc to close ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // ---- Reset state when modal closes ----
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setBooked(false);
        setLoaded(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="booking-modal"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Book strategy session"
          >
            {/* ---- Header ---- */}
            <header className="booking-modal-header">
              <div className="booking-modal-header-info">
                <div className="booking-modal-icon">
                  {booked ? <Check size={20} /> : <Calendar size={20} />}
                </div>
                <div>
                  <h2 className="booking-modal-title">
                    {booked ? "Session Booked!" : "Book Your Strategy Session"}
                  </h2>
                  <p className="booking-modal-subtitle">
                    {booked
                      ? "Check your email for confirmation"
                      : `1-hour session with Henry A. Golatt — $299`}
                  </p>
                </div>
              </div>

              <button
                className="booking-modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </header>

            {/* ---- Body ---- */}
            <div className="booking-modal-body">
              {!booked && (
                <>
                  {/* Step indicator */}
                  <div className="booking-steps">
                    <div className="booking-step active">
                      <span className="booking-step-num">1</span>
                      <span>Pick a time</span>
                    </div>
                    <div className="booking-step-divider" />
                    <div className="booking-step">
                      <span className="booking-step-num">2</span>
                      <span>Pay $299</span>
                    </div>
                    <div className="booking-step-divider" />
                    <div className="booking-step">
                      <span className="booking-step-num">3</span>
                      <span>Confirm</span>
                    </div>
                  </div>

                  {/* Cal.com embed */}
                  <div className="booking-cal-wrapper">
                    {!loaded && (
                      <div className="booking-cal-loading">
                        <Loader2 className="booking-spinner" size={28} />
                        <p>Loading calendar…</p>
                      </div>
                    )}

                    <Cal
                      calLink={CALCOM_LINK}
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                      config={{
                        layout: "month_view",
                        theme: "dark",
                      }}
                    />
                  </div>

                  {/* Trust row */}
                  <div className="booking-trust">
                    <span className="booking-trust-item">
                      <ShieldCheck size={13} />
                      Secure booking
                    </span>
                    <span className="booking-trust-item">
                      <Check size={13} />
                      Instant confirmation
                    </span>
                    <span className="booking-trust-item">
                      <Check size={13} />
                      Stripe-powered payment
                    </span>
                  </div>
                </>
              )}

              {/* ---- Success state ---- */}
              {booked && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="booking-success"
                >
                  <div className="booking-success-icon">
                    <Check size={32} strokeWidth={3} />
                  </div>

                  <h3 className="booking-success-title">You're all set!</h3>

                  <p className="booking-success-text">
                    {user?.name ? `${user.name}, ` : ""}your strategy session is
                    confirmed. A calendar invite and payment receipt have been
                    sent to <strong>{user?.email || "your email"}</strong>.
                  </p>

                  <div className="booking-success-next">
                    <div className="booking-success-next-title">
                      What happens next:
                    </div>
                    <ul>
                      <li>✓ Check your email for the meeting link</li>
                      <li>
                        ✓ Henry will review your assessment before the call
                      </li>
                      <li>✓ Come prepared with your biggest questions</li>
                    </ul>
                  </div>

                  <button className="booking-success-btn" onClick={onClose}>
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
