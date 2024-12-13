import { useState, useCallback } from 'react';
import type { ConfiguratorState, LaunchOptions } from '../types';
import { buildConfiguratorUrl, handleConfiguratorLaunch } from '../utils';

export function useConfiguratorState() {
  const [state, setState] = useState<ConfiguratorState>({
    isLoading: false,
    error: null
  });

  const launchConfigurator = useCallback(async (options?: LaunchOptions) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const url = buildConfiguratorUrl(options);
      handleConfiguratorLaunch(url);
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Failed to launch configurator' 
      }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  return {
    ...state,
    launchConfigurator
  };
}