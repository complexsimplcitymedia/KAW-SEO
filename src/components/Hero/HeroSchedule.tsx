import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroScheduleProps {
  onOpenAppointment: () => void;
}

export function HeroSchedule({ onOpenAppointment }: HeroScheduleProps) {
  return (
    <aside className="hidden lg:block bg-black/40 backdrop-blur-sm rounded-xl p-8 max-w-md">
      <h3 className="text-2xl font-bold text-white mb-4">Schedule Now</h3>
      <p className="text-gray-300 mb-6">
        Don't wait! Schedule your appointment today to secure your preferred time slot and avoid extended wait times.
      </p>
      <button
        onClick={onOpenAppointment}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        Reserve Your Spot
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </aside>
  );
}