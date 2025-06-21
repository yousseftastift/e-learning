import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void; // Make event type more specific
  to?: string;
  href?: string; // For external links
  target?: string; // For use with href
  rel?: string; // For use with href
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-out-expo disabled:opacity-50 disabled:cursor-not-allowed hover-scale transform active:scale-95 hover:shadow-lg animate-fadeIn";
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-opacity-80 focus:ring-primary hover-glow',
    secondary: 'bg-secondary text-white hover:bg-opacity-80 focus:ring-secondary hover-glow',
    outline: 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary hover:border-primary/80',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary shadow-none hover:shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  const content = (
    <>
      {leftIcon && <span className="mr-2 -ml-1 animate-fadeInLeft">{leftIcon}</span>}
      <span className="animate-fadeIn">{children}</span>
      {rightIcon && <span className="ml-2 -mr-1 animate-fadeInRight">{rightIcon}</span>}
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (to) {
    // If it's a Link, disabled prop is not directly applicable, handle via onClick or CSS if needed
    // For simplicity, we pass onClick, which Link supports.
    // True disabling would require not rendering a Link or conditional styling.
    return (
      <Link to={to} className={`${combinedClassName} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`} onClick={disabled ? (e) => e.preventDefault() : onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;