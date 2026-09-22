import React from "react";
import { Star } from "lucide-react";
import heroImage from "../../assets/image.png";
import "./Hero.css";

const AnimatedBorder = () => {
  return (
    <>
      <span className="hero-card-border-static" />
      <span className="hero-card-border-glow" />
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* ================= BACKGROUND ================= */}
      <div className="hero-background">
        <div className="hero-background-shape-1" />
        <div className="hero-background-shape-2" />
        <div className="hero-background-shape-3" />

        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="hero-grid-pattern" />
      </div>

      {/* ================= HERO ================= */}
      <div className="hero-content">
        <div className="hero-grid">
          {/* ================= LEFT ================= */}
          {/* ================= LEFT ================= */}
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="block">Be a Part of the</span>
              <span className="block hero-title-highlight">
                HG Consulting Services
              </span>
              <span className="block">Business and Community</span>
              <span className="block">Ecosystem</span>
            </h1>

            <p className="hero-description">
              Get listed in one of our searchable databases and online
              directories
            </p>

            {/* TRUSTED BY */}
            <div className="hero-trusted">
              <div className="hero-trusted-info">
                <div className="hero-trusted-label">
                  Trusted by 1000+ clients and partners worldwide
                </div>
                <div className="hero-trusted-rating">
                  <div className="hero-stars">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={13}
                        fill="#35b455"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="hero-rating-number">4.9</span>
                </div>
              </div>
            </div>
          </div>
          {/* ================= RIGHT CARDS ================= */}
          <div className="hero-right">
            {/* LARGE CARD - 15+ Years */}
            <div className="hero-card hero-card-large">
              <AnimatedBorder />

              <div className="hero-card-large-content">
                <div className="hero-card-large-value">15+</div>

                <div className="hero-card-large-label">
                  Years of Experience
                  <br />
                  In Economic Development
                </div>
              </div>

              <div className="hero-card-shapes">
                <div className="hero-card-shape-1" />
                <div className="hero-card-shape-2" />
                <div className="hero-card-shape-3" />
              </div>
            </div>

            {/* IMAGE CARD - Henry A. Golatt */}
            <div className="hero-card hero-card-image">
              <AnimatedBorder />

              <img src={heroImage} alt="Henry A. Golatt" />

              <div className="hero-card-image-overlay" />
            </div>

            {/* FORBESBLK CARD */}
            <div className="hero-card hero-card-bottom-left">
              <AnimatedBorder />

              <span className="hero-code-quality-number">Forbes</span>

              <span className="hero-code-quality-label">BLK Member</span>
            </div>

            {/* BOARD POSITIONS CARD */}
            <div className="hero-card hero-card-bottom-right">
              <AnimatedBorder />

              <div className="hero-card-bottom-right-value">40+</div>

              <div className="hero-card-bottom-right-label">
                Board Positions
              </div>
            </div>
          </div>
        </div>

        {/* ================= CLIENT LOGOS ================= */}
        {/* ================= DIRECTORY LISTINGS ================= */}
        <div className="hero-clients">
          <div className="hero-clients-grid">
            {[
              {
                icon: "",
                name: "Drones,Drones,Drones",
                url: "https://drones-drones-drones.directoryup.com",
              },
              {
                icon: "",
                name: "WomeNomics Business Directory",
                url: "https://www.uswomenbusinesses.com/",
              },
              {
                icon: "",
                name: "Green Clean Resources",
                url: "https://w866startbd.directoryup.com/",
              },
              // {
              //   icon: "",
              //   name: "One HBCU.Net",
              //   url: "https://onehbcu.net",
              // },
              {
                icon: "",
                name: "Town Square Connect",
                url: "https://townsquareconnect.com",
              },
              {
                icon: "",
                name: "Newtown Business Council",
                url: "https://newtownbusinesscouncil.com",
              },
              {
                icon: "",
                name: "Pine Bluff Entrepreneur Collaborative",
                url: "https://pinebluffentrepreneur.com",
              },
            ].map((directory, index) => (
              <a
                key={index}
                href={directory.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-client-item hero-client-item-link"
              >
                <span className="hero-client-icon">{directory.icon}</span>
                <div>
                  <div className="hero-client-name">{directory.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
