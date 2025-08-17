import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    content: string;
    review: string;
}

const Card: React.FC<CardProps> = ({ title, content, review }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-30 backdrop-blur-lg border border-purple-400 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label={Card for ${title}}
        >
            <h3 className="text-purple-600 text-xl font-semibold mb-2">{title}</h3>
            <p className="text-purple-800 mb-4">{content}</p>
            <blockquote className="text-purple-500 italic border-l-4 border-purple-400 pl-4">
                "{review}"
            </blockquote>
        </motion.div>
    );
};

export default Card;