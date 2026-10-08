import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Heart,
  GraduationCap,
  Building2,
  Globe,
  BookOpen,
  TrendingUp,
  Briefcase,
  Check,
  Linkedin,
  MapPin,
} from "lucide-react";
import uapbIncubator from "../assets/hero.png";
import "./Pages.css";

const About = () => {
  const location = useLocation();

  // ============================================================
  // ✅ Deep-link support — auto-scroll to section from URL hash
  // ============================================================
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (!element) {
        // Retry once more if element hasn't rendered yet
        setTimeout(() => {
          const retry = document.getElementById(id);
          if (retry) scrollTo(retry);
        }, 400);
        return;
      }
      scrollTo(element);
    };

    const scrollTo = (el) => {
      const offset = 90; // navbar height + breathing room
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      // ✅ Highlight flash
      el.classList.add("hash-highlight");
      setTimeout(() => el.classList.remove("hash-highlight"), 2000);

      if (window.lenis) {
        window.lenis.scrollTo(top, { duration: 1.2 });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    const timer = setTimeout(scrollToSection, 400);
    return () => clearTimeout(timer);
  }, [location.hash, location.pathname]);

  const values = [
    {
      icon: Target,
      title: "Equity First",
      description:
        "Every strategy prioritizes inclusion of historically disinvested communities.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Bringing together public, private, and nonprofit stakeholders to align on shared goals.",
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description:
        "Peer-reviewed research and over 25 years of hands-on experience inform every engagement.",
    },
    {
      icon: Heart,
      title: "Community-Driven",
      description: "Solutions designed with and for the communities we serve.",
    },
  ];

  const credentials = [
    "MBA Program Advisory Board — Ohio Dominican University (6+ years)",
    "ForbesBLK Member",
    "Vice Chairman — HBCU Coalition.org",
    "Board Member — HBCU Community Development Action Coalition (8+ years)",
    "Advisory Board — Columbus Urban League MBAC",
    "Member — AEO (Association for Enterprise Opportunity) (7+ years)",
    "Member — Rotary International (8+ years)",
    "Member — Ohio Economic Development Association (9+ years)",
    "Innovation Council — Forward Cities",
    "Advisory Board — The Columbus Foundation Inclusive Entrepreneurship PRI",
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: "Inclusive Economic Development",
      description:
        "Over 25 years designing and implementing programs that advance equitable opportunity.",
    },
    {
      icon: GraduationCap,
      title: "HBCU & University Partnerships",
      description:
        "Bridging academic research and economic development across the nation.",
    },
    {
      icon: Building2,
      title: "Urban & Community Development",
      description:
        "Revitalizing downtown districts and disinvested communities.",
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description:
        "Peer-reviewed publications in Local Economy (Sage), Journal of Business Administration, and more.",
    },
    {
      icon: Globe,
      title: "National Advisory Roles",
      description:
        "Serving on boards and coalitions that shape policy across multiple states.",
    },
    {
      icon: Briefcase,
      title: "Small Business Strategy",
      description:
        "Building ecosystems that support entrepreneurs through every stage of growth.",
    },
  ];

  const publications = [
    "Building an Inclusive Ecosystem for Minority and Women Entrepreneurs — Local Economy (Sage)",
    "Inclusive Entrepreneurship Ecosystem Playbook — Amazon",
    "Columbus Small Business Agenda — Next Street & City of Columbus",
    "Economic Impacts on University Drive — Journal of Business Administration Online",
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-main">
        {/* ============================================================
            PAGE HERO
            ============================================================ */}
        <section className="page-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="page-hero-content"
          >
            <div className="about-badge">
              <Users size={14} />
              <span>About HG Consulting</span>
            </div>

            <h1 className="page-title">
              Building a More{" "}
              <span className="page-title-highlight">Inclusive Economy</span>
            </h1>

            <p className="page-description">
              HG Consulting Services was founded by Henry A. Golatt to help
              cities, universities, and organizations design and implement
              programs that advance equitable economic opportunity across
              America.
            </p>
          </motion.div>
        </section>

        {/* ============================================================
            FOUNDER SECTION
            ============================================================ */}
        <section id="founder" className="page-section">
          <div className="about-founder">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="about-founder-content"
            >
              <div className="about-founder-label">FOUNDER & PRINCIPAL</div>

              <h2 className="about-founder-name">
                Henry A. <span className="page-title-highlight">Golatt</span>
              </h2>

              <p className="about-founder-bio">
                Henry A. Golatt is an economic development strategist with over
                25 years of experience building inclusive ecosystems for
                entrepreneurs, universities, and communities. He founded HG
                Consulting Services to help organizations design and implement
                programs that advance equitable economic opportunity for
                minority and women entrepreneurs.
              </p>

              <p className="about-founder-bio">
                His career spans federal, state, and local levels — from the
                U.S. Department of Commerce to the City of Columbus — with
                leadership roles at HBCU Coalition.org, the Columbus Foundation,
                and multiple university advisory boards. He is a published
                researcher, a ForbesBLK member, and a national advocate for
                inclusive economic development.
              </p>

              <div className="about-founder-meta">
                <div className="about-meta-item">
                  <MapPin size={16} />
                  <span>Columbus, Ohio, USA</span>
                </div>

                <div className="about-meta-item">
                  <BookOpen size={16} />
                  <span>Published Author & Researcher</span>
                </div>

                <div className="about-meta-item">
                  <Award size={16} />
                  <span>Multiple National Awards</span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/hgconsultingservices"
                target="_blank"
                rel="noopener noreferrer"
                className="about-founder-linkedin"
              >
                <Linkedin size={18} />
                View LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="about-founder-image"
            >
              <div className="about-founder-image-border" />
              <div className="about-founder-image-wrapper">
                <div className="about-founder-avatar">HG</div>
              </div>
              <div className="about-founder-image-caption">
                Henry A. Golatt
                <span>Founder & Principal, HG Consulting Services</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            MISSION & VALUES
            ============================================================ */}
        <section id="mission" className="page-section">
          <div className="about-section-header">
            <div className="about-section-badge">
              <Target size={14} />
              <span>Our Values</span>
            </div>
            <h2 className="about-section-title">
              What <span className="page-title-highlight">Drives Us</span>
            </h2>
            <p className="about-section-subtitle">
              Every engagement is guided by four core principles.
            </p>
          </div>

          <div className="page-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="page-card"
              >
                <div className="page-card-icon">
                  <value.icon size={28} />
                </div>
                <h3 className="page-card-title">{value.title}</h3>
                <p className="page-card-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            SIGNATURE PROJECT — UAPB Business Support Incubator
            ============================================================ */}
        <section id="uapb-incubator" className="page-section">
          <div className="about-section-header">
            <div className="about-section-badge">
              <Building2 size={14} />
              <span>Signature Project</span>
            </div>
            <h2 className="about-section-title">
              UAPB Business Support{" "}
              <span className="page-title-highlight">Incubator</span>
            </h2>
            <p className="about-section-subtitle">
              A 20-year partnership that turned an initial $5M investment into
              $75M+ in downtown development — and became a national model for
              HBCU-led community revitalization.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="about-project-card"
          >
            <div className="about-project-image">
              <img src={uapbIncubator} alt="UAPB Business Support Incubator" />
            </div>

            <div className="about-project-content">
              <div className="about-project-label">1999 — 2025</div>

              <h3 className="about-project-title">
                How a University Transformed a Downtown
              </h3>

              <p className="about-project-text">
                In 1999, the University of Arkansas at Pine Bluff began
                assembling land in the Central Business District of Pine Bluff,
                Arkansas. Six years later, groundbreaking began on the UAPB
                Business Support Incubator — a $5 million facility that opened
                in 2006 to provide entrepreneurs with the resources, mentorship,
                and space they needed to grow.
              </p>

              <p className="about-project-text">
                Led by Henry A. Golatt as Project Administrator and later
                Executive Director of UAPB's Economic Research and Development
                Center, the project catalyzed over{" "}
                <strong>$75 million in subsequent downtown development</strong>,
                clustered into a "model block" spanning 6th through 8th Streets.
                It became a national model for strategic doing and inclusive
                development.
              </p>

              <div className="about-project-stats">
                <div className="about-project-stat">
                  <div className="about-project-stat-value">$5M</div>
                  <div className="about-project-stat-label">
                    Initial Investment
                  </div>
                </div>
                <div className="about-project-stat">
                  <div className="about-project-stat-value">$75M+</div>
                  <div className="about-project-stat-label">Total Impact</div>
                </div>
                <div className="about-project-stat">
                  <div className="about-project-stat-value">20+</div>
                  <div className="about-project-stat-label">
                    Years of Partnership
                  </div>
                </div>
              </div>

              <div className="about-project-outcomes">
                <h4 className="about-project-outcomes-title">
                  What the Project Delivered
                </h4>
                <ul>
                  <li>
                    <Check size={14} />
                    <span>
                      UAPB Business Support Incubator and Office Complex
                    </span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>
                      FastTrac Entrepreneurial Training and business assistance
                    </span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>UAPB-BSI 3rd Thursdays Networking Series (2009)</span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>
                      Hope Credit Union branch brought to downtown (2013)
                    </span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>
                      Three successful loan programs for small businesses
                    </span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>Catalyzed $75M+ in downtown development</span>
                  </li>
                </ul>
              </div>

              <p className="about-project-quote">
                "The partnership between UAPB and downtown Pine Bluff stands as
                a model for institutional engagement in community development,
                proving that when universities invest in their communities,
                transformative change is possible."
                <span className="about-project-quote-source">
                  — Arkansas Democrat-Gazette, February 2025
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* ============================================================
            AREAS OF EXPERTISE
            ============================================================ */}
        <section id="expertise" className="page-section">
          <div className="about-section-header">
            <div className="about-section-badge">
              <Briefcase size={14} />
              <span>Expertise</span>
            </div>
            <h2 className="about-section-title">
              Areas of <span className="page-title-highlight">Expertise</span>
            </h2>
          </div>

          <div className="page-grid">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="page-card"
              >
                <div className="page-card-icon">
                  <item.icon size={26} />
                </div>
                <h3 className="page-card-title">{item.title}</h3>
                <p className="page-card-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================================
            CREDENTIALS + PUBLICATIONS
            ============================================================ */}
        <section id="credentials" className="page-section">
          <div className="about-two-col">
            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="about-list-card"
            >
              <div className="about-list-icon">
                <Award size={22} />
              </div>
              <h3 className="about-list-title">Board & Advisory Roles</h3>
              <ul className="about-list">
                {credentials.map((item, i) => (
                  <li key={i}>
                    <Check size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="about-list-card"
            >
              <div className="about-list-icon">
                <BookOpen size={22} />
              </div>
              <h3 className="about-list-title">Selected Publications</h3>
              <ul className="about-list">
                {publications.map((item, i) => (
                  <li key={i}>
                    <Check size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            CTA
            ============================================================ */}
        <section className="page-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-cta"
          >
            <h3 className="about-cta-title">
              Let's Build a More Inclusive Economy Together
            </h3>
            <p className="about-cta-text">
              Whether you're a city, university, foundation, or entrepreneur
              support organization — HG Consulting can help you design and
              implement programs that create lasting impact.
            </p>
            <a href="/contact" className="about-cta-button">
              Get in Touch →
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
