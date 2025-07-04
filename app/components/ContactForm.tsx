'use client';
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

// Scroll Animation Hook
const useScrollAnimation = (threshold = 0.1) => {
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

export default function ContactForm() {
  // Animation hooks
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.2);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.1);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof Errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Quote Section */}
      <div 
        ref={quoteRef}
        className={`relative h-64 sm:h-80 lg:h-96 bg-gray-900 overflow-hidden transition-all duration-1000 ease-out ${
          quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0">
          <Image 
            src="/quote.jpg" 
            alt="Therapy background" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed mb-4 sm:mb-6 italic">
              &quot;The greatest revolution of our generation is the discovery that human beings, 
              by changing the inner attitudes of their minds, can change the outer aspects of their lives.&quot;
            </blockquote>
            <cite className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium">
              — William James
            </cite>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to take the first step? Reach out today to begin your journey toward emotional wellness.
            </p>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p className="font-medium">Thank you for your message!</p>
              <p className="text-sm">We will get back to you within 24 hours.</p>
            </div>
          )}

          <div 
            ref={formRef}
            className={`bg-white rounded-xl lg:rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 ease-out ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-gray-800 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-last lg:order-first">
                <div className="text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Contact Information</h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-sm sm:text-base">Location</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          1287 Maplewood Drive<br />
                          Los Angeles, CA 90026
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-sm sm:text-base">Phone</h4>
                        <a href="tel:+13235550192" className="text-gray-300 hover:text-white transition-colors text-sm">
                          (323) 555-0192
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0">
                        <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-sm sm:text-base">Email</h4>
                        <a href="mailto:serena@blakepsychology.com" className="text-gray-300 hover:text-white transition-colors text-sm break-words">
                          serena@blakepsychology.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm sm:text-base ${
                          errors.name ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm sm:text-base ${
                          errors.phone ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="(123) 456-7890"
                      />
                      {errors.phone && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.email ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What brings you here? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-vertical text-sm sm:text-base ${
                        errors.message ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us about what you'd like to work on..."
                    />
                    {errors.message && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.message}</p>}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred time to reach you *
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.preferredTime ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="e.g., Weekday mornings, Evenings after 6pm"
                    />
                    {errors.preferredTime && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.preferredTime}</p>}
                  </div>

                  {/* Checkbox */}
                  <div>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        className={`mt-1 w-4 h-4 sm:w-5 sm:h-5 text-teal-600 border-2 rounded focus:ring-2 focus:ring-teal-500 ${
                          errors.agreeToContact ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        I agree to be contacted by Dr. Serena Blake Psychology regarding my inquiry. *
                      </span>
                    </label>
                    {errors.agreeToContact && <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-600">{errors.agreeToContact}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 sm:py-4 px-6 rounded-lg font-medium transition-all transform text-sm sm:text-base ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700 hover:scale-[1.02] active:scale-[0.98]'
                    } text-white shadow-lg hover:shadow-xl`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}