import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
  description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        className="text-purple-600 text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="text-gray-700 text-lg max-w-2xl text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <div className="w-full h-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/ 3D interactive elements can be added here /}
          <OrbitControls />
        </Canvas>
      </div>
      <div className="mt-10">
        <motion.div
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started with CleanSSR
        </motion.button>
      </div>
    </div>
  );
};

export default Scene;