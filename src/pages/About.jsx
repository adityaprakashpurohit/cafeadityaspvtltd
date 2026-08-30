import React from 'react';
import { teamData } from '../data/team';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-display text-brand-espresso mb-6">More than coffee. A place to belong.</h1>
        <p className="text-xl text-brand-espresso/70 max-w-3xl mx-auto">
          "Brew & Bloom began with a simple idea — create a place where exceptional coffee and everyday moments could meet."
        </p>
      </section>

      {/* Values */}
      <section className="bg-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-4">Craft</h3>
              <p className="text-brand-espresso/70">We care about the details, from the perfect roast to the final pour.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-4">Community</h3>
              <p className="text-brand-espresso/70">A café is better when shared. We built this space for connection.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-4">Quality</h3>
              <p className="text-brand-espresso/70">Simple ingredients. Thoughtfully prepared and sourced responsibly.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-brand-espresso mb-4">Sustainability</h3>
              <p className="text-brand-espresso/70">Better choices wherever possible for our planet and people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display text-brand-espresso text-center mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamData.map(member => (
              <div key={member.id} className="text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto w-48 h-48">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-2xl text-brand-espresso mb-2">{member.name}</h3>
                <p className="text-brand-terracotta font-medium mb-4">{member.role}</p>
                <p className="text-brand-espresso/70 max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
