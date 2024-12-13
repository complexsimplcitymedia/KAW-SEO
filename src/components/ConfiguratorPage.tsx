import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ConfiguratorLayout } from './Configurator/components';
import { ConfiguratorHero, ConfiguratorControls } from './Configurator/sections';
import { useConfigurator } from './Configurator/hooks/useConfigurator';

export default function ConfiguratorPage() {
  const { launchConfigurator, isLoading } = useConfigurator();

  return (
    <ConfiguratorLayout>
      <Helmet>
        <title>Interactive Car Configurator | Kustom Auto Wrx</title>
        <meta name="description" content="Design your dream vehicle with our interactive 3D car configurator. Explore colors, finishes, and modifications in real-time." />
      </Helmet>

      <ConfiguratorHero />
      <ConfiguratorControls onLaunch={launchConfigurator} isLoading={isLoading} />
    </ConfiguratorLayout>
  );
}