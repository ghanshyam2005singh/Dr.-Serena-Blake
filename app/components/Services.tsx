'use client';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Evidence-based techniques to help you understand and manage anxiety, develop coping strategies, and regain control over your daily life. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to reduce stress and build resilience.",
      img: "/service1.jpg"
    },
    {
      title: "Relationship Counseling", 
      description: "Strengthen your connections with others through improved communication, conflict resolution, and emotional intimacy. Whether for couples or individuals working on relationship patterns, we focus on building healthier, more fulfilling relationships.",
      img: "/service2.jpg"
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate, trauma-informed care to help you process difficult experiences and move toward healing. Using proven therapeutic approaches, we create a safe space for you to work through trauma at your own pace and reclaim your sense of empowerment.",
      img: "/service3.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-sans font-semibold text-gray-900">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              
              {/* Perfect Circle Image */}
              <div className="w-80 h-80 mx-auto mb-8">
                <Image 
                  src={service.img} 
                  alt={service.title}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-sans font-semibold text-gray-900 mb-6">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}