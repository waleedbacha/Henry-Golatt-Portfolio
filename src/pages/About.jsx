import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import './Pages.css';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Equity First',
      description:
        'Every strategy prioritizes inclusion of historically disinvested communities.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description:
        'Bringing together public, private, and nonprofit stakeholders to align on shared goals.',
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description:
        'Peer-reviewed research and over 15 years of hands-on experience inform every engagement.',
    },
    {
      icon: Heart,
      title: 'Community-Driven',
      description:
        'Solutions designed with and for the communities we serve.',
    },
  ];

  const credentials = [
    'MBA Program Advisory Board — Ohio Dominican University (6+ years)',
    'ForbesBLK Member',
    'Vice Chairman — HBCU Coalition.org',
    'Board Member — HBCU Community Development Action Coalition (8+ years)',
    'Advisory Board — Columbus Urban League MBAC',
    'Member — AEO (Association for Enterprise Opportunity) (7+ years)',
    'Member — Rotary International (8+ years)',
    'Member — Ohio Economic Development Association (9+ years)',
    'Innovation Council — Forward Cities',
    'Advisory Board — The Columbus Foundation Inclusive Entrepreneurship PRI',
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: 'Inclusive Economic Development',
      description:
        'Over 15 years designing and implementing programs that advance equitable opportunity.',
    },
    {
      icon: GraduationCap,
      title: 'HBCU & University Partnerships',
      description:
        'Bridging academic research and economic development across the nation.',
    },
    {
      icon: Building2,
      title: 'Urban & Community Development',
      description:
        'Revitalizing downtown districts and disinvested communities.',
    },
    {
      icon: BookOpen,
      title: 'Published Research',
      description:
        'Peer-reviewed publications in Local Economy (Sage), Journal of Business Administration, and more.',
    },
    {
      icon: Globe,
      title: 'National Advisory Roles',
      description:
        'Serving on boards and coalitions that shape policy across multiple states.',
    },
    {
      icon: Briefcase,
      title: 'Small Business Strategy',
      description:
        'Building ecosystems that support entrepreneurs through every stage of growth.',
    },
  ];

  const publications = [
    'Building an Inclusive Ecosystem for Minority and Women Entrepreneurs — Local Economy (Sage)',
    'Inclusive Entrepreneurship Ecosystem Playbook — Amazon',
    'Columbus Small Business Agenda — Next Street & City of Columbus',
    'Economic Impacts on University Drive — Journal of Business Administration Online',
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
              Building a More <span className="page-title-highlight">Inclusive Economy</span>
            </h1>

            <p className="page-description">
              HG Consulting Services was founded by Henry A. Golatt to help cities,
              universities, and organizations design and implement programs that
              advance equitable economic opportunity across America.
            </p>
          </motion.div>
        </section>

        {/* ============================================================
            FOUNDER SECTION
            ============================================================ */}
        <section className="page-section">
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
                15 years of experience building inclusive ecosystems for entrepreneurs,
                universities, and communities. He founded HG Consulting Services to
                help organizations design and implement programs that advance
                equitable economic opportunity for minority and women entrepreneurs.
              </p>

              <p className="about-founder-bio">
                His career spans federal, state, and local levels — from the U.S.
                Department of Commerce to the City of Columbus — with leadership
                roles at HBCU Coalition.org, the Columbus Foundation, and multiple
                university advisory boards. He is a published researcher, a
                ForbesBLK member, and a national advocate for inclusive economic
                development.
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
        <section className="page-section">
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
            AREAS OF EXPERTISE
            ============================================================ */}
        <section className="page-section">
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
        <section className="page-section">
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