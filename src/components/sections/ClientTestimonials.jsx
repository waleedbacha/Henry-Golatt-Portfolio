import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./ClientTestimonials.css";

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Only keeping verified testimonials from real emails received
  const testimonials = [
    {
      quote:
        "Congratulations Henry, this award couldn't have been awarded to a better individual. You have brought so much insight to our division, and you have provided our team with the knowledge and growth that was much needed. I'm honored to work under your direction.",
      name: "C. Celeste LaCour-Belyn",
      role: "Program Manager, Partnerships Training & Special Projects",
      avatar: "🏛️",
      company:
        "City of Columbus, Office of Small Business & Entrepreneur Development",
    },
    {
      quote:
        "Your outstanding leadership within The Office of Small Business and Entrepreneur Development resonates throughout the City of Columbus, greatly impacting the Communities I serve. Thank you for bringing your vision to the City of Columbus.",
      name: "Lynne D. LaCour",
      role: "Manager, Far East Neighborhood Pride Center",
      avatar: "🏘️",
      company: "City of Columbus, Department of Neighborhoods",
    },
  ];

  // Auto-play through testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="client-testimonials-section">
      <div className="client-testimonials-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="client-testimonials-header"
        >
          <div className="client-testimonials-badge">
            <Quote size={14} />
            <span>Client & Partner Perspectives</span>
          </div>
          <h2 className="client-testimonials-title">
            What Our{" "}
            <span className="client-testimonials-title-highlight">
              Partners Say
            </span>
          </h2>
          <p className="client-testimonials-subtitle">
            Real partnerships, real impact. Hear from the organizations and
            communities we've worked with.
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="client-testimonials-slider">
          <div className="client-testimonials-quote-icon">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="client-testimonials-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="client-testimonials-card"
              >
                <p className="client-testimonials-text">"{current.quote}"</p>

                <div className="client-testimonials-author">
                  <div className="client-testimonials-avatar">
                    {current.avatar}
                  </div>
                  <div className="client-testimonials-author-info">
                    <div className="client-testimonials-name">
                      {current.name}
                    </div>
                    <div className="client-testimonials-role">
                      {current.role}
                    </div>
                    <div className="client-testimonials-company">
                      {current.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            className="client-testimonials-nav client-testimonials-nav-prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            className="client-testimonials-nav client-testimonials-nav-next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="client-testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`client-testimonials-dot ${
                index === currentIndex ? "client-testimonials-dot-active" : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
