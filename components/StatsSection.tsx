import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-6">CleanSSR Achievements</h2>
        <p className="text-lg text-gray-700 mb-12">
          At CleanSSR, we pride ourselves on our technology-driven cleaning solutions that deliver results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              className="bg-purple-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">{achievement.title}</h3>
              <motion.span
                className="text-5xl font-bold text-purple-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {achievement.count}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;