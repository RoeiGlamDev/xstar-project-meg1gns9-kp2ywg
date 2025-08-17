import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyle = 'py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out';
  const primaryStyle = 'bg-purple-600 text-white hover:bg-purple-700';
  const secondaryStyle = 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-100';

  const buttonStyle = variant === 'primary' ? ${baseStyle} ${primaryStyle} : ${baseStyle} ${secondaryStyle};

  return (
    <motion.div
      className="buttonStyle"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={children.toString()}
    >
      {children}
    </motion.button>
  );
};

export default Button;