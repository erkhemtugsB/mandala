import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TruckingInsights from './components/TruckingInsights';
import About from './components/About';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Services />
          <TruckingInsights />
          <About />
          <Contact />
          <Consultation />
          <Footer />
        </div>
      } />
      <Route path="/services/:serviceSlug" element={<ServicePage />} />
    </Routes>
  );
}

export default App;