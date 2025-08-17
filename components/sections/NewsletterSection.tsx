import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Stay Updated with CleanSSR",
  description = "Join our mailing list for the latest technology insights and updates on CleanSSR services.",
}) => {
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic (e.g., API call)
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center p-8 bg-white text-purple-700">
      <motion.div
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {description}
      </motion.p>
      {!isSubscribed ? (
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border border-purple-500 rounded-md p-2 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <motion.div
          className="mt-4 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to CleanSSR!
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;