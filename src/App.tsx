import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TruckingInsights from './components/TruckingInsights';
import About from './components/About';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TruckingInsights />
      <About />
      {/* <Contact /> */}
      {/* <Consultation /> */}
      <Footer />
    </div>
  );
}

export default App;