
import React from 'react';
import { MarqueeProps } from '../types';

export const Marquee: React.FC<MarqueeProps & { children: React.ReactNode }> = ({
  children,
  direction = 'left',
  speed = 25,
  pauseOnHover = true,
  className = '',
}) => {
  const isVertical = direction === 'up' || direction === 'down';
  
  const animationClass = direction === 'left' 
    ? 'animate-marquee' 
    : direction === 'right' 
    ? 'animate-marquee-reverse' 
    : 'animate-marquee-vertical';

  const containerClasses = isVertical 
    ? 'flex-col h-full' 
    : 'flex-row w-full';

  return (
    <div className={`group overflow-hidden flex ${className}`}>
      <div 
        className={`flex ${containerClasses} ${animationClass} ${pauseOnHover ? 'group-hover:pause' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className={`flex shrink-0 ${containerClasses} gap-4 px-2`}>
          {children}
        </div>
        <div className={`flex shrink-0 ${containerClasses} gap-4 px-2`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};
