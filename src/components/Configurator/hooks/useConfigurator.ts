import { useState, useCallback } from 'react';
import { CONFIGURATOR_URL } from '../constants';

export function useConfigurator() {
  const [isLoading, setIsLoading] = useState(false);

  const launchConfigurator = useCallback(() => {
    setIsLoading(true);
    try {
      window.open(CONFIGURATOR_URL, '_blank');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    launchConfigurator
  };
}