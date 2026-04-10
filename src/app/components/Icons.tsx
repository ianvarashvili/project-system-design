import React from 'react';

// Using a slightly sketchy, hand-drawn look for the SVG paths
const createHandDrawnPath = (d: string) => (
  <path
    d={d}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="vector-drawn"
    vectorEffect="non-scaling-stroke"
  />
);

export const PlusIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M12 4.5c.2 4.8-.1 10.3 0 15M4.5 12c5.1-.3 10.2.1 15 0")}
  </svg>
);

export const MinusIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M4 12c5.4-.5 10.8.2 16 0")}
  </svg>
);

export const EqualsIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M4 9c5.2-.4 10.6.2 16 0M4 15c5.5-.3 10.5.1 16 0")}
  </svg>
);

export const MultiplyIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M5 5c4.7 4.6 9.3 9.4 14 14M19 5c-4.6 4.7-9.4 9.3-14 14")}
  </svg>
);

export const DivideIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M4 12c5.3-.2 10.7.1 16 0")}
    <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

export const StarIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M12 2.5l2.7 5.5 6.1.9-4.4 4.2 1 6.1-5.4-2.8-5.4 2.8 1-6.1-4.4-4.2 6.1-.9L12 2.5z")}
  </svg>
);

export const ArrowRightIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M4 12c5.5-.3 11 .2 16 0M14 6c1.8 2.1 3.5 4.3 5.5 6-1.7 2.2-3.8 4-5.5 6.2")}
  </svg>
);

export const PencilIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M17 3c1.5-1.5 3.8-1.5 5.2 0 1.5 1.5 1.5 3.8 0 5.2l-11.8 11.8c-1.2 1.2-2.8 2.1-4.5 2.5l-3.5.8.8-3.5c.4-1.7 1.3-3.2 2.5-4.5L17 3z")}
    {createHandDrawnPath("M15 5l4 4")}
  </svg>
);

export const CheckIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {createHandDrawnPath("M4 12c2.5 2.5 4.8 5.2 7 8 3.8-5.5 8.2-10.8 13-15")}
  </svg>
);
