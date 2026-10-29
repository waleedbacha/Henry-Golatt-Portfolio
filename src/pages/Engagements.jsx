import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Compass,
  Layers,
  Users,
  CheckCircle2,
} from "lucide-react";
import "./Pages.css";
import "./Engagements.css";

const Engagements = () => {
  const offers = [
    {
      id: "executive-briefing",
      icon: Briefcase,
      tier: "Entry Engagement",
      title: "Executive Economic Empowerment Briefing",
      description: "Frame the strategic opportunity with senior leadership.",
      output: "Executive briefing + opportunity memo",
      model: "Fixed-fee entry engagement",
      icon_color: "#3b82f6",
    },
    {
      id: "diagnostic",
      icon: FileText,
      tier: "Diagnostic",
      title: "Economic Empowerment Diagnostic",
      description: "Establish maturity, gaps, assets, and priorities.",
      output: "Diagnostic report + maturity profile + 90-day actions",
      model: "Fixed-fee project",
      icon_color: "#8b5cf6",
    },
    {
      id: "hbcu-assessment",
      icon: Compass,
      tier: "Strategic Assessment",
      title: "HBCU Economic Engine Assessment",
      description: "Institution-wide anchor asset and conversion assessment.",
      output: "Blueprint + asset map + agency analysis + wealth baseline",
      model: "Fixed-fee strategic engagement",
      icon_color: "#32b554",
    },
    {
      id: "architecture-blueprint",
      icon: Layers,
      tier: "Design",
      title: "Ecosystem Architecture Blueprint",
      description: "Design governance and pathways around priority outcomes.",
      output: "Architecture blueprint + implementation roadmap",
      model: "Fixed-fee / phased project",
      icon_color: "#06b6d4",
    },
    {
      id: "implementation-advisory",
      icon: Users,
      tier: "Ongoing",
      title: "Implementation Advisory",
      description:
        "Support activation, partnerships, recalibration, and measurement.",
      output: "Executive advisory + implementation scorecard",
      model: "Monthly retainer or phase-based advisory",
      icon_color: "#f59e0b",
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        {/* HERO */}
        <section className="page-hero engagements-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="page-hero-content"
          >
            <div className="about-badge">
              <Briefcase size={14} />
              <span>Engagement Options</span>
            </div>
            <h1 className="page-title">
              How To <span className="page-title-highlight">Engage Us</span>
            </h1>
            <p className="page-description">
              HG Consulting offers five engagement tiers — each designed to meet
              your institution wherever it is on its economic empowerment
              journey. Every engagement is scoped to your specific context.
            </p>
          </motion.div>
        </section>

        {/* OFFER LADDER */}
        <section className="page-section">
          <div className="engagements-grid">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                id={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="engagement-card"
              >
                <div className="engagement-card-tier">{offer.tier}</div>

                <div
                  className="engagement-card-icon"
                  style={{
                    background: `${offer.icon_color}15`,
                    borderColor: `${offer.icon_color}40`,
                    color: offer.icon_color,
                  }}
                >
                  <offer.icon size={28} />
                </div>

                <h3 className="engagement-card-title">{offer.title}</h3>
                <p className="engagement-card-desc">{offer.description}</p>

                <div className="engagement-card-details">
                  <div className="engagement-detail-row">
                    <span className="engagement-detail-label">
                      Typical Output
                    </span>
                    <span className="engagement-detail-value">
                      {offer.output}
                    </span>
                  </div>
                  <div className="engagement-detail-row">
                    <span className="engagement-detail-label">
                      Commercial Model
                    </span>
                    <span className="engagement-detail-value">
                      {offer.model}
                    </span>
                  </div>
                </div>

                <Link to="/contact" className="engagement-card-cta">
                  Start a Conversation <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING PHILOSOPHY */}
        <section className="page-section">
          <div className="engagement-philosophy">
            <div className="engagement-philosophy-badge">How We Price</div>
            <h3 className="engagement-philosophy-title">
              Value-based, not hourly.
            </h3>
            <p className="engagement-philosophy-text">
              We do not lead with hourly rates. We lead with the executive
              decision, institutional value, defined deliverables, and scope
              boundaries. Pricing is scoped to your specific engagement —
              project complexity, number of partners, and implementation design.
            </p>
            <div className="engagement-philosophy-points">
              <div className="engagement-philosophy-point">
                <CheckCircle2 size={18} />
                <span>Executive decisions, not billable hours</span>
              </div>
              <div className="engagement-philosophy-point">
                <CheckCircle2 size={18} />
                <span>Defined deliverables & scope boundaries</span>
              </div>
              <div className="engagement-philosophy-point">
                <CheckCircle2 size={18} />
                <span>
                  Capital discipline: architecture first, funding follows
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-section">
          <div className="about-cta">
            <h3 className="about-cta-title">Not sure which engagement fits?</h3>
            <p className="about-cta-text">
              Every engagement begins with a diagnostic conversation. We help
              you identify what your institution actually needs before
              committing to any scope.
            </p>
            <Link to="/contact" className="about-cta-button">
              Start with a Diagnostic Conversation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Engagements;
