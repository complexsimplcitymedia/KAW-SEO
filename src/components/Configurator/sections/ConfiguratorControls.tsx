import React from 'react';
import { LaunchButton, ControlsGuide } from '../components';

interface ConfiguratorControlsProps {
  onLaunch: () => void;
  isLoading?: boolean;
}

export default function ConfiguratorControls({ onLaunch, isLoading }: ConfiguratorControlsProps) {
  return (
    <div className="text-center space-y-8">
      <LaunchButton onClick={onLaunch} loading={isLoading} />
      <ControlsGuide />
    </div>
  );
}