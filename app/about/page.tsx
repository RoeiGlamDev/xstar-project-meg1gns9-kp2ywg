import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', position: 'CEO', image: '/images/alice.jpg' },
  { name: 'Bob Smith', position: 'CTO', image: '/images/bob.jpg' },
  { name: 'Charlie Brown', position: 'COO', image: '/images/charlie.jpg' },
];

const CleanSSR: React.FC = () => {
  return (
    <div className="bg-white text-purple-800">
      <header className="p-6">
        <h1 className="text-4xl font-bold text-center mb-4">About CleanSSR</h1>
        <p className="text-center text-lg">
          CleanSSR is at the forefront of technology-driven cleaning solutions,
          providing innovative services that ensure cleanliness and efficiency.
        </p>
      </header>
      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Founded in 2021, CleanSSR emerged from the need for sustainable and
            technologically advanced cleaning solutions. Our journey began with
            a vision to transform the cleaning industry through innovation,
            leveraging cutting-edge technology to deliver unparalleled service.
          </motion.p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <motion.div
            className="list-disc list-inside text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>Integrity: We uphold the highest standards in our services.</li>
            <li>Innovation: Continually evolving with technology to serve you better.</li>
            <li>Sustainability: Committed to eco-friendly practices in cleaning.</li>
            <li>Customer-Centric: Your satisfaction is our priority.</li>
          </motion.ul>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-2">{member.name}</h3>
                <p className="text-lg text-purple-600">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CleanSSR;