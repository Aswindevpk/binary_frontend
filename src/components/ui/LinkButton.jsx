import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ size = 'md', color = 'green', variant = 'filled', children, to,disabled }) => {
  // Define size classes
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-md',
  };

  // Define color classes
  const colorClasses = {
    green: {
      filled: 'bg-green-600 text-white hover:bg-green-500',
      outlined: 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    },
    red: {
      filled: 'bg-red-600 text-white hover:bg-red-500',
      outlined: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
    },
    black: {
      filled: 'bg-black text-white hover:bg-gray-800',
      outlined: 'border border-black text-black hover:bg-black hover:text-white',
    },
  };

  // Combine size and color classes
  const buttonClasses = `${sizeClasses[size]} ${colorClasses[color][variant]} rounded transition-all duration-200`;

  return (
    <Link to={to} className={buttonClasses} disabled={disabled}>
      {children}
    </Link>
  );
};

export default LinkButton;
