import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Mandala Comprehensive Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for providing comprehensive solutions and verified guidance for all your service and information needs.
          </p>
          <div className="mt-4 text-lg text-gray-700 font-semibold">
            <span className="inline-block bg-white/60 rounded px-4 py-2 shadow">
              <span className="text-yellow-600">Schedule:</span> 9:00am-5:00pm Mon-Fri only. Sat (appt only)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My name is <strong>Bobo Steele (Gantumur)</strong>, and I opened Mandala Comprehensive Service with a clear dream: to help the Mongolian community access true, correct, and verified information from professionals—rather than relying on word of mouth that often causes confusion and wastes precious time. I wanted to create a one-stop shop where people could fulfill all their needs in one trusted place, with confidence that they were receiving professional guidance every step of the way.
              </p>
              <p>
                The name <strong>Mandala</strong> carries deep meaning. It represents the idea that life, like a mandala, is constantly expanding outward—always growing, always connecting. My mom chose this name because we wanted my business to grow alongside the community, reflecting the same spirit of resilience and renewal.              </p>
              <p>
                Since opening our doors in 2019, <strong>Mandala Comprehensive Service</strong> has not only grown within the Mongolian community but has also expanded to serve the general public. Today, we proudly help individuals, families, and businesses from all backgrounds with tax, insurance, real estate, legal document preparation, and business services.
              </p>
              <p>
                At Mandala llc, my goal is simple: to grow together with the community, to provide reliable services people can trust, and to make sure no one feels lost or left behind.
              </p>
              <p>Bolortsetseg Steele
                EA | PTIN: 02121485 | Advanced Paralegal</p>
            </div>
          </div>

          <div className="relative w-full h-full min-h-[12rem] flex-1">
            <img
              src="/about.jpeg"
              alt="About us"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl"></div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Award className="w-12 h-12 text-orange-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Users className="w-12 h-12 text-orange-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Target className="w-12 h-12 text-orange-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Heart className="w-12 h-12 text-orange-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To provide comprehensive, reliable, and professional trucking consulting services that empower our clients to focus on what they do best – running their trucking operations – while we handle the complex regulatory and administrative requirements.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default About;