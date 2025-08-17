import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Technology Package',
    price: '$99/month',
    features: [
      'Basic Cloud Storage',
      'Email Support',
      'Weekly Backup',
    ],
  },
  {
    name: 'Professional Technology Package',
    price: '$199/month',
    features: [
      'Enhanced Cloud Storage',
      'Priority Email Support',
      'Daily Backup',
      'Monthly Performance Reports',
    ],
  },
  {
    name: 'Enterprise Technology Package',
    price: '$299/month',
    features: [
      'Unlimited Cloud Storage',
      '24/7 Phone Support',
      'Real-Time Backup',
      'Custom Performance Reports',
      'Dedicated Account Manager',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">CleanSSR Pricing Plans</h2>
        <p className="text-gray-600 mb-12">Choose the right technology service package for your needs</p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 m-4 rounded-lg shadow-lg w-full md:w-1/3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-purple-600">{tier.name}</h3>
              <p className="text-2xl font-bold text-purple-800 my-4">{tier.price}</p>
              <ul className="text-left mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 mb-2">• {feature}</li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none transition duration-200">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;