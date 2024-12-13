import { LaunchOptions } from '../types';
import { CONFIGURATOR_CONFIG } from '../config';

export function buildConfiguratorUrl(options?: Partial<LaunchOptions>): string {
  const { baseUrl, appId, defaultOptions } = CONFIGURATOR_CONFIG;
  
  const params = new URLSearchParams({
    appliId: appId,
    frameRate: String(options?.frameRate || defaultOptions.frameRate),
    codeRate: String(options?.codeRate || defaultOptions.codeRate),
    language: options?.language || defaultOptions.language
  });

  return `${baseUrl}/?${params.toString()}`;
}