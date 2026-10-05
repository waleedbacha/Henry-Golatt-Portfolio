import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Trophy, X, ArrowLeft } from "lucide-react";
import "./Pages.css";
import diversityAward2020 from "../assets/diversity-award-2020.png";
import arkansasGazette2025 from "../assets/arkansas-gazette-2025.png";
import ohio_business_award from "../assets/ohio_business_award.png";
import jcmboaAward2002 from "../assets/jcmboa-award-2002.png";
import pineBluffCommercial2000 from "../assets/pine-bluff-commercial-2000.png";
import departmentReport2020 from "../assets/department-report-2020.png";
import uapbHbcuReport from "../assets/uapb-hbcu-report.png";
// import celesteLacourEmail from "../assets/celeste-lacour-email.png";
// import lynneLacourEmail from "../assets/lynne-lacour-email.png";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // ============================================================
  // REAL HG CONSULTING GALLERY DATA
  // ============================================================
  const categories = [
    {
      id: "boards",
      title: "Board Leadership",
      subtitle: "Advisory & Governance",
      icon: Users,
      coverImage:
        "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791182170/board_lea_csixh2.jpg",
      description:
        "Serving on boards that shape economic development across the country.",
      count: 7,
      images: [
        {
          id: 1,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1789476260/henry_4_icuhkw.jpg",
          title: "Ohio Dominican University MBA Advisory Board",
          description:
            "Serving as vital link between graduate business programs and industry leaders for 6+ years.",
        },
        {
          id: 2,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1789476260/henry_1_atr3lq.jpg",
          title: "Columbus Urban League Advisory Board",
          description:
            "Supporting the Columbus Minority Business Assistance Center (MBAC) initiatives.",
        },
        {
          id: 3,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1789476259/henry_6_ibvv2p.jpg",
          title: "HBCU Coalition.org — Vice Chairman",
          description:
            "Providing fiduciary oversight to executive leadership and chairing the research committee.",
        },
        {
          id: 4,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791182233/Publications_ooehia.jpg",
          title: "HBCU Community Development Action Coalition",
          description:
            "Board Member for 8+ years advancing community economic development across the nation.",
        },
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
          title: "The Columbus Foundation",
          description:
            "Inclusive Entrepreneurship PRI Investments Advisory Board for 5+ years.",
        },
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
          title: "Forward Cities Innovation Council",
          description:
            "Championing local inclusive entrepreneurship initiatives in Franklin County, Ohio.",
        },
      ],
    },
    {
      id: "publications",
      title: "Publications",
      subtitle: "Research & Thought Leadership",
      icon: BookOpen,
      coverImage:
        "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791182233/Publications_ooehia.jpg",
      description:
        "Peer-reviewed research and industry playbooks on inclusive economic development.",
      count: 6,
      images: [
        {
          id: 1,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791187235/artifacts_2_dtfna7.jpg",
          title:
            "Downtown Pine Bluff Celebrated — Arkansas Democrat-Gazette (2025)",
          description:
            "Featured in a February 2025 Arkansas Democrat-Gazette article recognizing Henry A. Golatt's role in Pine Bluff's downtown renaissance and the UAPB Business Support Incubator.",
        },
        {
          id: 2,
          src: pineBluffCommercial2000,
          title:
            'Pine Bluff Commercial — "City Council approves concept of Business Support Incubator" (2000)',
          description:
            "Foundational article showing Henry Golatt and Dean Andrew Honeycutt presenting the original incubator concept to Pine Bluff City Council.",
        },
        {
          id: 3,
          src: departmentReport2020,
          title:
            "City of Columbus Department of Development — 2020 Accomplishments",
          description:
            "$8.3M CARES Act grants to 819 small businesses (80% minority/women owned). $269M in capital investment. $311M in P3 projects.",
        },
        {
          id: 4,
          src: uapbHbcuReport,
          title: "UAPB HBCU Program Report — Chapter 3",
          description:
            "Documenting the $429,609 HBCU grant and UAPB-ERDC's community impact under Henry Golatt's leadership.",
        },

        {
          id: 5,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791204391/iohmbimg_sa1cx3.webp",
          title: 'OhioMBE — "Business Advocate: Henry Golatt" (Feb 2018)',
          description:
            "Published profile of Henry Golatt by OhioMBE (Minority Business Enterprise publication), February 2018. Highlights his career, awards, and role as Program Development Coordinator for the City of Columbus.",
        },
        {
          id: 6,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791204391/oe_jrnd4o.png",
          title:
            "DOE Awards Smartville $10M for HBCU Energy Storage (Sept 2023)",
          description:
            "PR Newswire release covering the U.S. Department of Energy's $10 million award to Smartville Inc. for long-duration energy storage benefiting HBCUs. Includes a quote from Henry Golatt, Chief of Strategy and Partnerships for the HBCU Community Development Action Coalition.",
        },
        {
          id: 12,
          src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
          title: "Inclusive Entrepreneurship Ecosystem Playbook",
          description:
            "Step-by-step guide published with Amazon for advancing equitable inclusion.",
        },
        {
          id: 13,
          src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
          title: "Columbus Small Business Agenda",
          description:
            "Published with Next Street under contract with the City of Columbus, Ohio.",
        },
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
          title: "Economic Impacts on University Drive",
          description:
            "Published in Journal of Business Administration Online (Fall 2010).",
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
          title: "ACSP Conference Paper",
          description:
            "Association of Collegiate Schools of Planning — peer-reviewed research paper.",
        },
        {
          id: 9,
          src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
          title: "UAPB Lower Mississippi Delta",
          description:
            "Featured in Delta Grassroots Caucus publication highlighting economic development work.",
        },
        {
          id: 10,
          src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
          title: "Building an Inclusive Ecosystem — Sage Publication",
          description:
            "Peer-reviewed case study in Local Economy journal exploring minority business development investments.",
        },
      ],
    },
    {
      id: "awards",
      title: "Awards & Honors",
      subtitle: "Recognition & Achievements",
      icon: Trophy,
      coverImage:
        "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791181827/Accelerate_Columbus_weqnwx.jpg",
      description:
        "Recognized nationally for leadership in inclusive economic development.",
      count: 6,
      images: [
        {
          id: 1,
          src: diversityAward2020,
          title: "2020 Diversity in Business Award",
          description:
            "Outstanding Diversity Champion Award — Columbus Business First (2020). Recognized for leadership in promoting equity and inclusiveness in Central Ohio.",
        },
        {
          id: 2,
          src: jcmboaAward2002,
          title: "Minority Business of the Year — 2002",
          description:
            "Presented by the Jefferson County Minority Business Owners Association to UAPB ERDC (accepted by Henry Golatt as Director).",
        },
        {
          id: 3,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1789476260/henry_2_nztqtp.jpg",
          title: "Who's Who in Black Columbus (2025)",
          description:
            "Honorable Mention in the November 2025 edition for inclusive economic development work.",
        },

        {
          id: 4,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791182591/forbes_vxc3uj.jpg",
          title: "ForbesBLK Member",
          description:
            "Selected as a member of ForbesBLK — global community of Black professionals.",
        },
        {
          id: 5,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791186509/Chairman_s_Medallion_Award_Banner_1_hwzrtd.png",
          title: "Delta Regional Authority Chairman's Medallion",
          description:
            "Awarded to exemplary regional community economic development leaders.",
        },
        {
          id: 6,
          src: "https://res.cloudinary.com/dcjhzgigb/image/upload/v1791186628/Gemini_Generated_Image_9y47u39y47u39y47_1_npoypi.jpg",
          title: "Tuskegee University Community Award",
          description:
            "Booker T. Washington Community Economic Development Award for rural impact.",
        },
        {
          id: 7,
          src: ohio_business_award,
          title: "Ohio Black Expo Business Excellence Award",
          description:
            "Awarded in 2020 for commitment to business excellence in the State of Ohio.",
        },
      ],
    },
  ];

  const openCategory = (categoryId) => {
    setActiveCategory(categoryId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setSelectedImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        {/* MAIN GALLERY VIEW */}
        {!activeCategory && (
          <>
            <section className="page-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="page-hero-content"
              >
                <h1 className="page-title">
                  Our <span className="page-title-highlight">Gallery</span>
                </h1>
                <p className="page-description">
                  Explore Henry A. Golatt's board leadership, published
                  research, and national awards in inclusive economic
                  development.
                </p>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="gallery-category-grid">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="gallery-category-card"
                    onClick={() => openCategory(category.id)}
                  >
                    <div className="gallery-category-border" />

                    <div className="gallery-category-image">
                      <img src={category.coverImage} alt={category.title} />
                      <div className="gallery-category-overlay" />
                    </div>

                    <div className="gallery-category-content">
                      <div className="gallery-category-icon">
                        <category.icon size={24} />
                      </div>
                      <h3 className="gallery-category-title">
                        {category.title}
                      </h3>
                      <p className="gallery-category-subtitle">
                        {category.subtitle}
                      </p>
                      <p className="gallery-category-desc">
                        {category.description}
                      </p>

                      <div className="gallery-category-footer">
                        <span className="gallery-category-count">
                          {category.count} Items
                        </span>
                        <span className="gallery-category-view">
                          View Gallery →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* CATEGORY DETAIL VIEW */}
        {activeCategory && activeCategoryData && (
          <>
            <section className="page-hero gallery-detail-hero">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="page-hero-content"
              >
                <button className="gallery-back-button" onClick={closeCategory}>
                  <ArrowLeft size={18} />
                  Back to Gallery
                </button>

                <h1 className="page-title">
                  {activeCategoryData.title}{" "}
                  <span className="page-title-highlight">Collection</span>
                </h1>
                <p className="page-description">
                  {activeCategoryData.description}
                </p>
              </motion.div>
            </section>

            <section className="page-section">
              <div className="gallery-images-grid">
                {activeCategoryData.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="gallery-image-card"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="gallery-image-wrapper">
                      <img src={image.src} alt={image.title} loading="lazy" />
                      <div className="gallery-image-overlay">
                        <h4 className="gallery-image-title">{image.title}</h4>
                        <p className="gallery-image-desc">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-lightbox"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="gallery-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="gallery-lightbox-close"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                <img src={selectedImage.src} alt={selectedImage.title} />
                <div className="gallery-lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
