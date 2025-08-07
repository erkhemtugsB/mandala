import React from 'react';
import { TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';

const TruckingInsights = () => {
  const insights = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Compliance is Key",
      description: "Stay ahead of DOT regulations and avoid costly violations with proper documentation and timely filings.",
      tips: ["Keep all permits current", "Maintain accurate logs", "Regular safety inspections"]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Tax Optimization",
      description: "Maximize your deductions and minimize tax burden with proper IFTA and quarterly filing strategies.",
      tips: ["Track all fuel purchases", "Maintain mileage records", "File quarterly returns on time"]
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Time Management",
      description: "Efficient permit processing and registration renewals keep your trucks on the road earning revenue.",
      tips: ["Plan renewals in advance", "Use professional services", "Avoid last-minute rushes"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Business Growth",
      description: "Proper business structure and authority registration opens doors to new opportunities and contracts.",
      tips: ["Choose right business entity", "Obtain proper authorities", "Build strong credit profile"]
    }
  ];

  return (
    <section id="trucking-insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trucking Industry Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert knowledge and best practices to help your trucking business thrive in today's competitive market
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Tips:</h4>
                    <ul className="space-y-1">
                      {insight.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Expert Guidance?</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experienced team can help you navigate the complexities of trucking regulations and optimize your business operations.
          </p>
          <a 
            href="#consultation" 
            className="inline-flex items-center bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TruckingInsights;