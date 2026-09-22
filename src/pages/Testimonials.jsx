import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quote,
  ArrowLeft,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Check,
  ArrowRight,
  GraduationCap,
  Building2,
  Briefcase,
} from 'lucide-react';
import './Pages.css';

const Testimonials = () => {
  const [activeProject, setActiveProject] = useState(null);

  // ============================================================
  // REAL HG CONSULTING PROJECTS
  // ============================================================
  const projects = [
    {
      id: 'mcgraw-hill',
      title: 'Achieving Diversity, Equity & Inclusion Through Education',
      client: 'McGraw Hill & Achieve 3000',
      category: 'Education & Equity',
      coverImage:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      shortDescription:
        'National panel series examining the role education plays in ensuring equitable outcomes from high school to career.',
      duration: 'Multi-year',
      team: 'Panel + Research',
      industry: 'Education',
      results: [
        'National panel series',
        'Resource curation framework',
        'Pipeline from high school to career',
      ],
      overview:
        'HG Consulting partnered with McGraw Hill and Achieve 3000 to engage guest panelists examining the role education plays in ensuring equitable outcomes. The series explored tools, resources, and relationships in curating traditional and non-traditional educational content.',
      challenge:
        'Understanding how traditional and non-traditional educational content can bridge equity gaps from high school through career entry.',
      solution:
        'Multi-part panel series bringing together industry leaders, educators, and community stakeholders to examine real solutions for educational equity.',
      technologies: [
        'Panel Discussion',
        'Resource Development',
        'Industry Collaboration',
        'Educational Content Curation',
      ],
      outcome:
        'Established a framework for connecting high school students to careers through curated resources and industry partnerships.',
      review: {
        name: 'McGraw Hill Partnership',
        role: 'Partner Organization',
        avatar: '🎓',
        rating: 5,
        text: 'HG Consulting brought together critical voices to examine how education can be a lever for equity. Their ability to convene diverse stakeholders and drive meaningful conversation is unmatched.',
      },
    },
    {
      id: 'columbus-ecosystem',
      title: 'Columbus Inclusive Ecosystem Building',
      client: 'City of Columbus, Ohio',
      category: 'Economic Development',
      coverImage:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      shortDescription:
        'Creating an inclusive small business ecosystem that propels every resident toward prosperity.',
      duration: 'Ongoing',
      team: 'Multi-stakeholder',
      industry: 'Municipal Government',
      results: [
        'City-wide inclusive ecosystem',
        'Multi-stakeholder alignment',
        'Ongoing strategic implementation',
      ],
      overview:
        "Led the effort to create an inclusive small business ecosystem that propels every resident toward prosperity. This work builds on the Columbus Small Business Agenda developed in partnership with Next Street under contract with the City of Columbus.",
      challenge:
        'Historically disinvested communities lacked equitable access to the small business resources, capital, and networks needed to thrive.',
      solution:
        'Developed a comprehensive framework through the Columbus Small Business Agenda, coordinating public and private stakeholders to align on inclusive economic development strategies.',
      technologies: [
        'Ecosystem Mapping',
        'Strategic Planning',
        'Stakeholder Engagement',
        'Columbus Small Business Agenda',
        'Next Street Framework',
      ],
      outcome:
        'Established a coordinated support system for entrepreneurs across the City of Columbus that serves as a national model for inclusive economic development.',
      review: {
        name: 'City of Columbus',
        role: 'Municipal Partnership',
        avatar: '🏛️',
        rating: 5,
        text: "Henry's work has fundamentally changed how we approach inclusive economic development. His vision and execution have made Columbus a national leader in equitable entrepreneurship.",
      },
    },
    {
      id: 'entrepreneur-network',
      title: 'City of Columbus Entrepreneur Support Network',
      client: 'City of Columbus',
      category: 'Entrepreneurship',
      coverImage:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      shortDescription:
        'Pilot program providing critical services to entrepreneurs across the small business lifecycle.',
      duration: 'Pilot Program',
      team: 'City + Partners',
      industry: 'Entrepreneurship',
      results: [
        'Pilot program launched',
        'Lifecycle support model',
        'Network coordination',
      ],
      overview:
        'Led the effort for the City of Columbus to establish and implement a pilot program aimed at providing critical services to entrepreneurs across the small business lifecycle — from ideation through growth.',
      challenge:
        'Entrepreneurs faced fragmented support across the business lifecycle, with no coordinated pathway from concept to scale.',
      solution:
        'Designed and launched a coordinated network providing services from ideation through growth, connecting entrepreneurs to the right resources at the right stage.',
      technologies: [
        'Program Design',
        'Network Coordination',
        'Service Delivery Model',
        'Entrepreneur Support',
        'City Partnership',
      ],
      outcome:
        'Established a model for coordinated entrepreneur support that serves as a template for other cities across the nation.',
      review: {
        name: 'Columbus Entrepreneurs',
        role: 'Program Participants',
        avatar: '🚀',
        rating: 5,
        text: 'The network Henry built gave me access to resources, mentors, and capital I never knew existed. It changed the trajectory of my business.',
      },
    },
  ];

  const openProject = (projectId) => {
    setActiveProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => {
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProjectData = projects.find((p) => p.id === activeProject);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">

        {/* MAIN VIEW - Projects Grid */}
        {!activeProject && (
          <>
            <section className="page-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="page-hero-content"
              >
                <h1 className="page-title">
                  Our <span className="page-title-highlight">Projects</span>
                </h1>
                <p className="page-description">
                  Real initiatives that are shaping inclusive economic ecosystems
                  across America. Click any project to see details and impact.
                </p>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="project-card"
                    onClick={() => openProject(project.id)}
                  >
                    <div className="project-card-border" />

                    {/* Cover Image */}
                    <div className="project-card-image">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        loading="lazy"
                      />
                      <div className="project-card-image-overlay" />
                      <div className="project-card-category">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="project-card-content">
                      <div className="project-card-client">
                        <span className="project-card-client-dot" />
                        {project.client}
                      </div>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-desc">
                        {project.shortDescription}
                      </p>

                      {/* Results */}
                      <div className="project-card-results">
                        {project.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="project-card-result">
                            <TrendingUp size={12} />
                            {result}
                          </div>
                        ))}
                      </div>

                      {/* Review Preview */}
                      <div className="project-card-review">
                        <div className="project-card-review-avatar">
                          {project.review.avatar}
                        </div>
                        <div className="project-card-review-info">
                          <div className="project-card-review-stars">
                            {[...Array(project.review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                fill="#32b554"
                                strokeWidth={0}
                                color="#32b554"
                              />
                            ))}
                          </div>
                          <div className="project-card-review-name">
                            {project.review.name}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="project-card-footer">
                        <span className="project-card-view">
                          View Project <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* PROJECT DETAIL VIEW */}
        {activeProject && activeProjectData && (
          <>
            <section className="page-hero project-detail-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="page-hero-content"
              >
                <button
                  className="project-back-button"
                  onClick={closeProject}
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </button>

                <div className="project-detail-category">
                  {activeProjectData.category}
                </div>

                <h1 className="page-title">{activeProjectData.title}</h1>

                <div className="project-detail-client">
                  <span>with</span> {activeProjectData.client}
                </div>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="project-detail-container">

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="project-detail-image"
                >
                  <img
                    src={activeProjectData.coverImage}
                    alt={activeProjectData.title}
                  />
                </motion.div>

                {/* Project Info Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="project-info-bar"
                >
                  <div className="project-info-item">
                    <Clock size={16} />
                    <div>
                      <div className="project-info-label">Duration</div>
                      <div className="project-info-value">
                        {activeProjectData.duration}
                      </div>
                    </div>
                  </div>
                  <div className="project-info-divider" />
                  <div className="project-info-item">
                    <Users size={16} />
                    <div>
                      <div className="project-info-label">Team</div>
                      <div className="project-info-value">
                        {activeProjectData.team}
                      </div>
                    </div>
                  </div>
                  <div className="project-info-divider" />
                  <div className="project-info-item">
                    <TrendingUp size={16} />
                    <div>
                      <div className="project-info-label">Sector</div>
                      <div className="project-info-value">
                        {activeProjectData.industry}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="project-detail-section"
                >
                  <h2 className="project-detail-heading">Project Overview</h2>
                  <p className="project-detail-text">
                    {activeProjectData.overview}
                  </p>
                </motion.div>

                {/* Challenge & Solution */}
                <div className="project-detail-two-col">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="project-detail-section"
                  >
                    <h2 className="project-detail-heading">The Challenge</h2>
                    <p className="project-detail-text">
                      {activeProjectData.challenge}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="project-detail-section"
                  >
                    <h2 className="project-detail-heading">Our Approach</h2>
                    <p className="project-detail-text">
                      {activeProjectData.solution}
                    </p>
                  </motion.div>
                </div>

                {/* Frameworks */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="project-detail-section"
                >
                  <h2 className="project-detail-heading">
                    Frameworks & Methods
                  </h2>
                  <div className="project-tech-list">
                    {activeProjectData.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="project-detail-section"
                >
                  <h2 className="project-detail-heading">Key Results</h2>
                  <div className="project-results-grid">
                    {activeProjectData.results.map((result, i) => (
                      <div key={i} className="project-result-item">
                        <div className="project-result-check">
                          <Check size={16} />
                        </div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  <p className="project-detail-outcome">
                    {activeProjectData.outcome}
                  </p>
                </motion.div>

                {/* Partner Review */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="project-review-card"
                >
                  <div className="project-review-quote">
                    <Quote size={40} />
                  </div>

                  <div className="project-review-stars">
                    {[...Array(activeProjectData.review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#32b554"
                        strokeWidth={0}
                        color="#32b554"
                      />
                    ))}
                  </div>

                  <p className="project-review-text">
                    "{activeProjectData.review.text}"
                  </p>

                  <div className="project-review-author">
                    <div className="project-review-avatar">
                      {activeProjectData.review.avatar}
                    </div>
                    <div>
                      <div className="project-review-name">
                        {activeProjectData.review.name}
                      </div>
                      <div className="project-review-role">
                        {activeProjectData.review.role}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="project-cta"
                >
                  <h3>Have a similar initiative in mind?</h3>
                  <p>
                    Let's discuss how HG Consulting can help you build a more
                    inclusive economy.
                  </p>
                  <a href="/contact" className="project-cta-button">
                    Get in Touch →
                  </a>
                </motion.div>

              </div>
            </section>
          </>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;