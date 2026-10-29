import React from "react";
import { motion } from "framer-motion";
import { Compass, HardHat, Users } from "lucide-react";
import "./ArchitectBuilder.css";

const ArchitectBuilder = () => {
  const cards = [
    {
      icon: Compass,
      title: "Architect",
      subtitle: "HG Consulting",
      description:
        "We frame the opportunity, assess capacity, map the ecosystem, diagnose bottlenecks, align partners, and design the architecture.",
      accent: "#32b554",
    },
    {
      icon: HardHat,
      title: "Builders",
      subtitle: "Qualified Entities",
      description:
        "They implement, build, deliver, operate, finance, administer, or otherwise carry out defined workstreams.",
      accent: "#3b82f6",
    },
    {
      icon: Users,
      title: "Implementation Partner",
      subtitle: "Specific Entity",
      description:
        "The organization selected to serve as a Builder for a particular project or workstream.",
      accent: "#8b5cf6",
    },
  ];

  return (
    <section className="architect-builder-section">
      <div className="ab-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ab-header"
        >
          <div className="ab-badge">How We Work</div>
          <h2 className="ab-title">
            We Architect. <span className="text-blue">Builders Execute.</span>
          </h2>
          <p className="ab-subtitle">
            A disciplined division of responsibility from economic-system design
            to implementation and measurable outcomes. Architect and Builder are
            functions, not fixed organization types.
          </p>
        </motion.div>

        <div className="ab-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="ab-card"
            >
              <div
                className="ab-card-icon"
                style={{
                  color: card.accent,
                  borderColor: `${card.accent}40`,
                  background: `${card.accent}15`,
                }}
              >
                <card.icon size={24} />
              </div>
              <div className="ab-card-role" style={{ color: card.accent }}>
                {card.title}
              </div>
              <h3 className="ab-card-subtitle">{card.subtitle}</h3>
              <p className="ab-card-desc">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectBuilder;
