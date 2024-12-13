import React from 'react';

export default function Preview() {
  return (
    <div className="relative aspect-video w-full bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/5LVga5CaGts"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}