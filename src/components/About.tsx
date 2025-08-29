import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About DegyUS Consulting</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partners in trucking business success, dedicated to providing comprehensive solutions for all your licensing and compliance needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>Amara & Tuya</strong>, owners of DegyUS Consulting, Inc., find their greatest joy in helping customers succeed in their trucking companies by resolving their licensing and business issues through our one-stop-all services.
              </p>
              <p>
                We got our start in the trucking industry in <strong>2017</strong>. Working for a trucking company, Amara and her team were responsible for booking loads, dispatch, customer service, accounts payable and receivable, fuel tax reporting, registration and permit issuance, bookkeeping, employee supervision, and more.
              </p>
              <p>
                In <strong>2023</strong>, Amara and Tuya decided to put all their experience to work in their own business, and DegyUS Consulting, Inc. was born. Our financial company had many truck driver clients, providing them with professional advice and services, and in 2023, we separated our CONSULTING services.
              </p>
              <p>
                We are happy to see our business growing day by day and continuing to grow in the future.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional team meeting" 
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Founders</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">A</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Amara</h4>
              <p className="text-blue-600 font-semibold mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                With over 7 years in the trucking industry, Amara brings extensive experience in operations, compliance, and business development to help clients achieve their goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Tuya</h4>
              <p className="text-purple-600 font-semibold mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 leading-relaxed">
                Tuya specializes in regulatory compliance and business formation, ensuring that every client receives expert guidance tailored to their specific needs.
              </p>
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