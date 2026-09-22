import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Scale,
  Target,
  Building2,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'economic-development',
      icon: TrendingUp,
      title: 'Economic Development',
      subtitle: 'Strategic Planning',
      description:
        'Comprehensive strategies to build inclusive, dynamic, and continuously improving local economic ecosystems.',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
      id: 'hbcu-partnerships',
      icon: GraduationCap,
      title: 'HBCU & University Partnerships',
      subtitle: 'Education & Research',
      description:
        'Connecting historically black colleges and universities to economic development and commercialization opportunities.',
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
    },
    {
      id: 'small-business',
      icon: Briefcase,
      title: 'Small Business Ecosystem',
      subtitle: 'Entrepreneurship',
      description:
        'Designing programs that support entrepreneurs through every stage of the business lifecycle.',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    },
    {
      id: 'policy-advocacy',
      icon: Scale,
      title: 'Policy & Advocacy',
      subtitle: 'Public-Private Partnerships',
      description:
        'Advising on policies that advance economic inclusion at federal, state, and local levels.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    },
    {
      id: 'strategic-planning',
      icon: Target,
      title: 'Strategic Planning',
      subtitle: 'Board Development',
      description:
        'Providing fiduciary oversight, strategic guidance, and governance expertise to boards and organizations.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    },
    {
      id: 'urban-development',
      icon: Building2,
      title: 'Urban & Downtown Development',
      subtitle: 'Community Revitalization',
      description:
        'Revitalizing urban cores through historic preservation, strategic planning, and economic development.',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    },
  ];

  return (
    <section id="services" className="services-home-section">
      <div className="services-home-container">
        <div className="services-home-header">
          <h2 className="services-home-title">
            What <span className="services-home-title-highlight">We Provide</span>
          </h2>
          <p className="services-home-subtitle">
            HG Consulting helps cities, universities, and organizations build
            thriving ecosystems for minority and women entrepreneurs.
          </p>
        </div>

        <div className="services-home-grid">
          {services.map((service, index) => (
            <Link to="/services" key={index} className="services-home-card">
              <div className="services-home-card-border" />
              <div className="services-home-card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="services-home-card-overlay" />
                <div className="services-home-card-icon">
                  <service.icon size={22} />
                </div>
              </div>
              <div className="services-home-card-content">
                <p className="services-home-card-subtitle">{service.subtitle}</p>
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