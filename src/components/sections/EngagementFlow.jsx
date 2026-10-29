import React from "react";
import { motion } from "framer-motion";
import "./EngagementFlow.css";

const EngagementFlow = () => {
  const steps = [
    { step: "01", title: "Frame" },
    { step: "02", title: "Assess" },
    { step: "03", title: "Map" },
    { step: "04", title: "Diagnose" },
    { step: "05", title: "Align" },
    { step: "06", title: "Architect" },
    { step: "07", title: "Capital Readiness" },
    { step: "08", title: "Activate" },
    { step: "09", title: "Measure" },
    { step: "10", title: "Recalibrate" },
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

        <div className="flow-scroll-wrapper">
          <div className="flow-track">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flow-node"
              >
                <div className="flow-node-step">{item.step}</div>
                <div className="flow-node-title">{item.title}</div>
                {index < steps.length - 1 && (
                  <div className="flow-node-connector" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flow-note">
          <strong>Capital Note:</strong> Capital follows a credible
          architecture. Mission-worthiness alone does not establish
          implementation or investment readiness.
        </div>
      </div>
    </section>
  );
};

export default EngagementFlow;
