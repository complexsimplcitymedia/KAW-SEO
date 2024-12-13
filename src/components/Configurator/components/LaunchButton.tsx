import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface LaunchButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export default function LaunchButton({ onClick, loading }: LaunchButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={loading}
      className={`
        bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold 
        hover:bg-blue-700 transition-colors inline-flex items-center space-x-3
        ${loading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <span>Launch Car Configurator</span>
      <ExternalLink className="w-5 h-5" />
    </motion.button>
  );
}