import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface ConfiguratorHeroProps {
  onLaunch: () => void;
}

export default function ConfiguratorHero({ onLaunch }: ConfiguratorHeroProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">
        Interactive Car Configurator
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Design your dream vehicle in real-time with our advanced 3D configurator
      </p>
      <Button
        variant="primary"
        size="lg"
        icon={ExternalLink}
        onClick={onLaunch}
      >
        Launch Configurator
      </Button>
    </div>
  );
}