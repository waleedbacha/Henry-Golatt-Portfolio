import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Scale,
  Target,
  Building2,
  Users,
  BookOpen,
  Trophy,
  Info,
} from "lucide-react";
import logo from "../../assets/logo1.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ===== MEGA MENU DATA =====
  const megaMenus = {
    services: {
      title: "Our Services",
      subtitle: "Six ways HG Consulting helps you build inclusive ecosystems",
      viewAllPath: "/services",
      viewAllLabel: "View All Services",
      items: [
        {
          icon: TrendingUp,
          title: "Economic Development",
          description: "Strategic planning for inclusive local ecosystems",
          path: "/services",
          query: { service: "economic-development" },
        },
        {
          icon: GraduationCap,
          title: "HBCU Partnerships",
          description: "University collaboration & tech transfer",
          path: "/services",
          query: { service: "hbcu-partnerships" },
        },
        {
          icon: Briefcase,
          title: "Small Business",
          description: "Building ecosystems for entrepreneurs",
          path: "/services",
          query: { service: "small-business" },
        },
        {
          icon: Scale,
          title: "Policy & Advocacy",
          description: "Advancing economic inclusion policies",
          path: "/services",
          query: { service: "policy-advocacy" },
        },
        {
          icon: Target,
          title: "Strategic Planning",
          description: "Board development & governance",
          path: "/services",
          query: { service: "strategic-planning" },
        },
        {
          icon: Building2,
          title: "Urban Development",
          description: "Downtown revitalization & preservation",
          path: "/services",
          query: { service: "urban-development" },
        },
      ],
    },

    about: {
      title: "About HG Consulting",
      subtitle: "Learn about our founder, mission, and impact",
      viewAllPath: "/about",
      viewAllLabel: "More About Us",
      items: [
        {
          icon: Info,
          title: "Our Mission",
          description: "Building inclusive economic ecosystems",
          path: "/about",
          hash: "mission",
        },
        {
          icon: Users,
          title: "Henry A. Golatt",
          description: "Founder & Principal Consultant",
          path: "/about",
          hash: "founder",
        },
        {
          icon: Building2,
          title: "UAPB Incubator",
          description: "Signature economic development project",
          path: "/about",
          hash: "uapb-incubator",
        },
        {
          icon: BookOpen,
          title: "Publications",
          description: "Peer-reviewed research & playbooks",
          path: "/gallery",
          query: { category: "publications" },
        },
        {
          icon: Trophy,
          title: "Awards",
          description: "National recognition & honors",
          path: "/gallery",
          query: { category: "awards" },
        },
        {
          icon: Users,
          title: "Board Positions",
          description: "40+ advisory roles",
          path: "/about",
          hash: "credentials",
        },
      ],
    },

    gallery: {
      title: "Gallery",
      subtitle: "Explore our achievements, publications, and partnerships",
      viewAllPath: "/gallery",
      viewAllLabel: "View Full Gallery",
      items: [
        {
          icon: Users,
          title: "Board Leadership",
          description: "Advisory & governance positions",
          path: "/gallery",
          query: { category: "boards" },
        },
        {
          icon: BookOpen,
          title: "Publications",
          description: "Research papers & playbooks",
          path: "/gallery",
          query: { category: "publications" },
        },
        {
          icon: Trophy,
          title: "Awards & Honors",
          description: "Recognition & achievements",
          path: "/gallery",
          query: { category: "awards" },
        },
      ],
    },
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services", mega: "services" },
    { name: "ABOUT", path: "/about", mega: "about" },
    { name: "GALLERY", path: "/gallery", mega: "gallery" },
    { name: "PROJECTS", path: "/testimonials" },
    { name: "DISCOVERY", path: "/discover" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleMouseEnter = (megaKey) => {
    clearTimeout(closeTimerRef.current);
    setActiveDropdown(megaKey);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  /**
   * Builds the full navigation URL for a mega-menu item.
   * Supports: path only, path#hash, path?query
   */
  const buildItemUrl = (item) => {
    let url = item.path;

    if (item.query) {
      const params = new URLSearchParams(item.query).toString();
      url += `?${params}`;
    }

    if (item.hash) {
      url += `#${item.hash}`;
    }

    return url;
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <nav className="navbar-nav">
            <Link to="/" className="navbar-logo">
              <img
                src={logo}
                alt="HG Consulting Services"
                className="navbar-logo-img"
              />
            </Link>

            <div className="navbar-links">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="navbar-link-wrapper"
                  onMouseEnter={() => item.mega && handleMouseEnter(item.mega)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`navbar-link ${
                      location.pathname === item.path
                        ? "navbar-link-active"
                        : ""
                    }`}
                  >
                    {item.name}
                    {item.mega && <span className="navbar-link-arrow">▾</span>}
                  </Link>

                  {item.mega && activeDropdown === item.mega && (
                    <div className="mega-menu">
                      <div className="mega-menu-inner">
                        <div className="mega-menu-header">
                          <h3 className="mega-menu-title">
                            {megaMenus[item.mega].title}
                          </h3>
                          <p className="mega-menu-subtitle">
                            {megaMenus[item.mega].subtitle}
                          </p>
                        </div>

                        <div className="mega-menu-grid">
                          {megaMenus[item.mega].items.map((subItem, i) => (
                            <Link
                              key={i}
                              to={buildItemUrl(subItem)}
                              className="mega-menu-item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="mega-menu-item-icon">
                                <subItem.icon size={18} />
                              </div>
                              <div className="mega-menu-item-content">
                                <div className="mega-menu-item-title">
                                  {subItem.title}
                                </div>
                                <div className="mega-menu-item-desc">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mega-menu-footer">
                          <Link
                            to={megaMenus[item.mega].viewAllPath}
                            className="mega-menu-cta"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {megaMenus[item.mega].viewAllLabel}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="navbar-actions">
              <Link to="/contact" className="navbar-cta-button">
                Get in Touch
              </Link>

              <button
                className="navbar-mobile-toggle"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`mobile-drawer-backdrop ${
          isOpen ? "mobile-drawer-backdrop-open" : ""
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`mobile-drawer ${isOpen ? "mobile-drawer-open" : ""}`}>
        <div className="mobile-drawer-header">
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="HG Consulting Services"
              className="navbar-logo-img"
            />
          </Link>
          <div className="mobile-drawer-header-actions">
            <button
              className="mobile-drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="mobile-drawer-nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-drawer-link ${
                location.pathname === item.path
                  ? "mobile-drawer-link-active"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            to="/contact"
            className="mobile-drawer-cta"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch →
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
