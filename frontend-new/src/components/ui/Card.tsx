import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;