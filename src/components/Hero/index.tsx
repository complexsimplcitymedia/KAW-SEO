import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroContent } from './HeroContent';
import { HeroSchedule } from './HeroSchedule';
import { HeroImage } from './HeroImage';
import { SEOContent } from './SEOContent';

interface HeroProps {
  onOpenAppointment: () => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <main role="main" className="relative overflow-hidden min-h-screen">
      <Helmet>
        <title>Kustom Auto Wrx | Gainesville Auto Customization Experts</title>
        <meta name="description" content="Transform your vehicle with Gainesville's premier auto customization studio. Specializing in wraps, paint, and expert bodywork." />
        <meta property="og:title" content="Kustom Auto Wrx | Gainesville Auto Customization Experts" />
        <meta property="og:description" content="Transform your vehicle with Gainesville's premier auto customization studio. Expert vehicle wraps, custom paint, and professional modifications." />
        <meta property="og:image" content="https://laexoticcarrentalsandsales.com/cdn/shop/files/0FDA0ADD-ADB7-4188-B9A2-CE9D4E8CDBF1.jpg?v=1716627018&width=2048" />
        <link rel="canonical" href="https://kustomautowrx.com" />
      </Helmet>
      
      <HeroImage />
      
      <SEOContent />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen flex items-center justify-between">
        <HeroContent onOpenAppointment={onOpenAppointment} />
        <HeroSchedule onOpenAppointment={onOpenAppointment} />
      </div>
    </main>
  );
}