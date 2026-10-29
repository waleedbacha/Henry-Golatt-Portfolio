import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Users,
  LineChart,
  Landmark,
  TrendingUp,
  Globe,
  ArrowRight,
  Check,
} from "lucide-react";
import "./Pages.css";
import "./Applications.css";

const Applications = () => {
  const location = useLocation();

  // Scroll to hash section on load
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [location.hash]);

  const applications = [
    {
      id: "hbcu-economic-development",
      icon: GraduationCap,
      title: "HBCU & University Economic Development",
      subtitle: "Anchor institutions as economic engines",
      description:
        "Connect institutional assets, talent, research, procurement, infrastructure, partnerships, and place to broader economic opportunity.",
      deliverables: [
        "Institutional asset mapping & conversion strategies",
        "Anchor-institution economic development plans",
        "University-community partnership design",
        "HBCU Economic Engine assessments",
        "Research-to-market pathway development",
      ],
    },
    {
      id: "inclusive-entrepreneurship",
      icon: Briefcase,
      title: "Inclusive Entrepreneurship & Small Business Ecosystems",
      subtitle: "Coordinated pathways for founders",
      description:
        "Design coordinated pathways connecting entrepreneurs to knowledge, capital, markets, procurement, relationships, and institutional support.",
      deliverables: [
        "Entrepreneur ecosystem mapping",
        "Capital access strategies",
        "Accelerator & incubator program design",
        "Procurement pathway development",
        "Minority & women-owned business support",
      ],
    },
    {
      id: "urban-downtown",
      icon: Building2,
      title: "Urban & Downtown Development",
      subtitle: "Place-based revitalization",
      description:
        "Connect place, institutional assets, community priorities, project development, and investment into implementable revitalization strategies.",
      deliverables: [
        "Downtown revitalization plans",
        "Mixed-use & anchor district development",
        "Historic preservation strategies",
        "Public-private project structuring",
        "Community engagement & co-design",
      ],
    },
    {
      id: "workforce-mobility",
      icon: Users,
      title: "Workforce & Economic Mobility",
      subtitle: "Career pathways to durable employment",
      description:
        "Align education, employers, infrastructure, credentials, experience, and opportunity around durable career and ownership pathways.",
      deliverables: [
        "Workforce ecosystem analysis",
        "Career pathway design",
        "Employer partnership strategies",
        "Apprenticeship & credentialing programs",
        "Economic mobility measurement frameworks",
      ],
    },
    {
      id: "research-innovation",
      icon: LineChart,
      title: "Research, Innovation & Commercialization",
      subtitle: "From lab to market",
      description:
        "Connect research talent, institutions, industry, capital, technology, and markets to increase research agency and commercialization opportunity.",
      deliverables: [
        "Technology transfer strategy",
        "Research commercialization pathways",
        "Industry-institution partnership design",
        "Innovation ecosystem mapping",
        "Intellectual property strategy",
      ],
    },
    {
      id: "public-private",
      icon: Landmark,
      title: "Public-Private & Cross-Sector Partnerships",
      subtitle: "From collaboration to implementation",
      description:
        "Build partnership capacity, clarify roles and governance, align resources, and convert collaboration into implementation.",
      deliverables: [
        "Partnership charter & governance design",
        "Multi-sector alignment strategy",
        "Collective impact frameworks",
        "Resource mobilization strategy",
        "Partnership measurement systems",
      ],
    },
    {
      id: "institutional-strategy",
      icon: TrendingUp,
      title: "Institutional & Partnership Strategy",
      subtitle: "Leadership, governance & capacity",
      description:
        "Strengthen leadership, governance, systems, partner alignment, and implementation capacity.",
      deliverables: [
        "Board & leadership development",
        "Governance structure design",
        "Strategic planning & visioning",
        "Organizational capacity assessment",
        "Partnership strategy development",
      ],
    },
    {
      id: "ecosystem-architecture",
      icon: Globe,
      title: "Economic Empowerment & Ecosystem Architecture",
      subtitle: "Full systems design",
      description:
        "Diagnose complex systems and architect pathways from institutional capacity to agency, productive assets, and community wealth.",
      deliverables: [
        "Full ecosystem architecture design",
        "Economic empowerment diagnostic",
        "Capital readiness assessment",
        "Implementation blueprint development",
        "Measurement & recalibration systems",
      ],
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        {/* HERO */}
        <section className="page-hero applications-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="page-hero-content"
          >
            <div className="about-badge">
              <Globe size={14} />
              <span>Where We Apply the Architecture</span>
            </div>
            <h1 className="page-title">
              Complex Challenges. <br />
              <span className="page-title-highlight">Connected Solutions.</span>
            </h1>
            <p className="page-description">
              Clients may enter through a specific need. We connect that need to
              the larger institutional and economic system required to produce
              durable results.
            </p>
          </motion.div>
        </section>

        {/* NAVIGATION SIDEBAR */}
        <section className="page-section">
          <div className="applications-layout">
            {/* Sticky Sidebar */}
            <aside className="applications-sidebar">
              <div className="applications-sidebar-title">
                Jump to Application
              </div>
              <nav className="applications-sidebar-nav">
                {applications.map((app) => (
                  <a
                    key={app.id}
                    href={`#${app.id}`}
                    className="applications-sidebar-link"
                  >
                    <app.icon size={16} />
                    <span>{app.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="applications-main">
              {applications.map((app, index) => (
                <motion.section
                  key={app.id}
                  id={app.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="application-card"
                >
                  <div className="application-card-header">
                    <div className="application-card-icon">
                      <app.icon size={28} />
                    </div>
                    <div>
                      <div className="application-card-num">
                        0{index + 1} — {app.subtitle}
                      </div>
                      <h2 className="application-card-title">{app.title}</h2>
                    </div>
                  </div>

                  <p className="application-card-desc">{app.description}</p>

                  <div className="application-card-deliverables">
                    <div className="application-card-deliverables-title">
                      What we deliver
                    </div>
                    <ul>
                      {app.deliverables.map((item, i) => (
                        <li key={i}>
                          <Check size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="application-card-footer">
                    <Link to="/contact" className="application-card-cta">
                      Discuss this application <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-section">
          <div className="about-cta">
            <h3 className="about-cta-title">Don't see your challenge?</h3>
            <p className="about-cta-text">
              Our architecture applies across institutions, sectors, and
              geographies. If your organization has underused assets or
              fragmented partnerships, we can design a path forward.
            </p>
            <Link to="/contact" className="about-cta-button">
              Discuss an Opportunity <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Applications;
