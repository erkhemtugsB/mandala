import React, { useState } from 'react';
import { FileText, Truck, Building, Calculator, GraduationCap, Settings, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState('irp');

  // Map each service to its route path
  const serviceCategories = {
    irp: {
      title: 'Tax Services',
      icon: <FileText className="w-8 h-8" />,
      services: [
        { label: 'Personal Tax (Form 1040)', path: '/personal-tax' },
        { label: 'Business Tax (Forms 1065, 1120, 1120S, Schedule C)', path: '/business-tax' },
        { label: 'Tax ID or ITIN Applications', path: '/tax-id' },
        { label: 'Create 1099 and W-2 Forms', path: '/create-1099' },
        { label: 'Tax Consultation Services', path: '/tax-consultation' },
      ]
    },
    ifta: {
      title: 'Insurance Services',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        { label: 'Personal Property: Auto, Home, Condo, Renters', path: '/personal-property' },
        { label: 'Commercial: Trucking, Small Business (nail salon, construction, restaurants, etc.)', path: '/commercial' },
        { label: 'Bonds', path: '/bonds' },
        { label: 'CT Quarterly Filings', path: '/ct-quarterly' },
        { label: 'OR Quarterly Filings', path: '/or-quarterly' }
      ]
    },
    formation: {
      title: 'Real Estate Services',
      icon: <Building className="w-8 h-8" />,
      services: [
        { label: 'Buy a House', path: '/buy-a-house' },
        { label: 'Sell a House', path: '/sell-a-house' },
        { label: 'Rent a House', path: '/rent-a-house' },
        { label: 'Consultation to prepare for loan approval', path: '/real-estate-consultation' }
      ]
    },
    tax: {
      title: 'Notary Services',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        { label: 'General notary services', path: '/general-notary' },
        { label: 'Child travel consent forms', path: '/child-travel' },
        { label: 'Power of Attorney forms', path: '/power-of-attorney' },
        { label: 'Other documents as needed', path: '/other-documents' }
      ]
    },
    training: {
      title: 'Legal Document Preparation',
      icon: <GraduationCap className="w-8 h-8" />,
      services: [
        { label: 'Immigration forms', path: '/immigration-forms' },
        { label: 'Wills', path: '/wills' },
        { label: 'Divorce paperwork', path: '/divorce' },
        { label: 'Other legal document filing assistance', path: '/other' },
        { label: 'Note: We do not provide legal consultation or legal advice.', path: '/' }
      ]
    },
    misc: {
      title: 'Business Consultation',
      icon: <Settings className="w-8 h-8" />,
      services: [
        { label: 'Open/close businesses (LLC, Inc., Nonprofit)', path: '/open-close-businesses' },
        { label: 'Annual or quarterly reports filing', path: '/annual-reports' },
        { label: 'Labor & Industries (workers’ comp) filings', path: '/labor' },
        { label: 'Secretary of State and Department of Revenue filings', path: '/secretary-of-state' }
      ]
    }
  };

  return (
    <section
      id="home"
      className="relative text-white py-20 min-h-screen flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(18, 17, 17, 0.45), rgba(12, 12, 12, 0.47)), url(https://images.pexels.com/photos/31370888/pexels-photo-31370888.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services Section Below Hero */}
        <section id="services" className="py-20 bg-transparent text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Professional Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-white">
                Comprehensive business solutions to keep your operations compliant and profitable
              </p>
            </div>

            {/* Service Category Tabs - Dropdown on mobile, buttons on desktop */}
            <div className="mb-12">
              {/* Mobile Dropdown */}
              <div className="sm:hidden mb-6">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 bg-white"
                  value={activeCategory}
                  onChange={e => setActiveCategory(e.target.value)}
                >
                  {Object.entries(serviceCategories).map(([key, category]) => (
                    <option key={key} value={key}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              {/* Desktop Buttons */}
              <div className="hidden sm:flex flex-wrap justify-center gap-4">
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <button
                    key={key}
                    type="button"
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === key
                        ? 'bg-yellow-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                      }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Service Category */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <div className="text-yellow-600">
                    {serviceCategories[activeCategory as keyof typeof serviceCategories].icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors group block"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 group-hover:bg-yellow-700"></div>
                      <div>
                        <h4 className="font-semibold group-hover:text-blue-700 transition-colors">
                          {service.label}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;