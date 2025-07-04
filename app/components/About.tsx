'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-gray-900 mb-2">
            About Dr. Serena Blake
          </h2>
        </div>

        {/* Simple Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              Dr. Blake received her doctorate in clinical psychology and maintains active licenses to practice in California. She specializes in individual therapy, couples counseling, and trauma-informed care.
            </p>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm">
              <Image 
                src="/dr-serena.jpg" 
                alt="Dr. Serena Blake, Licensed Clinical Psychologist" 
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed divider */}
      <div className="h-px mt-12 sm:mt-16 lg:mt-20 w-4/5 mx-auto bg-gray-400" />
    </section>
  );
}