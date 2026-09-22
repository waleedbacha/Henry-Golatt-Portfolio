import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Features from '../components/sections/Features';
import Timeline from '../components/sections/Timeline';
import Services from '../components/sections/Services';
// import Ecosystem from '../components/sections/Ecosystem';
import ClientTestimonials from '../components/sections/ClientTestimonials';  
// import Solutions from '../components/sections/Solutions';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="page-home">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="stats"><Stats /></div>
        <div id="features"><Features /></div>
        <div id="timeline"><Timeline /></div>
        <div id="services"><Services /></div>
        {/* <div id="ecosystem"><Ecosystem /></div> */}
        <div id="testimonials"><ClientTestimonials /></div> 
        {/* <div id="solutions"><Solutions /></div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;