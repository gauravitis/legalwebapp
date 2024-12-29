'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of property disputes do you handle?",
    answer: "We handle a wide range of property disputes including boundary disputes, tenant-landlord conflicts, property title issues, inheritance disputes, and RERA-related matters. Our team has extensive experience in both residential and commercial property cases.",
    category: "Services"
  },
  {
    question: "How long does a typical RERA case take to resolve?",
    answer: "The duration of a RERA case can vary depending on its complexity. Typically, RERA aims to resolve complaints within 60 days. However, some cases might take longer if they involve multiple parties or complex issues. We strive to expedite the process while ensuring the best possible outcome for our clients.",
    category: "RERA"
  },
  {
    question: "What documents do I need for a property dispute case?",
    answer: "Essential documents typically include property ownership papers, sale deed, previous agreements, correspondence between parties, and any relevant photographs or surveys. During our initial consultation, we'll provide a comprehensive list of required documents based on your specific case.",
    category: "Documentation"
  },
  {
    question: "How much do your legal services cost?",
    answer: "Our fees vary depending on the complexity of the case and the services required. We believe in transparent pricing and will provide a detailed fee structure during our initial consultation. We also offer flexible payment plans to accommodate our clients' needs.",
    category: "Fees"
  },
  {
    question: "Can you handle cases outside your local jurisdiction?",
    answer: "Yes, we can handle cases across multiple jurisdictions. Our team is well-versed in property laws across different states and can effectively manage cases remotely when necessary. We also have a network of associate lawyers in various locations.",
    category: "Services"
  },
  {
    question: "What is the process for filing a RERA complaint?",
    answer: "Filing a RERA complaint involves several steps: gathering necessary documents, drafting the complaint, paying the requisite fees, and submitting it to the RERA authority. We guide our clients through each step and handle the entire process on their behalf to ensure compliance and maximize the chances of a favorable outcome.",
    category: "RERA"
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(faqs.map(faq => faq.category))];
  
  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Don't see your question here? Feel free to reach out to us.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
