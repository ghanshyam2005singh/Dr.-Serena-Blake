'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default function About() {
  // Actually USE the hook - this was missing!
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.4);

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - NOW with animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Mobile-First Design */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
          
          {/* Image Section - NOW with animation */}
          <div 
            ref={imageRef}
            className={`lg:col-span-2 transition-all duration-1000 ease-out delay-200 ${
              imageVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-xs mx-auto lg:max-w-none">
              <Image 
                src="/dr-serena.jpg" 
                alt="Dr. Serena Blake, Licensed Clinical Psychologist" 
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              />
              {/* Simple accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-teal-50 rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Main Content - NOW with animation */}
            <div 
              ref={contentRef}
              className={`space-y-6 transition-all duration-1000 ease-out delay-400 ${
                contentVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">Dr. Serena Blake</span> is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with <span className="text-teal-600 font-medium">eight years of experience</span> and over <span className="text-teal-600 font-medium">500 client sessions</span>.
                </p>
              </div>
              
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            {/* Credentials - NOW with animation */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-1000 ease-out delay-600 ${
                statsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {[
                { value: '8+', label: 'Years' },
                { value: '500+', label: 'Sessions' },
                { value: 'PsyD', label: 'Licensed' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-teal-50 rounded-xl p-4 text-center transition-all duration-500 ease-out ${
                    statsVisible 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                  style={{
                    transitionDelay: statsVisible ? `${(index + 1) * 100 + 600}ms` : '0ms'
                  }}
                >
                  <div className="text-2xl font-bold text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-teal-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}