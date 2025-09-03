import React, { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceCategories: Record<string, { label: string; path: string }[]> = {
    'IRP Registration': [
      { label: 'IRP NEW Registration', path: '/irp-new-registration' },
      { label: 'IRP Addition', path: '/irp-addition' },
      { label: 'IRP Transfer', path: '/irp-transfer' },
      { label: 'IRP Renewal', path: '/irp-renewal' },
      { label: 'IRP 45-Day Temporary Registration', path: '/irp-temp-registration' },
      { label: 'Trailer Registration & Title Transfer', path: '/trailer-registration' },
      { label: 'Truck Title Transfer', path: '/truck-title-transfer' },
    ],
    'IFTA Filing': [
      { label: 'IFTA Registration & Renewal', path: '/ifta-registration' },
      { label: 'IFTA Quarterly Tax Return Filings', path: '/ifta-quarterly' },
      { label: 'KY, NM, NY Quarterly Filings', path: '/state-quarterly-ky-nm-ny' },
      { label: 'CT Quarterly Filings', path: '/ct-quarterly' },
      { label: 'OR Quarterly Filings', path: '/or-quarterly' },
    ],
    'Company Formation': [
      { label: 'Corporations', path: '/corporations' },
      { label: 'LLC Formation', path: '/llc-formation' },
      { label: 'EIN Registration', path: '/ein-registration' },
      { label: 'Motor Carrier Authority', path: '/motor-carrier-authority' },
      { label: 'DOT Number Registration', path: '/dot-number-registration' },
      { label: 'Broker Authority', path: '/broker-authority' },
      { label: 'Illinois Intrastate Authority', path: '/illinois-intrastate-authority' },
    ],
    'Tax Filing': [
      { label: 'HWY Use Taxes (Form 2290)', path: '/form-2290' },
      { label: 'BOC-3 Filing', path: '/boc-3' },
      { label: 'UCR Registration Filing', path: '/ucr-registration' },
      { label: 'Payroll', path: '/payroll' },
    ],
    'Training': [
      { label: 'CDL English Proficiency Training', path: '/cdl-english-training' },
    ],
    'Miscellaneous': [
      { label: 'IRP, IFTA, DOT Audits', path: '/audits' },
      { label: 'SCAC Registration', path: '/scac-registration' },
      { label: 'Bookkeeping', path: '/bookkeeping' },
      { label: 'Notary Public', path: '/notary-public' },
    ],
  };



  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-yellow-500 text-white py-2 px-4">
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
                className="h-16 w-auto mr-3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="hidden">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Mandala Comprehensive Service</h1>
                {/* <p className="text-sm text-gray-600">Professional Trucking Services</p> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>

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
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
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
                              <Link
                                to={service.path}
                                className="block text-sm text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <Link to="/trucking-insights" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Trucking Insights</Link> */}
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
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
            <div className="lg:hidden py-4 border-t max-h-96 overflow-y-auto">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileServicesOpen && (
                    <div className="mt-2 ml-4 space-y-3 max-h-64 overflow-y-auto">
                      {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category}>
                          <h4 className="font-semibold text-blue-600 mb-1 text-sm">{category}</h4>
                          <ul className="space-y-1 ml-2">
                            {services.map((service, index) => (
                              <li key={index}>
                                <Link
                                  to={service.path}
                                  className="block text-sm text-gray-800 hover:text-blue-600 py-1"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsMobileServicesOpen(false);
                                  }}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/trucking-insights" className="text-gray-700 hover:text-blue-600 font-medium">Trucking Insights</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link>
                {/* <a href="#consultation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center">Free Consultation</a> */}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;