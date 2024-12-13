import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { HeroFeatures } from './HeroFeatures';
import { HeroSchedule } from './HeroSchedule';

interface HeroContentProps {
  onOpenAppointment: () => void;
}

export function HeroContent({ onOpenAppointment }: HeroContentProps) {
  return (
    <article className="max-w-2xl">
      <div className="space-y-2 mb-6">
        <h2 className="text-6xl font-bold text-white leading-tight">
          Gainesville's Premiere Auto Customization Shop
        </h2>
      </div>
      
      <div className="space-y-6 text-xl text-gray-300">
        <p>
          Experience unparalleled high-end car restoration and auto body services at Gainesville's leading vehicle customization studio. Our expert craftsmen specialize in premium vehicle wraps, custom paint jobs, and professional modifications for luxury and exotic vehicles.
        </p>
        <p>
          From classic car restoration to modern vehicle customization, we deliver exceptional results using industry-leading materials and techniques.
        </p>
        <p className="font-semibold">
          Trust the blueprint for automotive excellence.
        </p>
      </div>
      
      <div className="mt-8">
        <button 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          aria-label="Schedule a consultation for your vehicle customization"
          onClick={onOpenAppointment}
        >
          Book Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <HeroFeatures />
    </article>
  );
}