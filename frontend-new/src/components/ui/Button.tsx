import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, to, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full transition font-medium";
  const variants = {
    primary: "bg-pink-500 text-white hover:bg-pink-600",
    secondary: "bg-transparent border-2 border-white hover:bg-white/10"
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;