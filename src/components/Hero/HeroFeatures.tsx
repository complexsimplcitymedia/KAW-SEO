import React from 'react';
import { Shield } from 'lucide-react';

export function HeroFeatures() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div className="flex items-center space-x-3 text-blue-400">
        <Shield className="w-5 h-5" />
        <span>Premium Materials</span>
      </div>
      <div className="flex items-center space-x-3 text-blue-400">
        <Shield className="w-5 h-5" />
        <span>Expert Craftsmanship</span>
      </div>
    </div>
  );
}