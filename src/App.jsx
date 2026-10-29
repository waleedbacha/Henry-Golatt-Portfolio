import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import Model from "./pages/Model";
import Applications from "./pages/Applications";
import Engagements from "./pages/Engagements";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/common/ScrollToTopOnRouteChange";
import InstallPWA from "./components/common/InstallPWA";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

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
        <Route path="/model" element={<Model />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/engagements" element={<Engagements />} />
      </Routes>

      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      <ScrollToTop />
      <InstallPWA />
    </Router>
  );
}

export default App;
