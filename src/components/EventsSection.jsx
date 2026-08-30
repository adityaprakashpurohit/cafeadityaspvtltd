import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, X } from 'lucide-react';
import Image from './Image';

const events = [
  {
    id: 1,
    title: 'Barista Workshop: Latte Art Basics',
    date: '2026-10-15',
    time: '18:00 - 20:00',
    location: 'Brew & Bloom, Main Counter',
    description: 'Learn the fundamentals of pouring beautiful latte art from our head barista. Perfect for beginners.',
    price: '₹500',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Coffee Tasting Night (Cupping)',
    date: '2026-10-22',
    time: '19:00 - 21:00',
    location: 'Brew & Bloom, The Roastery',
    description: 'Join us for an exclusive evening tasting single-origin beans from Ethiopia and Colombia.',
    price: '₹800',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Live Acoustic Music',
    date: '2026-10-25',
    time: '19:30 - 22:00',
    location: 'Brew & Bloom, Patio',
    description: 'Enjoy a relaxing evening with local indie artists, paired with our signature evening blends and snacks.',
    price: 'Free Entry',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800'
  }
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getDay = (dateStr) => {
    const date = new Date(dateStr);
    return date.getDate();
  };

  const getMonth = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <section className="py-24 bg-brand-beige/30 dark:bg-[#2A211B] transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Upcoming Events</h2>
          <p className="text-brand-espresso/70 max-w-2xl mx-auto">
            Join our community for workshops, tastings, and live music. Click on an event to see more details.
          </p>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="card group cursor-pointer animate-scale-in flex flex-row bg-white dark:bg-[#352B24] border-transparent hover:border-brand-terracotta transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Calendar Leaf Date */}
              <div className="bg-brand-espresso text-white flex flex-col items-center justify-center p-4 w-28 rounded-l-2xl border-r border-brand-beige dark:border-brand-espresso/50">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-terracotta mb-1">{getMonth(event.date)}</span>
                <span className="font-display text-4xl font-bold">{getDay(event.date)}</span>
              </div>
              
              {/* Details Preview */}
              <div className="p-6 flex flex-col justify-center flex-grow">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-brand-terracotta transition-colors line-clamp-1">{event.title}</h3>
                <div className="flex items-center gap-2 text-brand-espresso/70 text-sm mb-1">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-espresso/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-brand-cream dark:bg-[#2A211B] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-scale-in">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="h-64 relative">
              <Image 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-terracotta mb-2 block">
                  {getMonth(selectedEvent.date)} {getDay(selectedEvent.date)}
                </span>
                <h3 className="font-display text-3xl font-bold">{selectedEvent.title}</h3>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8 text-brand-espresso/80 dark:text-brand-cream/80 border-b border-brand-beige dark:border-brand-espresso/50 pb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-terracotta" />
                  <span className="font-medium">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-terracotta" />
                  <span className="font-medium">{selectedEvent.location}</span>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-8">
                {selectedEvent.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-sm text-brand-espresso/60 uppercase tracking-wider mb-1">Tickets</span>
                  <span className="font-bold text-2xl">{selectedEvent.price}</span>
                </div>
                <button 
                  className="btn-primary px-8"
                  onClick={() => {
                    alert('Ticket booking would go here!');
                    setSelectedEvent(null);
                  }}
                >
                  Book Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
