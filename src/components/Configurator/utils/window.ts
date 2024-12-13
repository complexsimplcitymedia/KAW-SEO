import type { WindowDimensions } from '../types';

export function getWindowFeatures(dimensions: WindowDimensions): string {
  const features = [
    `width=${dimensions.width}`,
    `height=${dimensions.height}`,
    `left=${dimensions.left}`,
    `top=${dimensions.top}`,
    'menubar=no',
    'toolbar=no',
    'location=no',
    'status=no',
    'resizable=yes',
    'scrollbars=yes'
  ];

  return features.join(',');
}