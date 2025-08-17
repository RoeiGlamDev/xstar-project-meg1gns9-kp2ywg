import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const reviews = [
  {
    name: "John Doe",
    review: "CleanSSR transformed my workspace! Highly recommend their services.",
  },
  {
    name: "Jane Smith",
    review: "Professional and efficient. CleanSSR is the future of cleaning.",
  },
];

const CleanSSR: React.FC = () => {
  return (
    <div className="bg-white text-purple-700 font-sans">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">CleanSSR</h1>
      </header>
      
      <main className="flex flex-col items-center">
        <motion.section
          className="bg-purple-600 text-white w-full h-screen flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-semibold text-center">Welcome to CleanSSR</h2>
          <p className="mt-4 text-xl text-center">Revolutionizing the cleaning industry with technology.</p>
        </motion.section>

        <section className="p-10">
          <h3 className="text-2xl font-semibold text-center">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div
              className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold">Smart Scheduling</h4>
              <p className="mt-2">Utilize our intelligent system to book cleaning sessions at your convenience.</p>
            </motion.div>
            <motion.div
              className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold">Eco-Friendly Products</h4>
              <p className="mt-2">We use sustainable cleaning products for a safer environment.</p>
            </motion.div>
            <motion.div
              className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold">Real-Time Tracking</h4>
              <p className="mt-2">Monitor your cleaning session live with our tracking technology.</p>
            </motion.div>
          </div>
        </section>

        <section className="p-10 bg-purple-50">
          <h3 className="text-2xl font-semibold text-center">What Our Clients Say</h3>
          <div className="mt-8">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-purple-300 p-4">
                <p className="font-bold">{review.name}</p>
                <p className="mt-1 italic">"{review.review}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-6 text-center">
        <p className="text-sm">© 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CleanSSR;