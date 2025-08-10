import React, { useState } from 'react';
import { FileText, Truck, Building, Calculator, GraduationCap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('irp');

  // Map each service to its route path
  const serviceCategories = {
    irp: {
      title: 'IRP Registration Services',
      icon: <FileText className="w-8 h-8" />,
      services: [
        { label: 'IRP NEW Registration', path: '/irp-new-registration' },
        { label: 'IRP Addition', path: '/irp-addition' },
        { label: 'IRP Transfer', path: '/irp-transfer' },
        { label: 'IRP Renewal', path: '/irp-renewal' },
        { label: 'IRP 45-Day Temporary Registration', path: '/irp-temp-registration' },
        { label: 'Trailer Registration & Title Transfer', path: '/trailer-registration' },
        { label: 'Truck Title Transfer', path: '/truck-title-transfer' }
      ]
    },
    ifta: {
      title: 'IFTA (Fuel Taxes) Quarterly Filings',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        { label: 'IFTA Registration & Renewal', path: '/ifta-registration' },
        { label: 'IFTA Quarterly Tax Return Filings', path: '/ifta-quarterly' },
        { label: 'KY, NM, NY Quarterly Filings', path: '/state-quarterly-ky-nm-ny' },
        { label: 'CT Quarterly Filings', path: '/ct-quarterly' },
        { label: 'OR Quarterly Filings', path: '/or-quarterly' }
      ]
    },
    formation: {
      title: 'Company Formation & Registration',
      icon: <Building className="w-8 h-8" />,
      services: [
        { label: 'Corporations', path: '/corporations' },
        { label: 'LLC (Limited Liability Companies)', path: '/llc-formation' },
        { label: 'EIN (Employer Identification Number – Tax ID) Registration', path: '/ein-registration' },
        { label: 'Motor Carrier Authority Registration', path: '/motor-carrier-authority' },
        { label: 'DOT Number Registration and Updates', path: '/dot-number-registration' },
        { label: 'Broker Authority Registration', path: '/broker-authority' },
        { label: 'Illinois Intrastate Authority Registration', path: '/illinois-intrastate-authority' }
      ]
    },
    tax: {
      title: 'Tax Filing Services',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        { label: 'HWY Use Taxes (Form 2290)', path: '/form-2290' },
        { label: 'BOC-3 Filing', path: '/boc-3' },
        { label: 'UCR Registration Filing', path: '/ucr-registration' },
        { label: 'Payroll', path: '/payroll' }
      ]
    },
    training: {
      title: 'Training Services',
      icon: <GraduationCap className="w-8 h-8" />,
      services: [
        { label: 'CDL Drivers English language Proficiency test preparation training', path: '/cdl-english-training' }
      ]
    },
    misc: {
      title: 'Miscellaneous Services',
      icon: <Settings className="w-8 h-8" />,
      services: [
        { label: 'IRP, IFTA, DOT Audits', path: '/audits' },
        { label: 'SCAC Registration', path: '/scac-registration' },
        { label: 'Bookkeeping', path: '/bookkeeping' },
        { label: 'Notary Public', path: '/notary-public' }
      ]
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive trucking business solutions to keep your operations compliant and profitable
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(serviceCategories).map(([key, category]) => (
            <button
              key={key}
              type="button"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Category */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <div className="text-blue-600">
                {serviceCategories[activeCategory as keyof typeof serviceCategories].icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {serviceCategories[activeCategory as keyof typeof serviceCategories].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors group block"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:bg-blue-700"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
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
  );
};

export default Services;