import React, { useState } from 'react';
import { Button } from '../components/Button';

export default function Reservation() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="w-24 h-24 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-8">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-display text-brand-espresso mb-4">Reservation request received</h1>
        <p className="text-lg text-brand-espresso/70 mb-8">"We'll confirm your table shortly via email."</p>
        <Button onClick={() => setStatus('idle')}>Book another table</Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-display text-brand-espresso mb-4">Reserve your table</h1>
        <p className="text-brand-espresso/70">Join us for coffee, food, and good moments.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-soft border border-brand-beige">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Name</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Email</label>
            <input required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Phone</label>
            <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Number of guests</label>
            <select className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors bg-white">
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'Person':'People'}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Date</label>
            <input required type="date" min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-espresso mb-2">Time</label>
            <input required type="time" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors" />
          </div>
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-brand-espresso mb-2">Special request</label>
          <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso focus:ring-1 focus:ring-brand-espresso outline-none transition-colors"></textarea>
        </div>
        <Button type="submit" className="w-full">Request Reservation</Button>
      </form>
    </div>
  );
}
