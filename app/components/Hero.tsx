'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Header with Logo and Name */}
      <div className="relative z-30 font-serif text-lg md:text-2xl ml-4 sm:ml-8 lg:ml-20 mt-6 md:mt-10 text-white flex flex-row items-center">
        <div className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="Dr. Serena Blake Psychology Logo" 
            className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 inline-block mr-3" 
          />
        </div>
        <div className="leading-tight">
          Dr. Serena Blake <br />
          <span className="text-sm md:text-lg text-gray-200">PsyD (Clinical Psychologist)</span>
        </div>
      </div>

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
          {/* Main Headlines */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">
              Psychological Care for
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-8 md:mb-12 leading-tight text-teal-300">
              Change, Insight, and Well-Being
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed font-serif max-w-4xl mx-auto text-gray-100">
              Offering individual and couples therapy both in-person and via Zoom in Los Angeles, CA
            </h2>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full sm:w-auto max-w-xs">
                BOOK FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}