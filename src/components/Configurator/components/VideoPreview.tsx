import React from 'react';

export default function VideoPreview() {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="relative aspect-video w-full bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/5LVga5CaGts"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}