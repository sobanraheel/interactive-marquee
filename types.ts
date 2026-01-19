
import React from 'react';

export enum MarqueeVariant {
  CLASSIC_TEXT = 'classic-text',
  LOGO_CLOUD = 'logo-cloud',
  INTERACTIVE_CARDS = 'interactive-cards',
  VERTICAL_TICKER = 'vertical-ticker',
  GRADIENT_EDGE = 'gradient-edge'
}

export interface MarqueeItem {
  id: string;
  // Fix: React must be imported or available in scope to use React.ReactNode
  content: string | React.ReactNode;
  subContent?: string;
  icon?: string;
}

export interface MarqueeProps {
  // items made optional because the Marquee component is implemented using children
  items?: MarqueeItem[];
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}
