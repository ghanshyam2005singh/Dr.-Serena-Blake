'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Mobile-First Design */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
          
          {/* Image Section - Clean and Simple */}
          <div className="lg:col-span-2">
            <div className="relative w-full max-w-xs mx-auto lg:max-w-none">
              <Image 
                src="/dr-serena.jpg" 
                alt="Dr. Serena Blake, Licensed Clinical Psychologist" 
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              />
              {/* Simple accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-teal-50 rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Main Content */}
            <div className="space-y-6">
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

            {/* Credentials - Clean Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-700 mb-1">8+</div>
                <div className="text-sm text-teal-600 font-medium">Years</div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-700 mb-1">500+</div>
                <div className="text-sm text-teal-600 font-medium">Sessions</div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-teal-700 mb-1">PsyD</div>
                <div className="text-sm text-teal-600 font-medium">Licensed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}