import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./ModelSection.css";

const ModelSection = () => {
  const steps = [
    {
      label: "Institutional Capacity",
      desc: "Build the underlying ability to act.",
    },
    {
      label: "Ecosystem Architecture",
      desc: "Connect the system and align partners.",
    },
    {
      label: "Economic Agency",
      desc: "Expand people's ability to act and choose.",
    },
    {
      label: "Asset Conversion",
      desc: "Turn agency into productive, durable assets.",
    },
    { label: "Community Wealth", desc: "Retain and reinvest value over time." },
  ];

  return (
    <section id="model" className="model-section">
      <div className="model-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="model-header"
        >
          <div className="model-badge">The Economic Empowerment Framework</div>
          <h2 className="model-title">
            From Institutional Assets to{" "}
            <span className="text-green">Community Wealth</span>
          </h2>
          <p className="model-subtitle">
            Institutions often possess land, talent, purchasing power, research,
            and influence without consistently converting those assets into
            economic power for the communities around them. HG Consulting helps
            close that gap.
          </p>
        </motion.div>

        <div className="model-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="model-card"
            >
              <div className="model-card-number">{index + 1}</div>
              <h3 className="model-card-title">{step.label}</h3>
              <p className="model-card-desc">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="model-card-arrow">
                  <ArrowRight size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
