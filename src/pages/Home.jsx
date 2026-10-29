import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ModelSection from "../components/sections/ModelSection";
import ArchitectBuilder from "../components/sections/ArchitectBuilder";
import Services from "../components/sections/Services";
import EngagementFlow from "../components/sections/EngagementFlow";
import Timeline from "../components/sections/Timeline";
import ClientTestimonials from "../components/sections/ClientTestimonials";
import Footer from "../components/layout/Footer";
import CTA from "../components/sections/CTA"; // Assuming we create a simple CTA component

const Home = () => {
  return (
    <div className="page-home">
      <Navbar />
      <main>
        {/* 1. Hero */}
        <div id="home">
          <Hero />
        </div>
        {/* 2. Credibility Strip */}
        <div id="stats">
          <Stats />
        </div>
        {/* 3. The Model */}
        <div id="model">
          <ModelSection />
        </div>
        {/* 4. Architect/Builder */}
        <div id="architect-builder">
          <ArchitectBuilder />
        </div>
        {/* 5. Applications */}
        <div id="services">
          <Services />
        </div>
        {/* 6. Engagement Flow */}
        <div id="flow">
          <EngagementFlow />
        </div>
        {/* 7. Journey / Evidence */}
        <div id="timeline">
          <Timeline />
        </div>
        {/* 8. Selected Work (Placeholder for Phase 2) */}
        {/* 9. Testimonials */}
        <div id="testimonials">
          <ClientTestimonials />
        </div>
        {/* 10. Final CTA */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
