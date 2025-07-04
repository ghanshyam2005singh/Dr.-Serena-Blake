'use client';
import { useEffect, useRef, useState } from 'react';

// Scroll Animation Hook
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

export default function Hero() {
  // Animation hooks for different sections
  const { ref: titleRef } = useScrollAnimation(0.1);
  const { ref: subtitleRef } = useScrollAnimation(0.2);
  const { ref: buttonRef } = useScrollAnimation(0.3);

  // Auto-show animations on component mount for hero section
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const navbarHeight = 80;
      const elementPosition = contactElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback background if video fails to load */}
        </video>
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Headlines - Animated */}
          <div 
            ref={titleRef}
            className={`mb-8 md:mb-12 transition-all duration-1000 ease-out ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">
              Psychological Care for
            </h1>
            <h1 
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-8 md:mb-12 leading-tight text-teal-300 transition-all duration-1000 ease-out ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: mounted ? '300ms' : '0ms'
              }}
            >
              Change, Insight, and Well-Being
            </h1>
          </div>
          
          {/* Subtitle - Animated */}
          <div 
            ref={subtitleRef}
            className={`mb-8 md:mb-12 transition-all duration-1000 ease-out ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: mounted ? '600ms' : '0ms'
            }}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed font-serif max-w-4xl mx-auto text-gray-100">
              Offering individual and couples therapy both in-person and via Zoom in Los Angeles, CA
            </h2>
          </div>

          {/* CTA Button - Animated */}
          <div 
            ref={buttonRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out ${
              mounted 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              transitionDelay: mounted ? '900ms' : '0ms'
            }}
          >
            <button 
              onClick={scrollToContact}
              className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full sm:w-auto max-w-xs"
            >
              BOOK FREE CONSULTATION
            </button>
          </div>

          {/* Scroll Indicator - Animated */}
          <div 
            className={`mt-12 md:mt-16 transition-all duration-1000 ease-out ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: mounted ? '1200ms' : '0ms'
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-300 text-sm mb-2">Scroll to learn more</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-teal-300 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};