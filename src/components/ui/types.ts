import type { LucideIcon } from 'lucide-react';

export interface BaseComponentProps {
  className?: string;
}

export interface IconProps {
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
}

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'outline';