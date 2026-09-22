import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  BookOpen,
  Code,
  Globe,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const scrollRef = useRef(null);

  const milestones = [
    {
      year: '2009',
      title: 'MBDA Regional Award',
      icon: Award,
      short: "Received MBDA Regional Director's Award",
      description: 'Recognized by the U.S. Department of Commerce Minority Business Development Agency for outstanding service to the minority business community during Minority Enterprise Development Week 2009.',
      stats: ['MBDA Award', 'Federal Recognition', 'Minority Business'],
      category: 'Award',
      color: '#3b82f6',
    },
    {
      year: '2010',
      title: 'Economic Research Published',
      icon: BookOpen,
      short: 'Published in Journal of Business Administration',
      description: 'Published "Economic Impacts of Small Businesses and Public/Private Projects on University Drive in Pine Bluff, Arkansas" — evaluating key economic corridors in Southeast Arkansas.',
      stats: ['Peer-Reviewed', 'Economic Research'],
      category: 'Publication',
      color: '#8b5cf6',
    },
    {
      year: '2014',
      title: 'Technology Commercialization',
      icon: Code,
      short: 'University representative for tech transfer',
      description: 'Worked with institutional colleagues to promote commercialization of university and federal laboratory research in Arkansas.',
      stats: ['Tech Transfer', 'University Partnership'],
      category: 'Technology',
      color: '#f59e0b',
    },
    {
      year: '2016',
      title: 'Columbus Small Business Agenda',
      icon: TrendingUp,
      short: 'Contributed to the City of Columbus Small Business Agenda',
      description: "Helped cultivate an inclusive, dynamic small business ecosystem as part of Next Street's engagement with the City of Columbus, Ohio.",
      stats: ['City Partnership', 'Ecosystem Building'],
      category: 'Economic Development',
      color: '#06b6d4',
    },
    {
      year: '2018',
      title: 'Sage Publication',
      icon: BookOpen,
      short: 'Co-authored case study in Local Economy (Sage)',
      description: 'Published peer-reviewed research exploring the rationale and impacts of concentrated investments by local governments on minority business development.',
      stats: ['Peer-Reviewed', 'Sage Publication'],
      category: 'Publication',
      color: '#10b981',
    },
    {
      year: '2020',
      title: 'Ohio Black Expo Award',
      icon: Award,
      short: 'Received Business Excellence Award',
      description: 'Recognized for commitment to business excellence and setting an example for Black Excellence in the State of Ohio.',
      stats: ['Business Excellence', 'State Recognition'],
      category: 'Award',
      color: '#3b82f6',
    },
    {
      year: '2022',
      title: 'Amazon Playbook',
      icon: Globe,
      short: 'Co-authored Inclusive Entrepreneurship Playbook',
      description: 'Published step-by-step guide with Amazon for creating economic development programs that advance equitable inclusion for women and entrepreneurs of color.',
      stats: ['Amazon Partnership', 'National Reach'],
      category: 'Publication',
      color: '#8b5cf6',
    },
    {
      year: '2023',
      title: 'Diversity Champion',
      icon: Award,
      short: 'Recognized by Columbus Business First',
      description: 'Recognized along with organizations and individuals leading the way in promoting equity and inclusiveness in Central Ohio.',
      stats: ['Diversity Champion', 'Central Ohio'],
      category: 'Award',
      color: '#ec4899',
    },
    {
      year: '2024',
      title: 'ForbesBLK Member',
      icon: Users,
      short: 'Selected as a ForbesBLK member',
      description: 'Joined ForbesBLK, a global community of Black professionals, entrepreneurs, and leaders driving change.',
      stats: ['ForbesBLK Member', 'Global Network'],
      category: 'Recognition',
      color: '#10b981',
    },
    {
      year: '2025',
      title: "Who's Who in Black Columbus",
      icon: Award,
      short: "Honorable Mention in Who's Who in Black Columbus",
      description: "Featured in the November 2025 edition for current and past work in inclusive economic development involving HBCUs, small businesses, and marginalized communities.",
      stats: ['Honorable Mention', "Who's Who"],
      category: 'Award',
      color: '#06b6d4',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="timeline" className="timeline-section">
      <div className="timeline-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="timeline-header"
        >
          <div className="timeline-badge">
            <Calendar size={14} />
            <span>Our Journey</span>
          </div>
          <h2 className="timeline-title">
            From 2009 to <span className="timeline-title-highlight">Today</span>
          </h2>
          <p className="timeline-subtitle">
            Over 15 years of impact in inclusive economic development. Click any year to explore.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="timeline-horizontal-wrapper">
          <button
            className="timeline-scroll-btn timeline-scroll-left"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="timeline-scroll-btn timeline-scroll-right"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={20} />
          </button>

          <div className="timeline-horizontal-scroll" ref={scrollRef}>
            <div className="timeline-horizontal-track">
              <div className="timeline-horizontal-line" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`timeline-node ${
                    index % 2 === 0 ? 'timeline-node-top' : 'timeline-node-bottom'
                  }`}
                  onClick={() => setSelectedYear(milestone.year)}
                >
                  <div
                    className="timeline-node-card"
                    style={{ '--node-color': milestone.color }}
                  >
                    <div
                      className="timeline-node-category"
                      style={{ color: milestone.color }}
                    >
                      {milestone.category}
                    </div>
                    <h3 className="timeline-node-title">{milestone.title}</h3>
                    <p className="timeline-node-desc">{milestone.short}</p>
                  </div>

                  <div
                    className="timeline-node-connector"
                    style={{ background: milestone.color }}
                  />

                  <div
                    className="timeline-node-badge"
                    style={{ borderColor: milestone.color }}
                  >
                    <milestone.icon size={16} style={{ color: milestone.color }} />
                  </div>

                  <div
                    className="timeline-node-year"
                    style={{ color: milestone.color }}
                  >
                    {milestone.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-progress-hint">
            <ChevronRight size={14} />
            <span>Scroll to explore</span>
            <ChevronRight size={14} />
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedYear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="timeline-modal-overlay"
              onClick={() => setSelectedYear(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="timeline-modal"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const milestone = milestones.find((m) => m.year === selectedYear);
                  const Icon = milestone.icon;
                  return (
                    <>
                      <button
                        className="timeline-modal-close"
                        onClick={() => setSelectedYear(null)}
                      >
                        <X size={20} />
                      </button>

                      <div
                        className="timeline-modal-icon"
                        style={{
                          background: `${milestone.color}20`,
                          borderColor: `${milestone.color}40`,
                          color: milestone.color,
                        }}
                      >
                        <Icon size={32} />
                      </div>

                      <div
                        className="timeline-modal-year"
                        style={{ color: milestone.color }}
                      >
                        {milestone.year}
                      </div>
                      <div className="timeline-modal-category">
                        {milestone.category}
                      </div>
                      <h3 className="timeline-modal-title">{milestone.title}</h3>
                      <p className="timeline-modal-description">
                        {milestone.description}
                      </p>

                      <div className="timeline-modal-stats">
                        {milestone.stats.map((stat, i) => (
                          <div
                            key={i}
                            className="timeline-modal-stat"
                            style={{
                              background: `${milestone.color}15`,
                              borderColor: `${milestone.color}30`,
                              color: milestone.color,
                            }}
                          >
                            {stat}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;