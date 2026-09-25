import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const AssessmentIntro = ({ onStart, initialUser }) => {
  const [name, setName] = useState(initialUser?.name || "");
  const [email, setEmail] = useState(initialUser?.email || "");
  const [touched, setTouched] = useState({ name: false, email: false });

  const validName = name.trim().length >= 2;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canStart = validName && validEmail;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (canStart) onStart(name.trim(), email.trim());
  };

  return (
    <section className="discovery-section discovery-intro">
      <div className="discovery-glow" />

      <div className="discovery-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="discovery-intro-header"
        >
          <div className="discovery-badge">
            <Sparkles size={13} />
            <span>Inclusive Growth Assessment</span>
          </div>

          <h1 className="discovery-title">
            How ready is your community for{" "}
            <span className="discovery-title-highlight">inclusive growth?</span>
          </h1>

          <p className="discovery-subtitle">
            Answer 5 quick questions. Get a personalized readiness score,
            insights, and a clear path forward — in under 2 minutes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="discovery-intro-meta"
        >
          <div className="discovery-meta-item">
            <Clock size={15} />
            <span>2 minutes</span>
          </div>
          <span className="discovery-meta-divider" />
          <div className="discovery-meta-item">
            <ListChecks size={15} />
            <span>5 questions</span>
          </div>
          <span className="discovery-meta-divider" />
          <div className="discovery-meta-item">
            <ShieldCheck size={15} />
            <span>Private & secure</span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="discovery-intro-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="discovery-field">
            <label htmlFor="discovery-name" className="discovery-label">
              Your Name
            </label>
            <input
              id="discovery-name"
              type="text"
              className={`discovery-input ${
                touched.name && !validName ? "discovery-input-error" : ""
              }`}
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              autoComplete="name"
            />
            {touched.name && !validName && (
              <span className="discovery-error">Please enter your name</span>
            )}
          </div>

          <div className="discovery-field">
            <label htmlFor="discovery-email" className="discovery-label">
              Work Email
            </label>
            <input
              id="discovery-email"
              type="email"
              className={`discovery-input ${
                touched.email && !validEmail ? "discovery-input-error" : ""
              }`}
              placeholder="you@organization.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              autoComplete="email"
            />
            {touched.email && !validEmail && (
              <span className="discovery-error">
                Please enter a valid email address
              </span>
            )}
          </div>

          <button
            type="submit"
            className="discovery-cta-primary"
            disabled={!canStart}
          >
            Start Assessment
            <ArrowRight size={16} />
          </button>

          <p className="discovery-intro-note">
            <ShieldCheck size={12} /> We'll send your personalized report to
            this email. No spam. Unsubscribe anytime.
          </p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="discovery-intro-benefits"
        >
          <div className="discovery-benefits-title">What you'll get:</div>
          <ul className="discovery-benefits-list">
            <li>
              <span className="discovery-benefit-check">✓</span>
              Your community's maturity score (1–4 scale)
            </li>
            <li>
              <span className="discovery-benefit-check">✓</span>
              Personalized insight based on your weakest area
            </li>
            <li>
              <span className="discovery-benefit-check">✓</span>A clear next
              step for meaningful progress
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentIntro;
