import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, Trophy, X, ArrowLeft } from 'lucide-react';
import './Pages.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // ============================================================
  // REAL HG CONSULTING GALLERY DATA
  // ============================================================
  const categories = [
    {
      id: 'boards',
      title: 'Board Leadership',
      subtitle: 'Advisory & Governance',
      icon: Users,
      coverImage:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      description:
        'Serving on boards that shape economic development across the country.',
      count: 6,
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
          title: 'Ohio Dominican University MBA Advisory Board',
          description:
            'Serving as vital link between graduate business programs and industry leaders for 6+ years.',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80',
          title: 'Columbus Urban League Advisory Board',
          description:
            'Supporting the Columbus Minority Business Assistance Center (MBAC) initiatives.',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
          title: 'HBCU Coalition.org — Vice Chairman',
          description:
            'Providing fiduciary oversight to executive leadership and chairing the research committee.',
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
          title: 'HBCU Community Development Action Coalition',
          description:
            'Board Member for 8+ years advancing community economic development across the nation.',
        },
        {
          id: 5,
          src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
          title: 'The Columbus Foundation',
          description:
            'Inclusive Entrepreneurship PRI Investments Advisory Board for 5+ years.',
        },
        {
          id: 6,
          src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
          title: 'Forward Cities Innovation Council',
          description:
            'Championing local inclusive entrepreneurship initiatives in Franklin County, Ohio.',
        },
      ],
    },
    {
      id: 'publications',
      title: 'Publications',
      subtitle: 'Research & Thought Leadership',
      icon: BookOpen,
      coverImage:
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
      description:
        'Peer-reviewed research and industry playbooks on inclusive economic development.',
      count: 6,
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
          title: 'Building an Inclusive Ecosystem — Sage Publication',
          description:
            'Peer-reviewed case study in Local Economy journal exploring minority business development investments.',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
          title: 'Inclusive Entrepreneurship Ecosystem Playbook',
          description:
            'Step-by-step guide published with Amazon for advancing equitable inclusion.',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
          title: 'Columbus Small Business Agenda',
          description:
            'Published with Next Street under contract with the City of Columbus, Ohio.',
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
          title: 'Economic Impacts on University Drive',
          description:
            'Published in Journal of Business Administration Online (Fall 2010).',
        },
        {
          id: 5,
          src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
          title: 'ACSP Conference Paper',
          description:
            'Association of Collegiate Schools of Planning — peer-reviewed research paper.',
        },
        {
          id: 6,
          src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
          title: 'UAPB Lower Mississippi Delta',
          description:
            'Featured in Delta Grassroots Caucus publication highlighting economic development work.',
        },
      ],
    },
    {
      id: 'awards',
      title: 'Awards & Honors',
      subtitle: 'Recognition & Achievements',
      icon: Trophy,
      coverImage:
        'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
      description:
        'Recognized nationally for leadership in inclusive economic development.',
      count: 6,
      images: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
          title: "Who's Who in Black Columbus (2025)",
          description:
            'Honorable Mention in the November 2025 edition for inclusive economic development work.',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1591840261243-8b8a2c8c68cc?w=800&q=80',
          title: 'Outstanding Diversity Champion Award',
          description:
            'Recognized by Columbus Business First for promoting equity and inclusiveness.',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
          title: 'Ohio Black Expo Business Excellence Award',
          description:
            'Awarded in 2020 for commitment to business excellence in the State of Ohio.',
        },
        {
          id: 4,
          src: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=800&q=80',
          title: 'ForbesBLK Member',
          description:
            'Selected as a member of ForbesBLK — global community of Black professionals.',
        },
        {
          id: 5,
          src: 'https://images.unsplash.com/photo-1533227938327-74f332729668?w=800&q=80',
          title: "Delta Regional Authority Chairman's Medallion",
          description:
            'Awarded to exemplary regional community economic development leaders.',
        },
        {
          id: 6,
          src: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80',
          title: 'Tuskegee University Community Award',
          description:
            'Booker T. Washington Community Economic Development Award for rural impact.',
        },
      ],
    },
  ];

  const openCategory = (categoryId) => {
    setActiveCategory(categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeCategory = () => {
    setActiveCategory(null);
    setSelectedImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                  Explore Henry A. Golatt's board leadership, published research,
                  and national awards in inclusive economic development.
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
                      <h3 className="gallery-category-title">{category.title}</h3>
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
                  {activeCategoryData.title}{' '}
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
                        <p className="gallery-image-desc">{image.description}</p>
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