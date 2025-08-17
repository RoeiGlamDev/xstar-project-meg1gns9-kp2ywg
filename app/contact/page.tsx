import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <motion.div
        className="text-4xl font-bold text-purple-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        Contact CleanSSR
      </motion.h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-purple-50 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-purple-600 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          ></textarea>
        </div>

        <motion.div
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </form>

      {submitted && (
        <motion.div
          className="mt-6 text-purple-600 text-lg"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Thank you for contacting CleanSSR! We will get back to you shortly.
        </motion.p>
      )}

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Location</h2>
        <p className="text-gray-700">123 Tech Lane, Innovation City, TX 75001</p>
        
        <h2 className="text-2xl font-bold text-purple-600 mb-4 mt-8">Business Hours</h2>
        <p className="text-gray-700">Mon - Fri: 9 AM - 5 PM</p>
        <p className="text-gray-700">Sat: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sun: Closed</p>
      </section>
    </main>
  );
};

export default ContactPage;