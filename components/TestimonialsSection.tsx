import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    content: 'CleanSSR transformed our office space with their top-notch cleaning solutions. Their technology-driven approach ensures a spotless environment every time!',
    rating: 5,
    photo: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Michael Smith',
    content: 'As a tech startup, we needed a cleaning service that understands our fast-paced environment. CleanSSR delivers precision and reliability without fail.',
    rating: 4.5,
    photo: '/images/testimonial2.jpg',
  },
  {
    id: 3,
    name: 'Sophia Lee',
    content: 'The cleaning services provided by CleanSSR are unmatched. Their attention to detail and use of advanced technology made a huge difference in our workspace.',
    rating: 5,
    photo: '/images/testimonial3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-3xl font-bold text-purple-600 mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say About CleanSSR
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="bg-purple-50 rounded-lg p-6 m-4 shadow-lg w-80 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <img 
                src={testimonial.photo} 
                alt={${testimonial.name}'s testimonial} 
                className="rounded-full h-16 w-16 mx-auto mb-4"
              />
              <p className="text-gray-700 mb-2">{testimonial.content}</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={text-yellow-500 ${index < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}}>★</span>
                ))}
              </div>
              <p className="font-semibold text-purple-600">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;