'use client';

import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Starting form submission with data:', formData);
      
      // Save to Firebase
      try {
        const docRef = await addDoc(collection(db, 'inquiries'), {
          ...formData,
          createdAt: new Date().toISOString(),
          status: 'unread'
        });
        console.log('Form data saved to Firebase with ID:', docRef.id);
      } catch (firebaseError) {
        console.error('Firebase error:', firebaseError);
        let errorMessage = 'Failed to save to Firebase';
        
        if (firebaseError instanceof Error) {
          errorMessage = firebaseError.message;
        } else if (typeof firebaseError === 'string') {
          errorMessage = firebaseError;
        } else if (firebaseError && typeof firebaseError === 'object' && 'message' in firebaseError) {
          errorMessage = String(firebaseError.message);
        }
        
        throw new Error(`Failed to save to Firebase: ${errorMessage}`);
      }

      // Send email via API route
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }
      } catch (emailError: any) {
        console.error('Email error:', emailError);
        let errorMessage = 'Failed to send email';
        
        if (emailError instanceof Error) {
          errorMessage = emailError.message;
        } else if (typeof emailError === 'string') {
          errorMessage = emailError;
        } else if (emailError && typeof emailError === 'object' && 'message' in emailError) {
          errorMessage = String(emailError.message);
        }
        
        throw new Error(`Failed to send email: ${errorMessage}`);
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      let errorMessage = 'Failed to submit form. Please try again.';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      } else if (err && typeof err === 'object' && 'message' in err) {
        errorMessage = String(err.message);
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Have any questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Office Address</h3>
              <p className="text-gray-600">
                123 Legal Street<br />
                City, State 12345
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-gray-600">contact@legalservices.com</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div>
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Message sent successfully! We will get back to you soon.
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter message subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 text-white font-medium rounded-md ${
                loading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
