import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  ArrowRight,
  Compass,
  Layers,
  Users,
  FileText,
  ArrowDown,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";
import "./Pages.css";
import "./Model.css";

const Model = () => {
  const frameworkSteps = [
    {
      title: "Institutional Capacity",
      desc: "Assess whether the institution or partnership actually has the ability to do what the opportunity requires.",
      icon: Building2,
    },
    {
      title: "Ecosystem Architecture",
      desc: "Design the pathways connecting people and institutions to capital, jobs, research, procurement, markets, property, and technology.",
      icon: Layers,
    },
    {
      title: "Economic Agency",
      desc: "Expand people's practical ability to influence, mobilize resources, and build assets.",
      icon: Users,
    },
    {
      title: "Asset Conversion",
      desc: "Convert agency into productive assets capable of generating continuing value.",
      icon: Compass,
    },
    {
      title: "Community Wealth",
      desc: "Ensure durable capacity to create, own, retain, reinvest, and reproduce economic value over time.",
      icon: Landmark,
    },
  ];

  const architectBuilderRows = [
    {
      term: "Architect",
      definition:
        "HG Consulting diagnoses conditions, identifies underused assets, designs the ecosystem architecture, aligns partners, defines pathways and responsibilities, establishes readiness and measurement standards, and supports recalibration.",
    },
    {
      term: "Builder",
      definition:
        "The entity responsible for implementing, building, delivering, operating, financing, administering, or otherwise carrying out a defined component of the architecture.",
    },
    {
      term: "Implementation Partner",
      definition:
        "The specific organization selected to serve as a Builder for a particular project or workstream.",
    },
    {
      term: "Role Flexibility",
      definition:
        "Architect and Builder are functions, not organization types. Builders can include HG Consulting, an HBCU or municipal client, a nonprofit intermediary, private enterprise, sector-based agency, contractor, financial institution, or another qualified entity.",
    },
  ];

  const flowSteps = [
    "Frame",
    "Assess",
    "Map",
    "Diagnose",
    "Align",
    "Architect",
    "Capital Readiness",
    "Activate",
    "Measure",
    "Recalibrate",
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        {/* HERO */}
        <section className="page-hero model-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="page-hero-content"
          >
            <div className="about-badge">
              <Compass size={14} />
              <span>The Model</span>
            </div>
            <h1 className="page-title">
              The System Behind <br />
              <span className="page-title-highlight">The Work</span>
            </h1>
            <p className="page-description">
              HG Consulting does not begin by asking what new program to create.
              We begin with the economic outcome that is not occurring, and then
              design the architecture required to produce it.
            </p>
          </motion.div>
        </section>

        {/* THE FRAMEWORK */}
        <section id="framework" className="page-section">
          <div className="model-section-header">
            <div className="model-section-badge">
              The Economic Empowerment Framework
            </div>
            <h2 className="model-section-title">
              From Institutional Assets to{" "}
              <span className="page-title-highlight">Community Wealth</span>
            </h2>
            <p className="model-section-subtitle">
              Institutions often possess land, talent, purchasing power,
              research, and influence without consistently converting those
              assets into economic power for the communities around them. HG
              Consulting helps close that gap.
            </p>
          </div>

          <div className="framework-flow">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="framework-card"
              >
                <div className="framework-card-icon">
                  <step.icon size={24} />
                </div>
                <div className="framework-card-num">0{index + 1}</div>
                <h3 className="framework-card-title">{step.title}</h3>
                <p className="framework-card-desc">{step.desc}</p>
                {index < frameworkSteps.length - 1 && (
                  <ArrowDown className="framework-arrow" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* THE ARCHITECT / BUILDER MODEL */}
        <section
          id="architect-builder"
          className="page-section model-ab-section"
        >
          <div className="model-section-header">
            <div className="model-section-badge">
              The Architect / Builder Model
            </div>
            <h2 className="model-section-title">
              A Disciplined Division of{" "}
              <span className="page-title-highlight">Responsibility</span>
            </h2>
            <p className="model-section-subtitle">
              From economic-system design to implementation and measurable
              outcomes. HG Consulting does not automatically become the builder
              or operator merely because it designed the system.
            </p>
          </div>

          <div className="ab-model-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ab-model-architect"
            >
              <div className="ab-model-architect-icon">
                <Compass size={32} />
              </div>
              <h3 className="ab-model-architect-title">Architect</h3>
              <p className="ab-model-architect-desc">
                HG Consulting frames the opportunity, assesses capacity, maps
                the ecosystem, diagnoses bottlenecks, aligns partners, and
                designs the architecture.
              </p>
            </motion.div>

            <div className="ab-model-divider">
              <ArrowRight size={28} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ab-model-builder"
            >
              <div className="ab-model-builder-icon">
                <Users size={32} />
              </div>
              <h3 className="ab-model-builder-title">Builders</h3>
              <p className="ab-model-builder-desc">
                Qualified entities implement, build, deliver, operate, finance,
                administer, or otherwise carry out defined workstreams. An
                Implementation Partner is the specific entity selected to serve
                as a Builder for a project.
              </p>
            </motion.div>
          </div>

          <div className="ab-model-table">
            {architectBuilderRows.map((row, index) => (
              <div key={index} className="ab-model-row">
                <div className="ab-model-row-term">{row.term}</div>
                <div className="ab-model-row-def">{row.definition}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ENGAGEMENT FLOW */}
        <section id="engagement-flow" className="page-section">
          <div className="model-section-header">
            <div className="model-section-badge">
              From Opportunity to Implementation
            </div>
            <h2 className="model-section-title">
              Architecture{" "}
              <span className="page-title-highlight">Before Activity</span>
            </h2>
            <p className="model-section-subtitle">
              We begin with the economic outcome that is not occurring and
              determine why existing assets are not producing it.
            </p>
          </div>

          <div className="flow-vertical">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flow-vertical-step"
              >
                <div className="flow-vertical-num">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flow-vertical-line" />
                <div className="flow-vertical-content">
                  <h4 className="flow-vertical-title">{step}</h4>
                  {step === "Capital Readiness" && (
                    <p className="flow-vertical-note">
                      <ShieldCheck size={14} /> Capital follows a credible
                      architecture. Mission-worthiness alone does not establish
                      implementation or investment readiness.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="page-section">
          <div className="about-cta">
            <h3 className="about-cta-title">Ready to apply the model?</h3>
            <p className="about-cta-text">
              Whether you lead an HBCU, a municipality, a foundation, or a
              cross-sector partnership, HG Consulting can help you architect the
              system required to convert underused assets into economic agency
              and community wealth.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="about-cta-button">
                Discuss an Opportunity <ArrowRight size={16} />
              </Link>
              <Link to="/applications" className="about-cta-button-secondary">
                Explore Applications
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Model;
