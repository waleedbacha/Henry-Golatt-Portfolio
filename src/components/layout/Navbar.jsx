import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  Compass,
  Layers,
  FileText,
  Users,
  Building2,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Landmark,
  Globe,
  LineChart,
} from "lucide-react";
import logo from "../../assets/logo1.webp";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
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

  // ===== NEW MODEL-FIRST MEGA MENUS =====
  const megaMenus = {
    model: {
      title: "Our Model",
      subtitle:
        "The Economic Empowerment Framework and Architect/Builder Model",
      viewAllPath: "/model",
      viewAllLabel: "Explore the Full Model",
      items: [
        {
          icon: Compass,
          title: "Economic Empowerment Framework",
          description: "Capacity → Architecture → Agency → Assets → Wealth",
          path: "/model",
          hash: "framework",
        },
        {
          icon: Layers,
          title: "Architect / Builder Model",
          description: "How we design, who executes, and how we measure.",
          path: "/model",
          hash: "architect-builder",
        },
        {
          icon: FileText,
          title: "Engagement Flow",
          description: "From opportunity to implementation.",
          path: "/model",
          hash: "engagement-flow",
        },
      ],
    },

    applications: {
      title: "Applications",
      subtitle: "Where we apply the architecture",
      viewAllPath: "/applications",
      viewAllLabel: "View All Application Areas",
      items: [
        {
          icon: GraduationCap,
          title: "HBCU Economic Development",
          description: "Institutional asset conversion.",
          path: "/applications",
          hash: "hbcu-economic-development",
        },
        {
          icon: Briefcase,
          title: "Inclusive Entrepreneurship",
          description: "Ecosystems for founders.",
          path: "/applications",
          hash: "inclusive-entrepreneurship",
        },
        {
          icon: Building2,
          title: "Urban & Downtown",
          description: "Place-based revitalization.",
          path: "/applications",
          hash: "urban-downtown",
        },
        {
          icon: Users,
          title: "Workforce & Mobility",
          description: "Career pathways.",
          path: "/applications",
          hash: "workforce-mobility",
        },
        {
          icon: LineChart,
          title: "Research & Innovation",
          description: "Commercialization pathways.",
          path: "/applications",
          hash: "research-innovation",
        },
        {
          icon: Landmark,
          title: "Public-Private Partnerships",
          description: "Cross-sector collaboration.",
          path: "/applications",
          hash: "public-private",
        },
      ],
    },

    evidence: {
      title: "Evidence",
      subtitle: "Proof of concept, outcomes, and thought leadership",
      viewAllPath: "/testimonials",
      viewAllLabel: "View All Evidence",
      items: [
        {
          icon: TrendingUp,
          title: "Case Studies",
          description: "Documented outcomes from our work.",
          path: "/testimonials",
        },
        {
          icon: Globe,
          title: "Gallery & Publications",
          description: "Research, media, and awards.",
          path: "/gallery",
        },
        {
          icon: Users,
          title: "Partners & Testimonials",
          description: "What our clients say.",
          path: "/testimonials",
        },
      ],
    },
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "OUR MODEL", path: "/model", mega: "model" },
    { name: "APPLICATIONS", path: "/applications", mega: "applications" },
    { name: "EVIDENCE", path: "/testimonials", mega: "evidence" },
    { name: "ABOUT", path: "/about" },
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

  const buildItemUrl = (item) => {
    let url = item.path;
    if (item.query) {
      url += `?${new URLSearchParams(item.query).toString()}`;
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
                    className={`navbar-link ${location.pathname === item.path ? "navbar-link-active" : ""}`}
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
                Discuss an Opportunity
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

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-backdrop ${isOpen ? "mobile-drawer-backdrop-open" : ""}`}
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
            <div key={item.name} className="mobile-drawer-item-wrapper">
              {item.mega ? (
                <>
                  <button
                    className={`mobile-drawer-link mobile-drawer-accordion-btn ${
                      openMobileSubmenu === item.mega ? "active" : ""
                    }`}
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === item.mega ? null : item.mega,
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <span
                      className={`mobile-arrow ${openMobileSubmenu === item.mega ? "rotate" : ""}`}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Dropdown list */}
                  <div
                    className={`mobile-drawer-submenu ${
                      openMobileSubmenu === item.mega ? "open" : ""
                    }`}
                  >
                    {megaMenus[item.mega].items.map((subItem, i) => (
                      <Link
                        key={i}
                        to={buildItemUrl(subItem)}
                        className="mobile-drawer-sublink"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon size={16} />
                        <div>
                          <div className="mobile-sub-title">
                            {subItem.title}
                          </div>
                          <div className="mobile-sub-desc">
                            {subItem.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
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
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            to="/contact"
            className="mobile-drawer-cta"
            onClick={() => setIsOpen(false)}
          >
            Discuss an Opportunity →
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
