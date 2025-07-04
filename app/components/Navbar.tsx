'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Header with Logo and Name - Hide text on mobile when menu is open */}
            <div className={`relative z-20 font-serif flex flex-row items-center transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <div className="flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Dr. Serena Blake Psychology Logo" 
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 inline-block mr-2 md:mr-3" 
                />
              </div>
              
              {/* Hide text on mobile when menu is open */}
              <div className={`leading-tight min-w-0 transition-all duration-300 ${
                isMenuOpen ? 'md:block hidden' : 'block'
              }`}>
                <div className="text-sm md:text-lg lg:text-2xl font-semibold truncate">
                  Dr. Serena Blake
                </div>
                <div className={`text-xs md:text-sm lg:text-base transition-colors truncate ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  PsyD (Clinical Psychologist)
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: 'About', id: 'about' },
                  { name: 'Services', id: 'services' },
                  { name: 'FAQ', id: 'faq' },
                  { name: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-teal-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors z-60 relative ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-teal-600 hover:bg-gray-100' 
                    : 'text-white hover:text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-gray-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-3 min-w-0 flex-1 mr-2">
              <Image 
                src="/logo.png" 
                alt="Dr. Serena Blake Psychology Logo" 
                className="w-8 h-8 flex-shrink-0" 
              />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-serif font-semibold text-gray-900 truncate">
                  Dr. Serena Blake
                </div>
                <div className="text-xs text-gray-600 truncate">
                  Clinical Psychologist
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8 bg-gray-50">
            <nav className="space-y-4">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'FAQ', id: 'faq' },
                { name: 'Contact', id: 'contact' },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-sm ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className={`mt-8 transform transition-all duration-300 ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '600ms' : '0ms'
            }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </button>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}