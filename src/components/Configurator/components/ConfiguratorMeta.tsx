import React from 'react';
import { Helmet } from 'react-helmet-async';

export function ConfiguratorMeta() {
  return (
    <Helmet>
      <title>Interactive Car Configurator | Kustom Auto Wrx</title>
      <meta 
        name="description" 
        content="Design your dream vehicle with our interactive 3D car configurator. Explore colors, finishes, and modifications in real-time." 
      />
      <meta property="og:title" content="Interactive Car Configurator | Kustom Auto Wrx" />
      <meta property="og:description" content="Design your dream vehicle with our interactive 3D car configurator." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kustomautowrx.com/configurator" />
      <link rel="canonical" href="https://kustomautowrx.com/configurator" />
    </Helmet>
  );
}