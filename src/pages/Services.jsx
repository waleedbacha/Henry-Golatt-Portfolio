import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  GraduationCap,
  Briefcase,
  Scale,
  Target,
  Building2,
  ArrowLeft,
  Check,
  Users,
  Award,
  BookOpen,
  Globe,
  Lightbulb,
  LineChart,
  FileText,
  Landmark,
} from 'lucide-react';
import './Pages.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  // ============================================================
  // REAL HG CONSULTING SERVICES
  // ============================================================
  const services = [
    {
      id: 'economic-development',
      title: 'Economic Development Strategy',
      subtitle: 'Strategic Planning',
      icon: TrendingUp,
      coverImage:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      shortDescription:
        'Comprehensive strategies to build inclusive, dynamic, and continuously improving local economic ecosystems.',
      price: 'Custom Engagement',
      duration: '6-18 months',
      features: [
        'Ecosystem analysis & mapping',
        'Strategic plan development',
        'Stakeholder engagement',
        'Implementation roadmaps',
        'Impact measurement frameworks',
      ],
      details: [
        {
          icon: Users,
          title: 'Stakeholder Engagement',
          description:
            'Bringing together public, private, and nonprofit leaders to align on shared economic goals.',
        },
        {
          icon: LineChart,
          title: 'Ecosystem Analysis',
          description:
            'Data-driven assessment of local economic strengths, gaps, and opportunities.',
        },
        {
          icon: FileText,
          title: 'Strategic Plan Development',
          description:
            'Evidence-based plans modeled on our published Inclusive Entrepreneurship Playbook.',
        },
        {
          icon: Target,
          title: 'Impact Measurement',
          description:
            'Frameworks to track economic outcomes and ensure long-term sustainability.',
        },
      ],
      technologies: [
        'Columbus Small Business Agenda',
        'Inclusive Entrepreneurship Playbook',
        'Next Street Framework',
      ],
    },
    {
      id: 'hbcu-partnerships',
      title: 'HBCU & University Partnerships',
      subtitle: 'Education & Research',
      icon: GraduationCap,
      coverImage:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      shortDescription:
        'Connecting historically black colleges and universities to economic development and commercialization opportunities.',
      price: 'Custom Engagement',
      duration: '3-12 months',
      features: [
        'University-industry collaboration',
        'Technology transfer & commercialization',
        'Curriculum & program development',
        'Research funding strategies',
        'Minority business development',
      ],
      details: [
        {
          icon: Lightbulb,
          title: 'Technology Commercialization',
          description:
            'Bridging university research to market through strategic commercialization pathways.',
        },
        {
          icon: BookOpen,
          title: 'Research & Curriculum',
          description:
            'Developing programs that align academic research with real-world economic impact.',
        },
        {
          icon: Users,
          title: 'Industry Partnerships',
          description:
            'Linking universities with industry leaders for internships, research, and job placement.',
        },
        {
          icon: Users,
          title: 'Minority Business Development',
          description:
            'Creating pathways for underrepresented entrepreneurs through university partnerships.',
        },
      ],
      technologies: [
        'HBCU CDAC',
        'Arkansas Technology Transfer Society',
        'HBCU Coalition.org',
      ],
    },
    {
      id: 'small-business',
      title: 'Small Business Ecosystem Building',
      subtitle: 'Entrepreneurship',
      icon: Briefcase,
      coverImage:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      shortDescription:
        'Designing and implementing programs that support entrepreneurs through every stage of the business lifecycle.',
      price: 'Custom Engagement',
      duration: '6-24 months',
      features: [
        'Entrepreneur support network design',
        'Access to capital strategies',
        'Business accelerator programs',
        'Mentorship & training',
        'Minority business assistance',
      ],
      details: [
        {
          icon: Users,
          title: 'Entrepreneur Networks',
          description:
            'Building coordinated support systems for entrepreneurs across the business lifecycle.',
        },
        {
          icon: LineChart,
          title: 'Access to Capital',
          description:
            'Strategies to connect entrepreneurs with funding, grants, and investment opportunities.',
        },
        {
          icon: Target,
          title: 'Accelerator Programs',
          description:
            'Designing and launching programs that accelerate business growth.',
        },
        {
          icon: Award,
          title: 'Minority Business Assistance',
          description:
            'Specialized support for minority, women, and underserved entrepreneurs.',
        },
      ],
      technologies: [
        'Columbus Minority Business Assistance Center',
        'AEO Network',
        'Forward Cities',
      ],
    },
    {
      id: 'policy-advocacy',
      title: 'Policy & Advocacy',
      subtitle: 'Public-Private Partnerships',
      icon: Scale,
      coverImage:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      shortDescription:
        'Advising on policies that advance economic inclusion at federal, state, and local levels.',
      price: 'Custom Engagement',
      duration: 'Ongoing',
      features: [
        'Policy briefings',
        'Legislative advocacy',
        'Public-private partnership design',
        'Community development strategies',
        'Economic impact analysis',
      ],
      details: [
        {
          icon: FileText,
          title: 'Policy Briefings',
          description:
            'Preparing evidence-based briefings for federal, state, and local policymakers.',
        },
        {
          icon: Landmark,
          title: 'Legislative Advocacy',
          description:
            'Advocating for policies that support inclusive economic development.',
        },
        {
          icon: Building2,
          title: 'Public-Private Partnerships',
          description:
            'Designing collaborations between government, business, and community organizations.',
        },
        {
          icon: LineChart,
          title: 'Economic Impact Analysis',
          description:
            'Quantifying the economic impact of proposed policies and programs.',
        },
      ],
      technologies: [
        'Ohio Economic Development Association',
        'AEO Network',
        'Delta Regional Authority',
      ],
    },
    {
      id: 'strategic-planning',
      title: 'Strategic Planning & Governance',
      subtitle: 'Board Development',
      icon: Target,
      coverImage:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      shortDescription:
        'Providing fiduciary oversight, strategic guidance, and governance expertise to boards and organizations.',
      price: 'Custom Engagement',
      duration: '12+ months',
      features: [
        'Board development & training',
        'Executive search & evaluation',
        'Strategic partnership identification',
        'Funding strategy development',
        'Organizational growth planning',
      ],
      details: [
        {
          icon: Users,
          title: 'Board Development',
          description:
            'Building effective boards with the right governance structures and talent.',
        },
        {
          icon: Target,
          title: 'Strategic Partnerships',
          description:
            'Identifying and recommending new regional and national strategic partnerships.',
        },
        {
          icon: LineChart,
          title: 'Funding Strategies',
          description:
            'Developing funding and advocacy strategies to ensure organizational growth.',
        },
        {
          icon: FileText,
          title: 'Policy & Governance',
          description:
            'Developing policies that govern executive pay, conflict of interest, and program budgets.',
        },
      ],
      technologies: [
        'HBCU Coalition.org',
        'Ohio Dominican University MBA Program',
        'Columbus Foundation',
      ],
    },
    {
      id: 'urban-development',
      title: 'Urban & Downtown Development',
      subtitle: 'Community Revitalization',
      icon: Building2,
      coverImage:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      shortDescription:
        'Revitalizing urban cores through historic preservation, strategic planning, and economic development.',
      price: 'Custom Engagement',
      duration: '1-5 years',
      features: [
        'Downtown revitalization plans',
        'Historic preservation strategies',
        'Property valuation appeals',
        'Public-private financing',
        'Community engagement',
      ],
      details: [
        {
          icon: Building2,
          title: 'Downtown Revitalization',
          description:
            'Strategic plans for economic revitalization of downtown districts and major entrances.',
        },
        {
          icon: Landmark,
          title: 'Historic Preservation',
          description:
            'Preserving historic buildings while driving economic development.',
        },
        {
          icon: FileText,
          title: 'Property Valuation',
          description:
            'Hearing appeals of property valuation and classification on equalization boards.',
        },
        {
          icon: Building2,
          title: 'Community Engagement',
          description:
            'Facilitating and championing local inclusive entrepreneurship initiatives.',
        },
      ],
      technologies: [
        'Pine Bluff Downtown Development',
        'East Main Street SID',
        'Arkansas Downtown Network',
      ],
    },
  ];

  const openService = (serviceId) => {
    setActiveService(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeService = () => {
    setActiveService(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeServiceData = services.find((s) => s.id === activeService);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">

        {/* MAIN SERVICES VIEW */}
        {!activeService && (
          <>
            <section className="page-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="page-hero-content"
              >
                <h1 className="page-title">
                  Our <span className="page-title-highlight">Services</span>
                </h1>
                <p className="page-description">
                  HG Consulting helps cities, universities, and organizations build
                  thriving ecosystems for minority and women entrepreneurs.
                  Click any service to see detailed information.
                </p>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="services-card-grid">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="services-card"
                    onClick={() => openService(service.id)}
                  >
                    <div className="services-card-border" />

                    <div className="services-card-image">
                      <img src={service.coverImage} alt={service.title} loading="lazy" />
                      <div className="services-card-image-overlay" />
                      <div className="services-card-icon">
                        <service.icon size={24} />
                      </div>
                    </div>

                    <div className="services-card-content">
                      <p className="services-card-subtitle">{service.subtitle}</p>
                      <h3 className="services-card-title">{service.title}</h3>
                      <p className="services-card-desc">{service.shortDescription}</p>

                      <div className="services-card-footer">
                        <div className="services-card-price">{service.price}</div>
                        <span className="services-card-view">View Details →</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* SERVICE DETAIL VIEW */}
        {activeService && activeServiceData && (
          <>
            <section className="page-hero service-detail-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="page-hero-content"
              >
                <button className="services-back-button" onClick={closeService}>
                  <ArrowLeft size={18} />
                  Back to Services
                </button>

                <div className="services-detail-header">
                  <div className="services-detail-icon">
                    <activeServiceData.icon size={40} />
                  </div>
                  <div>
                    <p className="services-detail-subtitle">
                      {activeServiceData.subtitle}
                    </p>
                    <h1 className="page-title services-detail-title">
                      {activeServiceData.title}
                    </h1>
                  </div>
                </div>

                <p className="page-description">
                  {activeServiceData.shortDescription}
                </p>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="services-detail-container">

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="services-detail-image"
                >
                  <img
                    src={activeServiceData.coverImage}
                    alt={activeServiceData.title}
                  />
                </motion.div>

                {/* Quick Info Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="services-detail-info-bar"
                >
                  <div className="services-info-item">
                    <div className="services-info-label">Engagement</div>
                    <div className="services-info-value">
                      {activeServiceData.price}
                    </div>
                  </div>
                  <div className="services-info-divider" />
                  <div className="services-info-item">
                    <div className="services-info-label">Duration</div>
                    <div className="services-info-value">
                      {activeServiceData.duration}
                    </div>
                  </div>
                  <div className="services-info-divider" />
                  <div className="services-info-item">
                    <div className="services-info-label">Frameworks</div>
                    <div className="services-info-value">
                      {activeServiceData.technologies.length}+
                    </div>
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="services-detail-section"
                >
                  <h2 className="services-detail-heading">What We Offer</h2>
                  <div className="services-features-list">
                    {activeServiceData.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                        className="services-feature-item"
                      >
                        <div className="services-feature-check">
                          <Check size={14} />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="services-detail-section"
                >
                  <h2 className="services-detail-heading">How We Deliver</h2>
                  <div className="services-details-grid">
                    {activeServiceData.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="services-detail-card"
                      >
                        <div className="services-detail-card-icon">
                          <detail.icon size={22} />
                        </div>
                        <h3 className="services-detail-card-title">
                          {detail.title}
                        </h3>
                        <p className="services-detail-card-desc">
                          {detail.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Frameworks & Organizations */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="services-detail-section"
                >
                  <h2 className="services-detail-heading">
                    Frameworks & Organizations
                  </h2>
                  <div className="services-tech-list">
                    {activeServiceData.technologies.map((tech, i) => (
                      <span key={i} className="services-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="services-detail-cta"
                >
                  <h3>Ready to build a more inclusive economy?</h3>
                  <p>
                    Let's discuss how HG Consulting can help you achieve your
                    economic development goals.
                  </p>
                  <a href="/contact" className="services-cta-button">
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

export default Services;