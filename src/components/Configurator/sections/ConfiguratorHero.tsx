import React from 'react';
import { VideoPreview } from '../components';

export default function ConfiguratorHero() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">
        Interactive Car Configurator
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Design Your Dream Vehicle in Real-Time
      </p>
      <VideoPreview />
    </div>
  );
}