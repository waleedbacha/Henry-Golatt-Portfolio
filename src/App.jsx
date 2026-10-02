import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/common/ScrollToTopOnRouteChange";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

// ============================================================
// LAZY-LOAD ONLY THE CHATBOT
// ============================================================
// The chatbot pulls in voice hooks, API utils, and heavy
// dependencies. Deferring it saves ~50KB from initial load
// without risking layout shifts on other sections.
const ChatBot = lazy(() => import("./components/chat/ChatBot"));

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
        <Route path="/discover" element={<Discover />} />
      </Routes>

      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      <ScrollToTop />
    </Router>
  );
}

export default App;
