import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
                <img
                  src="/logo.png"
                  alt="DegyUS Consulting"
                  className="h-12 w-auto mr-3"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              <div>
                <h3 className="text-2xl font-bold">DegyUS Consulting</h3>
                {/* <p className="text-gray-400">Professional Trucking Services</p> */}
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in trucking business success. We provide comprehensive consulting services
              to help your trucking company navigate licensing, compliance, and operational challenges with confidence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(224) 830-3555 | (814) 883-0073</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">degyusconsulting@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">5105 Tollview Dr, Suite 246, Rolling Meadows, IL 60008</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/trucking-insights" className="text-gray-300 hover:text-white transition-colors">Trucking Insights</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-gray-300">IRP Registration</span></li>
              <li><span className="text-gray-300">IFTA Filing</span></li>
              <li><span className="text-gray-300">DOT Registration</span></li>
              <li><span className="text-gray-300">Company Formation</span></li>
              <li><span className="text-gray-300">Tax Filing</span></li>
              <li><span className="text-gray-300">CDL Training</span></li>
              <li><span className="text-gray-300">Bookkeeping</span></li>
              <li><span className="text-gray-300">Notary Services</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DegyUS Consulting Inc. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;