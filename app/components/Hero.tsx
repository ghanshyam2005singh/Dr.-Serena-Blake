'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Header with Logo and Name */}
      <div className="relative z-30 ml-2 sm:ml-4 lg:ml-8 xl:ml-20 mt-4 sm:mt-6 md:mt-10 text-black flex flex-row items-center">
        <div className="flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="Dr. Serena Blake Psychology Logo" 
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 inline-block mr-2 sm:mr-3"
          />
        </div>
        <div className="leading-tight font-sans">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">Dr. Serena Blake</div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-normal">PsyD (Clinical Psychologist)</div>
        </div>
      </div>

      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="mt-16 mx-4 sm:mt-20 sm:mx-8 md:mt-30 md:mx-15 lg:mt-35 lg:mx-18 xl:mt-40 xl:mx-20 relative" style={{ height: 'calc(100vh - 120px)' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay only on video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headlines */}
          <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 leading-tight">
              Psychological Care for
            </h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-white">
              Change, Insight, and Well-Being
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-sans font-normal text-gray-100 leading-relaxed">
              Offering individual and couples therapy both in-person and via Zoom in Los Angeles, CA
            </h2>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full font-sans font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg whitespace-nowrap">
                BOOK FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}