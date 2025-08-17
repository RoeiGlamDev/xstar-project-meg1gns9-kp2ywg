import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-purple-600 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
        <div className="flex space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Get Started
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-purple-600 text-purple-600 py-2 px-4 rounded-lg transition duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <div className="mt-10">
        <p className="text-sm text-gray-500">Trusted by leading tech companies</p>
        <div className="flex space-x-4 mt-2">
          <span className="text-purple-600 font-semibold">✓ Secure Technology Solutions</span>
          <span className="text-purple-600 font-semibold">✓ Industry-Leading Innovations</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;