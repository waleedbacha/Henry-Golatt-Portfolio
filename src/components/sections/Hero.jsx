import React from "react";
import { ArrowRight, LayoutTemplate, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/image.webp"; // Using the existing hero image
import "./Hero.css";

const AnimatedBorder = () => (
  <>
    <span className="hero-card-border-static" />
    <span className="hero-card-border-glow" />
  </>
);

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background */}
      <div className="hero-background">
        <div className="hero-background-shape-1" />
        <div className="hero-background-shape-2" />
        <div className="hero-background-shape-3" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Economic Empowerment • Ecosystem Architecture
            </div>

            <h1 className="hero-title">
              We Architect <br />
              <span className="hero-title-highlight">
                Economic Empowerment.
              </span>
            </h1>

            <p className="hero-description">
              HG Consulting helps institutions turn underused assets, fragmented
              relationships, and complex opportunities into coordinated economic
              systems designed to expand agency, create productive assets, and
              build durable community wealth.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="hero-btn-primary">
                Discuss an Opportunity
                <ArrowRight size={16} />
              </Link>
              <Link to="/model" className="hero-btn-secondary">
                <LayoutTemplate size={16} />
                Explore Our Model
              </Link>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="hero-right">
            {/* Card 1: Architect */}
            <div className="hero-card hero-card-large">
              <AnimatedBorder />
              <div className="hero-card-large-content">
                <div className="hero-card-large-value">Architect</div>
                <div className="hero-card-large-label">
                  HG Consulting designs the system. We diagnose conditions,
                  identify underused assets, and define pathways.
                </div>
              </div>
            </div>

            {/* Card 2: Builders */}
            <div className="hero-card hero-card-image">
              <AnimatedBorder />
              <img src={heroImage} alt="Economic Empowerment" />
              <div className="hero-card-image-overlay" />
              <div className="hero-image-caption">
                <span className="hero-image-caption-tag">Builders</span>
                <span className="hero-image-caption-text">
                  Qualified entities execute defined workstreams.
                </span>
              </div>
            </div>

            {/* Card 3: Implementation Partner */}
            <div className="hero-card hero-card-bottom-left">
              <AnimatedBorder />
              <ShieldCheck size={18} className="hero-icon-green" />
              <span className="hero-code-quality-label">
                Implementation Partner
              </span>
            </div>

            {/* Card 4: Community Wealth */}
            {/* Card 4: Asset Conversion Flow */}
            <div className="hero-card hero-card-bottom-right">
              <AnimatedBorder />
              <div className="hero-flow-label">Asset Conversion</div>
              <div className="hero-flow-steps">
                <span>Agency</span>
                <span className="hero-flow-arrow">→</span>
                <span>Assets</span>
                <span className="hero-flow-arrow">→</span>
                <span>Wealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
