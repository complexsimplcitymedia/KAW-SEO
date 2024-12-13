import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../../ui';
import type { LaunchOptions } from '../types';

interface ConfiguratorControlsProps {
  onLaunch: (options?: LaunchOptions) => void;
  isLoading?: boolean;
}

export default function ConfiguratorControls({ onLaunch, isLoading }: ConfiguratorControlsProps) {
  return (
    <div className="flex justify-center space-x-4">
      <Button
        variant="primary"
        size="lg"
        icon={ExternalLink}
        onClick={() => onLaunch()}
        loading={isLoading}
      >
        Launch Configurator
      </Button>
    </div>
  );
}