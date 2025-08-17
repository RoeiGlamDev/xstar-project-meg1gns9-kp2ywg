import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false }) => {const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (required && event.target.value.trim() === '') {
      setError(${label} is required);
    } else {
      setError('');
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-purple-600 font-semibold mb-2">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
          error ? 'border-red-500' : 'border-gray-300'
        }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
        aria-invalid={!!error}
        required={required}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;