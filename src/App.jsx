import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ChatBot from "./components/chat/ChatBot";
import Discover from "./pages/Discover"; // ✅ NEW

import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/common/ScrollToTopOnRouteChange";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <Router>
      <ScrollToTopOnRouteChange />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discover" element={<Discover />} /> {/* ✅ NEW */}
      </Routes>

      <ChatBot />
      <ScrollToTop />
    </Router>
  );
}

export default App;
