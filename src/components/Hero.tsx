import React from 'react';
import { Truck, Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative text-white py-20 min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 59, 138, 0.27)), url(https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in 
              <span className="text-yellow-400"> Trucking Success</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Professional trucking consulting services to help your business navigate licensing, 
              compliance, and operational challenges with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#consultation" 
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
              >
                Get Free Consultation
              </a>
              <a 
                href="#services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
              >
                View Our Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">DOT Registration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">IFTA Filing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">IRP Registration</span>
              </div>
            </div>
          </div>

          {/* <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Truck className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">One-Stop Solution</h3>
                <p className="text-blue-100">Complete trucking business services under one roof</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;