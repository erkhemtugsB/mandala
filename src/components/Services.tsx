import React, { useState } from 'react';
import { FileText, Truck, Building, Calculator, GraduationCap, Settings } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('irp');

  const serviceCategories = {
    irp: {
      title: 'IRP Registration Services',
      icon: <FileText className="w-8 h-8" />,
      services: [
        'IRP NEW Registration',
        'IRP Addition',
        'IRP Transfer',
        'IRP Renewal',
        'IRP 45-Day Temporary Registration',
        'Trailer Registration & Title Transfer',
        'Truck Title Transfer'
      ]
    },
    ifta: {
      title: 'IFTA (Fuel Taxes) Quarterly Filings',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        'IFTA Registration & Renewal',
        'IFTA Quarterly Tax Return Filings',
        'KY, NM, NY Quarterly Filings',
        'CT Quarterly Filings',
        'OR Quarterly Filings'
      ]
    },
    formation: {
      title: 'Company Formation & Registration',
      icon: <Building className="w-8 h-8" />,
      services: [
        'Corporations',
        'LLC (Limited Liability Companies)',
        'EIN (Employer Identification Number – Tax ID) Registration',
        'Motor Carrier Authority Registration',
        'DOT Number Registration and Updates',
        'Broker Authority Registration',
        'Illinois Intrastate Authority Registration'
      ]
    },
    tax: {
      title: 'Tax Filing Services',
      icon: <Calculator className="w-8 h-8" />,
      services: [
        'HWY Use Taxes (Form 2290)',
        'BOC-3 Filing',
        'UCR Registration Filing',
        'Payroll'
      ]
    },
    training: {
      title: 'Training Services',
      icon: <GraduationCap className="w-8 h-8" />,
      services: [
        'CDL Drivers English language Proficiency test preparation training'
      ]
    },
    misc: {
      title: 'Miscellaneous Services',
      icon: <Settings className="w-8 h-8" />,
      services: [
        'IRP, IFTA, DOT Audits',
        'SCAC Registration',
        'Bookkeeping',
        'Notary Public'
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
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
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
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors group">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:bg-blue-700"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {service}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="#consultation" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started with These Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;