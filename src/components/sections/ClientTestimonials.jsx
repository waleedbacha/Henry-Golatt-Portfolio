import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './ClientTestimonials.css';

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      quote:
        'HG Consulting brought together critical voices to examine how education can be a lever for equity. Their ability to convene diverse stakeholders and drive meaningful conversation is unmatched.',
      name: 'McGraw Hill Partnership',
      role: 'Achieving DEI Through Education Series',
      avatar: '🎓',
      company: 'McGraw Hill & Achieve 3000',
      rating: 5,
    },
    {
      quote:
        "Henry's work has fundamentally changed how we approach inclusive economic development. His vision and execution have made Columbus a national leader in equitable entrepreneurship.",
      name: 'City of Columbus',
      role: 'Municipal Partnership',
      avatar: '🏛️',
      company: 'City of Columbus, Ohio',
      rating: 5,
    },
    {
      quote:
        'The network Henry built gave me access to resources, mentors, and capital I never knew existed. It changed the trajectory of my business.',
      name: 'Columbus Entrepreneurs',
      role: 'Program Participants',
      avatar: '🚀',
      company: 'Entrepreneur Support Network',
      rating: 5,
    },
    {
      quote:
        'HG Consulting understands what it takes to build inclusive ecosystems that actually work. Their strategic insight and community-driven approach set them apart.',
      name: 'The Columbus Foundation',
      role: 'Advisory Board Partner',
      avatar: '🌱',
      company: 'Inclusive Entrepreneurship PRI',
      rating: 5,
    },
    {
      quote:
        'Working with HG Consulting on our community development initiatives has been transformative. Their expertise in HBCU partnerships and economic development is invaluable.',
      name: 'HBCU Coalition.org',
      role: 'National Partnership',
      avatar: '🎯',
      company: 'HBCU Community Development',
      rating: 5,
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
    // Resume auto-play after 15s of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="client-testimonials-section">
      <div className="client-testimonials-container">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="client-testimonials-header"
        >
          <div className="client-testimonials-badge">
            <Quote size={14} />
            <span>Client Testimonials</span>
          </div>

          <h2 className="client-testimonials-title">
            What Our <span className="client-testimonials-title-highlight">Clients Say</span>
          </h2>

          <p className="client-testimonials-subtitle">
            Real partnerships, real impact. Hear from the organizations and
            communities we've worked with.
          </p>
        </motion.div>

        {/* ================= MAIN SLIDER ================= */}
        <div className="client-testimonials-slider">

          {/* Quote icon decoration */}
          <div className="client-testimonials-quote-icon">
            <Quote size={80} strokeWidth={1} />
          </div>

          {/* Testimonial content */}
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
                {/* Stars */}
                <div className="client-testimonials-stars">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#F4C430"
                      strokeWidth={0}
                      color="#F4C430"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="client-testimonials-text">
                  "{current.quote}"
                </p>

                {/* Author */}
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

        {/* ================= DOTS ================= */}
        <div className="client-testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`client-testimonials-dot ${
                index === currentIndex ? 'client-testimonials-dot-active' : ''
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