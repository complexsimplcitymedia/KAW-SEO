import React from 'react';
import { Icon } from '../IconProvider';
import { features } from './config';

export default function ConfiguratorFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div 
          key={feature.title} 
          className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          {feature.icon && (
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
              <Icon name={feature.icon} className="w-6 h-6 text-blue-400" />
            </div>
          )}
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}