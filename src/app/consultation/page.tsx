'use client';

import { useState } from 'react';
import Link from 'next/link';

const consultationTypes = [
  {
    id: 'free',
    title: 'Free Consultation',
    duration: '20 minutes',
    price: 'Free',
    description: 'Brief discussion about your legal matter',
    features: [
      'Initial case assessment',
      'Basic legal advice',
      'Next steps guidance'
    ]
  },
  {
    id: 'online',
    title: 'Online Consultation',
    duration: '45 minutes',
    price: '₹1,499',
    description: 'Detailed online discussion via video call',
    features: [
      'In-depth case analysis',
      'Document review',
      'Strategic legal advice',
      'Action plan development'
    ]
  },
  {
    id: 'inperson',
    title: 'In-Person Consultation',
    duration: '60 minutes',
    price: '₹2,999',
    description: 'Comprehensive in-person meeting',
    features: [
      'Thorough case evaluation',
      'Detailed document review',
      'Comprehensive legal strategy',
      'Personalized action plan',
      'Follow-up guidance'
    ]
  }
];

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleConsultationSelect = (id: string) => {
    setSelectedType(id);
    window.location.href = `/consultation/book/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Consultation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the consultation type that best suits your needs. Each option is designed to provide you with expert legal guidance and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                selectedType === type.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-8">
                <div className="mb-5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-500">{type.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-gray-900 mb-2">{type.price}</p>
                  <p className="text-gray-500">Duration: {type.duration}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleConsultationSelect(type.id)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
