import React from 'react';
import type { BaseComponentProps } from '../../ui/types';

interface ConfiguratorLayoutProps extends BaseComponentProps {
  children: React.ReactNode;
}

export default function ConfiguratorLayout({ children, className = '' }: ConfiguratorLayoutProps) {
  return (
    <div className={`min-h-screen pt-32 pb-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}