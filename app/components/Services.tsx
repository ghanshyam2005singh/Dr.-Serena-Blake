'use client';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Evidence-based techniques to help you understand and manage anxiety, develop coping strategies, and regain control over your daily life. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to reduce stress and build resilience.",
      img: "/service1.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Relationship Counseling", 
      description: "Strengthen your connections with others through improved communication, conflict resolution, and emotional intimacy. Whether for couples or individuals working on relationship patterns, we focus on building healthier, more fulfilling relationships.",
      img: "/service2.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate, trauma-informed care to help you process difficult experiences and move toward healing. Using proven therapeutic approaches, we create a safe space for you to work through trauma at your own pace and reclaim your sense of empowerment.",
      img: "/service3.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive psychological care tailored to your unique needs
          </p>
        </div>

        {/* Services Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white mb-3">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Session Fees & Office Hours - Mobile Optimized */}
        <div className="bg-gray-800 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Session Fees & Availability
            </h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Flexible scheduling options to meet your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Session Fees */}
            <div className="bg-gray-700 rounded-xl lg:rounded-2xl p-6 lg:p-8">
              <h4 className="text-xl lg:text-2xl font-semibold mb-6 text-center">Session Fees</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm lg:text-base">Individual Session</span>
                  <span className="font-semibold text-lg lg:text-xl text-teal-400">$200</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm lg:text-base">Couples Session</span>
                    <span className="font-semibold text-lg lg:text-xl text-teal-400">$240</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-700 rounded-xl lg:rounded-2xl p-6 lg:p-8">
              <h4 className="text-xl lg:text-2xl font-semibold mb-6 text-center">Office Hours</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-200 mb-2 text-sm lg:text-base">In-Person Sessions</h5>
                  <p className="text-gray-400 text-sm">Tuesday & Thursday</p>
                  <p className="text-gray-400 text-sm">10:00 AM - 6:00 PM</p>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <h5 className="font-semibold text-gray-200 mb-2 text-sm lg:text-base">Virtual Sessions (Zoom)</h5>
                  <p className="text-gray-400 text-sm">Monday, Wednesday & Friday</p>
                  <p className="text-gray-400 text-sm">1:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Schedule Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}