import React, { useState } from 'react';
import Button from './Button';
import { Coffee, CheckCircle2 } from 'lucide-react';
import Image from './Image';

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roast: 'Medium'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-cream border border-brand-beige rounded-3xl p-12 text-center h-full flex flex-col justify-center items-center shadow-soft">
        <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-3xl font-bold mb-4">You're on the list!</h3>
        <p className="text-brand-espresso/80 text-lg max-w-sm">
          Thanks for your interest, {formData.name}. We'll send you an email at {formData.email} as soon as our bean subscription program launches.
        </p>
        <Button 
          variant="outline" 
          className="mt-8"
          onClick={() => setIsSubmitted(false)}
        >
          Sign up another friend
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-brand-beige rounded-3xl overflow-hidden shadow-soft flex flex-col lg:flex-row border border-brand-cream/50">
      <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
        <Image 
          src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" 
          alt="Coffee Beans" 
          wrapperClassName="absolute inset-0"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/80 to-transparent flex flex-col justify-end p-8">
          <div className="flex items-center gap-3 text-white mb-2">
            <Coffee className="w-6 h-6 text-brand-terracotta" />
            <span className="font-bold tracking-widest text-sm uppercase">Coming Soon</span>
          </div>
          <h3 className="font-display text-3xl font-bold text-white">The Coffee Club</h3>
        </div>
      </div>
      
      <div className="lg:w-3/5 p-8 md:p-12 bg-white">
        <h3 className="font-display text-3xl font-bold mb-4">Never run out of beans.</h3>
        <p className="text-brand-espresso/70 mb-8 leading-relaxed">
          We're launching a home delivery subscription for our freshly roasted beans. 
          Sign up below to express your interest and get early access plus a 20% discount on your first month.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">First Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-brand-cream border border-brand-beige rounded-xl px-4 py-3 focus:outline-none focus:border-brand-terracotta transition-colors"
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-brand-cream border border-brand-beige rounded-xl px-4 py-3 focus:outline-none focus:border-brand-terracotta transition-colors"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-3">Preferred Roast</label>
            <div className="grid grid-cols-3 gap-3">
              {['Light', 'Medium', 'Dark'].map(roast => (
                <button
                  key={roast}
                  type="button"
                  onClick={() => setFormData({...formData, roast})}
                  className={`py-3 rounded-xl font-medium text-sm transition-all border ${
                    formData.roast === roast 
                      ? 'bg-brand-espresso text-white border-brand-espresso shadow-md' 
                      : 'bg-white text-brand-espresso/70 border-brand-beige hover:border-brand-terracotta/50'
                  }`}
                >
                  {roast}
                </button>
              ))}
            </div>
          </div>
          
          <Button type="submit" fullWidth size="lg" className="mt-4">
            Join the Waitlist
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
