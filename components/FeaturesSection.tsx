import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Smart Cleaning Solutions',
    description: 'Leverage advanced algorithms to optimize your cleaning process, ensuring efficiency and effectiveness.',
    icon: <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 13H9v-2h2v2h-2zm0-4H9V7h2v4z" /></svg>,
  },
  {
    title: 'IoT Integration',
    description: 'Connect and manage your cleaning devices seamlessly through our innovative IoT platform.',
    icon: <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a5 5 0 110 10 5 5 0 010-10zm0-5a10 10 0 100 20 10 10 0 000-20z" /></svg>,
  },
  {
    title: 'Real-time Monitoring',
    description: 'Keep track of your cleaning operations with our real-time monitoring and reporting tools.',
    icon: <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" /></svg>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-purple-600 mb-8">Our Technology Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-purple-50 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold text-purple-600">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;