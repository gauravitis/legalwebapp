'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { useRouter } from 'next/navigation';
import 'react-calendar/dist/Calendar.css';

const consultationTypes = {
  free: {
    title: 'Free Consultation',
    duration: '20 minutes',
    price: 'Free'
  },
  online: {
    title: 'Online Consultation',
    duration: '45 minutes',
    price: '₹1,499'
  },
  inperson: {
    title: 'In-Person Consultation',
    duration: '60 minutes',
    price: '₹2,999'
  }
};

// Available time slots
const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function BookingPage({ params }: { params: { type: string } }) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });
  const [step, setStep] = useState(1);

  const consultationType = consultationTypes[params.type as keyof typeof consultationTypes];

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const bookingData = {
        ...formData,
        consultationType: consultationType.title,
        date: selectedDate,
        time: selectedTime
      };

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      router.push('/consultation/success');
    } catch (error) {
      console.error('Booking error:', error);
      // Here you could show an error message to the user
    }
  };

  const nextStep = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book {consultationType.title}</h1>
          <p className="text-gray-600">
            Duration: {consultationType.duration} | Price: {consultationType.price}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {step === 1 ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Date and Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 30)}
                    className="rounded-lg border"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Available Time Slots</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-2 text-sm rounded-md border ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-right">
                <button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className={`px-6 py-2 rounded-md text-white ${
                    selectedDate && selectedTime
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-gray-700">
                    Case Type
                  </label>
                  <select
                    id="caseType"
                    name="caseType"
                    required
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select a case type</option>
                    <option value="RERA">RERA</option>
                    <option value="Property Dispute">Property Dispute</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Brief Description of Your Case
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
