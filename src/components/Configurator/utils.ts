import { LaunchOptions } from './types';
import { CONFIGURATOR_CONFIG } from './config';

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

export function handleConfiguratorLaunch(url: string): void {
  const width = Math.min(1200, window.innerWidth * 0.9);
  const height = Math.min(800, window.innerHeight * 0.9);
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  window.open(
    url,
    'CarConfigurator',
    `width=${width},height=${height},top=${top},left=${left}`
  );
}