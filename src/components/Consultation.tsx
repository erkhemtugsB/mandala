import React, { useState } from 'react';
import { Calendar, CheckCircle, Phone, Clock } from 'lucide-react';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request:', formData);
    alert('Thank you! We will contact you within 24 hours to schedule your free consultation.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', preferredTime: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    'Expert analysis of your current compliance status',
    'Personalized recommendations for your business',
    'Cost-effective solutions tailored to your needs',
    'Timeline and next steps clearly outlined',
    'No obligation - completely free consultation'
  ];

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Free Consultation</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get expert advice on your trucking business needs with our complimentary consultation service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div>
            <h3 className="text-3xl font-bold mb-8">What You'll Get</h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-yellow-400" />
                How It Works
              </h4>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Fill out the consultation request form</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>We'll contact you within 24 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Schedule your free 30-minute consultation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span>Receive personalized recommendations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4 text-blue-100">
              <Phone className="w-6 h-6 text-yellow-400" />
              <div>
                <p className="font-semibold">Prefer to call directly?</p>
                <p>(224) 830-3555 or (814) 883-0073</p>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="w-8 h-8 mr-3 text-blue-600" />
              Request Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cons-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="cons-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="cons-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="cons-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cons-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="cons-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="cons-company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="cons-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cons-service" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Interest
                  </label>
                  <select
                    id="cons-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select primary interest</option>
                    <option value="new-business">Starting New Trucking Business</option>
                    <option value="irp">IRP Registration</option>
                    <option value="ifta">IFTA Filing</option>
                    <option value="dot">DOT Registration</option>
                    <option value="compliance">Compliance Review</option>
                    <option value="tax">Tax Services</option>
                    <option value="general">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cons-time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="cons-time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 7PM)</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cons-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="cons-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Briefly describe your trucking business needs and any specific questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Request Free Consultation</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;