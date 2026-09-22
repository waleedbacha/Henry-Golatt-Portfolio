import React from "react";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesLinks = [
    { name: "Economic Development", path: "/services" },
    { name: "HBCU Partnerships", path: "/services" },
    { name: "Small Business", path: "/services" },
    { name: "Policy & Advocacy", path: "/services" },
    { name: "Strategic Planning", path: "/services" },
    { name: "Urban Development", path: "/services" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* ===== Column 1: Brand with Logo ===== */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              className="inline-block mb-5 hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="HG Consulting Services"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-[#b0b0b0] text-sm leading-relaxed mb-5">
              Building inclusive ecosystems, empowering entrepreneurs, and
              driving economic growth across America.
            </p>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/hgconsultingservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#32b554]/10 border border-[#32b554]/30 text-[#32b554] text-sm font-semibold hover:bg-[#32b554]/20 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>

          {/* ===== Column 2: Quick Links ===== */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#32b554]"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-[#b0b0b0] hover:text-[#32b554] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#32b554]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Column 3: Services ===== */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#32b554]"></span>
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-[#b0b0b0] hover:text-[#32b554] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-[#32b554]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Column 4: Contact ===== */}
          <div>
            <h4 className="font-semibold text-white mb-4 relative pb-2">
              Contact
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#32b554]"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-[#b0b0b0]">
                <Mail className="w-4 h-4 text-[#32b554] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:henry@hgconsultingservices.com"
                  className="hover:text-[#32b554] transition-colors break-all"
                >
                  golatth1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#b0b0b0]">
                <MapPin className="w-4 h-4 text-[#32b554] flex-shrink-0 mt-0.5" />
                <span>Columbus, Ohio, USA</span>
              </li>
              <li className="flex items-start gap-2 text-[#b0b0b0]">
                <Linkedin className="w-4 h-4 text-[#32b554] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.linkedin.com/in/hgconsultingservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#32b554] transition-colors break-all"
                >
                  /in/hgconsultingservices
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666] text-sm">
            © {currentYear} HG Consulting Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[#666] hover:text-[#32b554] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#666] hover:text-[#32b554] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
