export const CONFIGURATOR_CONFIG = {
  baseUrl: 'https://103.91.247.12/webclient',
  appId: '1316909947753070592',
  defaultOptions: {
    frameRate: 60,
    codeRate: 10000,
    language: 'en'
  }
} as const;

export const features: Feature[] = [
  {
    title: 'Real-time Visualization',
    description: 'See changes instantly as you customize your vehicle',
    icon: 'eye'
  },
  {
    title: 'Multiple Angles',
    description: 'View your design from any angle in 3D space',
    icon: '360-view'
  },
  {
    title: 'Professional Tools',
    description: 'Industry-standard configuration tools at your fingertips',
    icon: 'tools'
  }
];