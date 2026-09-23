import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Clock,
  MessageCircle,
  Check,
} from "lucide-react";
import "./Pages.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate sending - in production this would call a backend/API
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert(
        "Thank you! Your message has been sent. We will get back to you within 1-2 business days.",
      );
    }, 500);
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-main">
        {/* ================= PAGE HERO ================= */}
        <section className="page-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="page-hero-content"
          >
            <h1 className="page-title">
              Get in <span className="page-title-highlight">Touch</span>
            </h1>
            <p className="page-description">
              Have a project or partnership in mind? Let's discuss how HG
              Consulting can help you build a more inclusive economy.
            </p>
          </motion.div>
        </section>

        {/* ================= CONTACT GRID ================= */}
        <section className="page-section">
          <div className="page-contact-grid">
            {/* ================= CONTACT INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="page-contact-info"
            >
              <h2 className="page-contact-heading">Contact Information</h2>

              {/* Email */}
              <div className="page-contact-item">
                <div className="page-contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="page-contact-label">Email</div>
                  <div className="page-contact-value">golatth1@gmail.com</div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="page-contact-item">
                <div className="page-contact-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="page-contact-label">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/hgconsultingservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="page-contact-value page-contact-link"
                  >
                    /in/hgconsultingservices
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="page-contact-item">
                <div className="page-contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="page-contact-label">Location</div>
                  <div className="page-contact-value">Columbus, Ohio, USA</div>
                </div>
              </div>

              {/* Response Time */}
              <div className="page-contact-item">
                <div className="page-contact-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="page-contact-label">Response Time</div>
                  <div className="page-contact-value">
                    Within 1-2 business days
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="page-contact-divider" />

              {/* What to Expect */}
              <div className="page-contact-expect">
                <h3 className="page-contact-expect-title">What to Expect</h3>
                <ul className="page-contact-expect-list">
                  <li>
                    <Check size={14} />
                    <span>Initial consultation call</span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>Discussion of your goals and challenges</span>
                  </li>
                  <li>
                    <Check size={14} />
                    <span>Custom proposal tailored to your needs</span>
                  </li>
                </ul>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/hgconsultingservices"
                target="_blank"
                rel="noopener noreferrer"
                className="page-contact-linkedin-cta"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* ================= CONTACT FORM ================= */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="page-contact-form"
            >
              <div className="page-form-header">
                <MessageCircle size={20} />
                <h2 className="page-form-heading">Send Us a Message</h2>
              </div>

              <div className="page-form-group">
                <label className="page-form-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="page-form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="page-form-group">
                <label className="page-form-label">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="page-form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="page-form-group">
                <label className="page-form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="page-form-input"
                  placeholder="Economic development inquiry"
                />
              </div>

              <div className="page-form-group">
                <label className="page-form-label">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="page-form-textarea"
                  placeholder="Tell us about your project, organization, or partnership opportunity..."
                />
              </div>

              <button
                type="submit"
                className="page-form-button"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    Sending... <Check size={16} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              <p className="page-form-note">
                By submitting this form, you agree to be contacted by HG
                Consulting regarding your inquiry.
              </p>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton
        phoneNumber="18705560347"
        message="Hello HG Consulting! I'd like to learn more about your services."
      />
    </div>
  );
};

export default Contact;
