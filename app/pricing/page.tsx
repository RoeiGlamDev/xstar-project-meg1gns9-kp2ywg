import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    price: '$49/month',
    features: ['Cloud-based cleaning management', 'Real-time updates', 'Email support'],
  },
  {
    name: 'Standard Plan',
    price: '$99/month',
    features: ['All Basic features', 'Automated scheduling', 'Priority support'],
  },
  {
    name: 'Premium Plan',
    price: '$149/month',
    features: ['All Standard features', 'Custom integrations', 'Dedicated account manager'],
  },
];

const FAQ = [
  {
    question: 'What is CleanSSR?',
    answer: 'CleanSSR is a technology-driven cleaning service provider that leverages innovative software solutions to streamline the cleaning process.',
  },
  {
    question: 'How do I choose a pricing plan?',
    answer: 'We recommend evaluating your cleaning needs and considering the features offered in each plan to select the best fit for you.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, CleanSSR offers a 14-day free trial for our Basic Plan. You can experience our services without any commitment.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-800 p-6">
      <motion.div
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CleanSSR Pricing Plans
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="border border-purple-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition-colors duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ.map((item, index) => (
            <div key={index} className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;