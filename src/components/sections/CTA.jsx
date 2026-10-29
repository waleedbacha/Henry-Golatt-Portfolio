import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Start with the System, <br />
          <span className="text-green">Not Another Program.</span>
        </h2>
        <p className="cta-subtitle">
          If your institution has assets, partners, or opportunities that are
          not yet producing the economic outcomes you expect, let's identify
          where the system is breaking and what architecture may be required.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn-primary">
            Discuss an Opportunity <ArrowRight size={16} />
          </Link>
          <Link to="/discover" className="cta-btn-secondary">
            Assess Your Institution
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
