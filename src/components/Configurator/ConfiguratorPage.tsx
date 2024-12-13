import React from 'react';
import { ConfiguratorLayout } from './components';
import { ConfiguratorHero, ConfiguratorControls } from './sections';
import { useConfigurator } from './hooks/useConfigurator';
import { ConfiguratorMeta } from './components/ConfiguratorMeta';

export default function ConfiguratorPage() {
  const { launchConfigurator, isLoading } = useConfigurator();

  return (
    <ConfiguratorLayout>
      <ConfiguratorMeta />
      <ConfiguratorHero />
      <ConfiguratorControls 
        onLaunch={launchConfigurator} 
        isLoading={isLoading} 
      />
    </ConfiguratorLayout>
  );
}