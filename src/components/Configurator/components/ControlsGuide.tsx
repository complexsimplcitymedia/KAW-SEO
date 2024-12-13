import React from 'react';

export default function ControlsGuide() {
  return (
    <div className="max-w-2xl mx-auto bg-white/10 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-3 text-blue-400 mb-4">
        <h2 className="text-lg font-semibold">Controls</h2>
      </div>
      <ul className="text-gray-300 space-y-2">
        <li>• Left click + drag to rotate the vehicle</li>
        <li>• Right click + drag to pan the camera</li>
        <li>• Mouse wheel to zoom in/out</li>
        <li>• Double click to focus on a specific part</li>
      </ul>
    </div>
  );
}