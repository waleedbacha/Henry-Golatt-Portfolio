import React from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  BarChart3,
  Map,
  Search,
  PenTool,
  Rocket,
  LineChart,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";
import "./EngagementFlow.css";

const EngagementFlow = () => {
  // Reorganized into the 10 steps with icons for the infographic
  const steps = [
    {
      num: "1",
      title: "FRAME",
      desc: "Define the vision, priorities, and opportunity.",
      icon: Crosshair,
      color: "#0b1b36", // Dark Navy
    },
    {
      num: "2",
      title: "ASSESS",
      desc: "Evaluate institutional assets, capacity, and readiness.",
      icon: BarChart3,
      color: "#3b5e7e", // Slate Blue
    },
    {
      num: "3",
      title: "MAP",
      desc: "Identify and engage ecosystem partners and resources.",
      icon: Map,
      color: "#3b5e3b", // Dark Forest
    },
    {
      num: "4",
      title: "DIAGNOSE",
      desc: "Pinpoint gaps, barriers, and leverage points.",
      icon: Search,
      color: "#b38f27", // Gold
    },
    {
      num: "5",
      title: "ALIGN",
      desc: "Unite stakeholders around shared goals and governance.",
      icon: Users,
      color: "#1a2b4c", // Deep Blue
    },
    {
      num: "6",
      title: "ARCHITECT",
      desc: "Design investable solutions and implementation plans.",
      icon: PenTool,
      color: "#4a6c8c", // Muted Steel Blue
    },
    {
      num: "7",
      title: "CAPITAL READINESS",
      desc: "Test readiness before pursuing major funding.",
      icon: TrendingUp,
      color: "#43593a", // Olive Green
    },
    {
      num: "8",
      title: "ACTIVATE",
      desc: "Mobilize capital, programs, and partnerships.",
      icon: Rocket,
      color: "#b38f27", // Gold
    },
    {
      num: "9",
      title: "MEASURE",
      desc: "Track outcomes, create accountability, and evaluate.",
      icon: LineChart,
      color: "#3b5e7e", // Slate Blue
    },
    {
      num: "10",
      title: "RECALIBRATE",
      desc: "Adjust the architecture based on evidence.",
      icon: RefreshCw,
      color: "#0b1b36", // Dark Navy
    },
  ];

  return (
    <section className="flow-section">
      <div className="flow-container">
        <div className="flow-header">
          <div className="flow-badge">From Opportunity to Implementation</div>
          <h2 className="flow-title">Architecture Before Activity.</h2>
          <p className="flow-subtitle">
            We do not begin by asking what new program should be created. We
            begin with the economic outcome that is not occurring and determine
            why existing assets are not producing it.
          </p>
        </div>

        {/* Infographic Container */}
        <div className="flow-infographic-wrapper">
          <div className="flow-arrows-grid">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flow-arrow-box"
                style={{
                  "--box-bg": step.color,
                }}
              >
                <div className="flow-arrow-content">
                  <div className="flow-arrow-icon">
                    <step.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="flow-arrow-title">
                    {step.num}. {step.title}
                  </h3>
                  <p className="flow-arrow-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flow-note">
            <strong>Capital Note:</strong> Capital follows a credible
            architecture. Mission-worthiness alone does not establish
            implementation or investment readiness.
          </div>

          {/* Bottom Loop Text */}
          {/* <div className="flow-loop-text">
            <span className="flow-loop-line" />
            <span className="flow-loop-label">
              CONTINUOUS LEARNING AND IMPROVEMENT
            </span>
            <span className="flow-loop-line" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EngagementFlow;
