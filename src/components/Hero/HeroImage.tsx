import React from 'react';

export function HeroImage() {
  return (
    <div className="absolute inset-0">
      <img
        src="https://laexoticcarrentalsandsales.com/cdn/shop/files/0FDA0ADD-ADB7-4188-B9A2-CE9D4E8CDBF1.jpg?v=1716627018&width=2048"
        alt="Luxury Vehicle Customization at Kustom Auto Wrx"
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/70" />
    </div>
  );
}