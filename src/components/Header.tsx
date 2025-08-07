import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceCategories = {
    'IRP Registration': [
      'IRP NEW Registration',
      'IRP Addition',
      'IRP Transfer',
      'IRP Renewal',
      'IRP 45-Day Temporary Registration',
      'Trailer Registration & Title Transfer',
      'Truck Title Transfer'
    ],
    'IFTA Filing': [
      'IFTA Registration & Renewal',
      'IFTA Quarterly Tax Return Filings',
      'KY, NM, NY Quarterly Filings',
      'CT Quarterly Filings',
      'OR Quarterly Filings'
    ],
    'Company Formation': [
      'Corporations',
      'LLC Formation',
      'EIN Registration',
      'Motor Carrier Authority',
      'DOT Number Registration',
      'Broker Authority',
      'Illinois Intrastate Authority'
    ],
    'Tax Filing': [
      'HWY Use Taxes (Form 2290)',
      'BOC-3 Filing',
      'UCR Registration Filing',
      'Payroll'
    ],
    'Training': [
      'CDL English Proficiency Training'
    ],
    'Miscellaneous': [
      'IRP, IFTA, DOT Audits',
      'SCAC Registration',
      'Bookkeeping',
      'Notary Public'
    ]
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        {/* <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(224) 830-3555</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>(814) 883-0073</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>degyusconsulting@gmail.com</span>
          </div>
        </div> */}
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="DegyUS Consulting" 
                className="h-12 w-auto mr-3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              <div className="hidden">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DegyUS Consulting</h1>
                {/* <p className="text-sm text-gray-600">Professional Trucking Services</p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4 max-h-96 overflow-y-auto">
                    {Object.entries(serviceCategories).map(([category, services]) => (
                      <div key={category} className="mb-4 last:mb-0">
                        <h4 className="font-semibold text-blue-600 mb-2 text-sm">{category}</h4>
                        <ul className="space-y-1">
                          {services.map((service, index) => (
                            <li key={index}>
                              <a 
                                href="#services" 
                                className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <a href="#trucking-insights" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trucking Insights</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</a>
              {/* <a href="#consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Free Consultation</a> */}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                <a href="#trucking-insights" className="text-gray-700 hover:text-blue-600 font-medium">Trucking Insights</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
                <a href="#consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center">Free Consultation</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;