import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

// Design System Constants Based on the Fox/Pencil Logo
export const PALETTE = {
  primary: '#E25921', // Fox body (burnt orange)
  primaryDark: '#B23A14', // Shadow of the fox
  secondary: '#DFCCA9', // Wood of pencil (beige)
  accent: '#FDF7E7', // Belly/face of fox (cream)
  background: '#F9F6EE', // Off-white warm background
  text: '#272624', // Charcoal outline of the drawing
  muted: '#8B8D88', // Pencil lead/greyish elements
  white: '#FFFFFF',
};

// Sketchy border radiuses for that hand-drawn feel
const sketchyBorder1 = '255px 15px 225px 15px/15px 225px 15px 255px';
const sketchyBorder2 = '15px 255px 15px 225px/225px 15px 255px 15px';
const sketchyBorder3 = '225px 15px 255px 15px/15px 255px 15px 225px';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const SketchyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, variant = 'primary', size = 'md', className = '', ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-transform active:scale-95 duration-200';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const variantClasses = {
    primary: 'bg-[#E25921] text-white border-2 border-[#272624] hover:bg-[#B23A14]',
    secondary: 'bg-[#DFCCA9] text-[#272624] border-2 border-[#272624] hover:bg-[#c9b592]',
    outline: 'bg-transparent text-[#272624] border-2 border-[#272624] hover:bg-[#FDF7E7]',
    ghost: 'bg-transparent text-[#E25921] hover:bg-[#FDF7E7] border-2 border-transparent hover:border-[#272624]',
  };

  return (
    <button
      ref={ref}
      style={{
        borderRadius: sketchyBorder1,
        fontFamily: "'TF Mecomicse', cursive",
      }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

SketchyButton.displayName = 'SketchyButton';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'filled' | 'outline';
}

export const SketchyCard = React.forwardRef<HTMLDivElement, CardProps>(({
  children, variant = 'default', className = '', style, ...props
}, ref) => {
  const variantClasses = {
    default: 'bg-white border-2 border-[#272624]',
    filled: 'bg-[#FDF7E7] border-2 border-[#272624]',
    outline: 'border-[3px] border-[#272624] border-dashed',
  };

  // Pick a random sketchy border for variety, but stable on render
  // For simplicity, we'll just use one, but could randomize
  return (
    <div
      ref={ref}
      style={{
        borderRadius: sketchyBorder2,
        boxShadow: '4px 4px 0px 0px rgba(39, 38, 36, 1)',
        ...style
      }}
      className={`p-6 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

SketchyCard.displayName = 'SketchyCard';


export const SketchyInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({
  className = '', ...props
}, ref) => {
  return (
    <input
      ref={ref}
      style={{
        borderRadius: sketchyBorder3,
        fontFamily: "'TF Mecomicse', cursive",
      }}
      className={`w-full px-4 py-3 bg-white border-2 border-[#272624] text-[#272624] placeholder-[#8B8D88] focus:outline-none focus:ring-2 focus:ring-[#E25921] focus:border-transparent transition-all ${className}`}
      {...props}
    />
  );
});

SketchyInput.displayName = 'SketchyInput';


export const SketchyBadge = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <span 
      style={{ borderRadius: sketchyBorder1, fontFamily: "'TF Mecomicse', cursive" }}
      className={`inline-flex items-center px-3 py-1 bg-[#FDF7E7] text-[#E25921] text-sm font-bold border-2 border-[#272624] ${className}`}
    >
      {children}
    </span>
  );
};
