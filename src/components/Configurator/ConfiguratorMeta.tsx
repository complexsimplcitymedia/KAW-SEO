import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ConfiguratorMeta() {
  return (
    <Helmet>
      <title>Interactive Car Configurator | Kustom Auto Wrx</title>
      <meta name="description" content="Design your dream vehicle with our interactive 3D car configurator. Explore colors, finishes, and modifications in real-time." />
      <meta property="og:title" content="Interactive Car Configurator | Kustom Auto Wrx" />
      <meta property="og:description" content="Design your dream vehicle with our interactive 3D car configurator. Explore colors, finishes, and modifications in real-time." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kustomautowrx.com/configurator" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Interactive Car Configurator | Kustom Auto Wrx" />
      <meta name="twitter:description" content="Design your dream vehicle with our interactive 3D car configurator." />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80" />
      <link rel="canonical" href="https://kustomautowrx.com/configurator" />
    </Helmet>
  );
}