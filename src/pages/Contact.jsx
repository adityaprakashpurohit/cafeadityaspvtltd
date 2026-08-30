import React, { useState } from 'react';
import { Button } from '../components/Button';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-display text-brand-espresso mb-8">Get in touch</h1>
          
          <div className="space-y-8 text-brand-espresso/80">
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-2">Address</h3>
              <p>123 Café Street<br/>Bhubaneswar, Odisha, India</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-2">Contact</h3>
              <p>+91 90000 00000<br/>hello@brewandbloom.com</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-2">Hours</h3>
              <p>Monday–Friday: 7:30 AM–10 PM<br/>Saturday–Sunday: 8 AM–11 PM</p>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-soft border border-brand-beige">
            <h3 className="font-display text-2xl text-brand-espresso mb-6">Send a message</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-espresso mb-2">Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-espresso mb-2">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-espresso mb-2">Subject</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-espresso mb-2">Message</label>
                <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-brand-beige focus:border-brand-espresso outline-none"></textarea>
              </div>
              <Button type="submit" className="w-full">
                {status === 'success' ? 'Message sent successfully!' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
