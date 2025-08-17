import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-white text-purple-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact CleanSSR</h2>
      <motion.div onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border ${errors.name ? 'border-red-500' : 'border-purple-300'} p-2 w-full rounded}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border ${errors.email ? 'border-red-500' : 'border-purple-300'} p-2 w-full rounded}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="reason" className="block mb-1">Reason for Contact</label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border border-purple-300 p-2 w-full rounded"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Service Request">Service Request</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border ${errors.message ? 'border-red-500' : 'border-purple-300'} p-2 w-full rounded}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Contact Information</h3>
        <p className="mt-2">Address: 123 Clean Tech Ave, Suite 456, Tech City, TC 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@cleanSSR.com</p>
        <p>Business Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;