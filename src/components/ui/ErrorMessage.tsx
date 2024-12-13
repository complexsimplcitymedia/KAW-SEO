import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { BaseComponentProps } from './types';

interface ErrorMessageProps extends BaseComponentProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry, className = '' }: ErrorMessageProps) {
  return (
    <div className={`
      flex items-center justify-between
      p-4 rounded-lg bg-red-500/10 text-red-400
      ${className}
    `}>
      <div className="flex items-center space-x-2">
        <AlertCircle className="w-5 h-5" />
        <span>{message}</span>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-3 py-1 text-sm rounded-lg
            bg-red-500/20 hover:bg-red-500/30
            transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}