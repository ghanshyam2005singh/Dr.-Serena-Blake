'use client';
import { useState, useEffect, useRef } from 'react';

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Animation hooks for different sections
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: faqsRef, isVisible: faqsVisible } = useScrollAnimation(0.1);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement. This allows you to potentially receive partial coverage while maintaining greater flexibility in your treatment options."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via secure Zoom meetings. Online therapy provides the same quality of care as in-person sessions while offering greater convenience and accessibility from the comfort of your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations or rescheduling. This policy helps ensure that appointment times remain available for all clients and allows for proper scheduling management."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples therapy sessions are 80 minutes to allow adequate time for both partners to be heard and work through relationship dynamics."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on understanding your concerns, goals, and background. We'll discuss your therapy expectations, establish treatment goals, and begin building the therapeutic relationship that will support your healing journey."
    },
    {
      question: "Do you provide emergency services?",
      answer: "While I don't provide 24/7 crisis services, I can be reached via email for urgent matters between sessions. For immediate mental health emergencies, please contact 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Animated */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Common questions about therapy sessions, policies, and what to expect
          </p>
        </div>

        {/* FAQ Items - Animated with staggered effect */}
        <div 
          ref={faqsRef}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 ease-out overflow-hidden ${
                faqsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: faqsVisible ? `${index * 150 + 200}ms` : '0ms'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-teal-600 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Animated answer section */}
              <div 
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section - Animated */}
        <div 
          className={`mt-12 lg:mt-16 text-center transition-all duration-1000 ease-out ${
            faqsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: faqsVisible ? `${faqs.length * 150 + 400}ms` : '0ms'
          }}
        >
          <div className="bg-teal-50 rounded-xl p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              I&#39;m here to help address any concerns you may have about therapy or the process.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Contact Dr. Blake
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}