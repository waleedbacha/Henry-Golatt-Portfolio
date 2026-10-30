import React from "react";
import { motion } from "framer-motion";
import { Building2, Layers, Users, Compass, Landmark } from "lucide-react";
import "./ModelSection.css";

const ModelSection = () => {
  const steps = [
    {
      label: "Institutional Capacity",
      desc: "Build the underlying ability to act.",
      icon: Building2,
    },
    {
      label: "Ecosystem Architecture",
      desc: "Connect the system and align partners.",
      icon: Layers,
    },
    {
      label: "Economic Agency",
      desc: "Expand people's ability to act and choose.",
      icon: Users,
    },
    {
      label: "Asset Conversion",
      desc: "Turn agency into productive, durable assets.",
      icon: Compass,
    },
    {
      label: "Community Wealth",
      desc: "Retain and reinvest value over time.",
      icon: Landmark,
    },
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

        {/* Arrow Infographic */}
        <div className="framework-arrows-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="framework-arrow-box"
            >
              <div className="framework-arrow-content">
                <div className="framework-arrow-icon">
                  <step.icon size={22} strokeWidth={2} />
                </div>
                <div className="framework-arrow-num">0{index + 1}</div>
                <h3 className="framework-arrow-title">{step.label}</h3>
                <p className="framework-arrow-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
