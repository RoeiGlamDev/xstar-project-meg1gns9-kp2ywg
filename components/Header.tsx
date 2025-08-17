import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-purple-600 font-bold text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-purple-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;