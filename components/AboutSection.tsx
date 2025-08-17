import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Lead Software Engineer',
    expertise: 'Cloud Solutions',
  },
  {
    name: 'Bob Smith',
    role: 'UI/UX Designer',
    expertise: 'User-Centric Design',
  },
  {
    name: 'Charlie Brown',
    role: 'Data Analyst',
    expertise: 'Big Data Technologies',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-700 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">About CleanSSR</h2>
        <p className="mb-8 text-lg text-center">
          At CleanSSR, we believe in leveraging technology to create innovative
          cleaning solutions. Our journey began with a vision to revolutionize
          the cleaning industry through the integration of smart technology and
          sustainable practices. We are committed to providing our clients with
          the best cleaning services powered by technology.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-8 text-lg text-center">
          Our mission at CleanSSR is to enhance the cleaning experience by
          utilizing advanced technology, ensuring efficiency, sustainability, and
          satisfaction. We aim to be the leading technology-driven cleaning
          service provider, setting new industry standards while prioritizing
          our clients' needs.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-4 bg-purple-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-md">{member.role}</p>
              <p className="text-sm text-gray-600">{member.expertise}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-12 mb-4">Our Values</h3>
        <p className="mb-8 text-lg text-center">
          CleanSSR stands for integrity, innovation, and excellence. We believe
          in building lasting relationships with our clients through trust and
          transparency while continuously pushing the boundaries of what is
          possible in the cleaning industry.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;