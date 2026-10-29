import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  Landmark,
  LineChart,
} from "lucide-react";
import "./Services.css";

const Services = () => {
  // Henry's 8 Application Areas
  const services = [
    {
      id: "hbcu-economic-development",
      icon: GraduationCap,
      title: "HBCU & University Economic Development",
      description:
        "Connect institutional assets, talent, research, procurement, and place to broader economic opportunity.",
    },
    {
      id: "inclusive-entrepreneurship",
      icon: Briefcase,
      title: "Inclusive Entrepreneurship & Small Business",
      description:
        "Design coordinated pathways connecting entrepreneurs to knowledge, capital, markets, and support.",
    },
    {
      id: "urban-downtown",
      icon: Building2,
      title: "Urban & Downtown Development",
      description:
        "Connect place, institutional assets, community priorities, and investment into revitalization strategies.",
    },
    {
      id: "workforce-mobility",
      icon: Users,
      title: "Workforce & Economic Mobility",
      description:
        "Align education, employers, infrastructure, credentials, and opportunity around durable career pathways.",
    },
    {
      id: "research-innovation",
      icon: LineChart,
      title: "Research, Innovation & Commercialization",
      description:
        "Connect research talent, institutions, industry, capital, and markets to increase commercialization.",
    },
    {
      id: "public-private",
      icon: Landmark,
      title: "Public-Private & Cross-Sector Partnerships",
      description:
        "Build partnership capacity, clarify roles, align resources, and convert collaboration into implementation.",
    },
    {
      id: "institutional-strategy",
      icon: TrendingUp,
      title: "Institutional & Partnership Strategy",
      description:
        "Strengthen leadership, governance, systems, partner alignment, and implementation capacity.",
    },
    {
      id: "ecosystem-architecture",
      icon: Globe,
      title: "Economic Empowerment & Ecosystem Architecture",
      description:
        "Diagnose complex systems and architect pathways from institutional capacity to community wealth.",
    },
  ];

  return (
    <section id="services" className="services-home-section">
      <div className="services-home-container">
        <div className="services-home-header">
          <div className="services-home-badge">
            WHERE WE APPLY THE ARCHITECTURE
          </div>
          <h2 className="services-home-title">
            Complex Challenges.{" "}
            <span className="services-home-title-highlight">
              Connected Solutions.
            </span>
          </h2>
          <p className="services-home-subtitle">
            Clients may enter through a specific need. We connect that need to
            the larger institutional and economic system required to produce
            durable results.
          </p>
        </div>

        <div className="services-home-grid">
          {services.map((service, index) => (
            <Link
              to={`/applications#${service.id}`}
              key={index}
              className="services-home-card"
            >
              <div className="services-home-card-border" />
              <div className="services-home-card-icon-only">
                <service.icon size={28} />
              </div>
              <div className="services-home-card-content">
                <h3 className="services-home-card-title">{service.title}</h3>
                <p className="services-home-card-desc">{service.description}</p>
                <div className="services-home-card-link">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
