import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { title: string; href: string }[];
  socialMedia: { platform: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
  return (
    <footer className="bg-white text-purple-700 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-4 md:mb-0"
        >
          <h2 className="text-2xl font-bold">{companyName}</h2>
          <p className="text-sm mt-2">Innovating cleaning solutions for a smarter tomorrow.</p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <nav className="flex flex-col md:flex-row md:space-x-5 mb-4 md:mb-0">
            {links.map((link) => (
              <motion.div
                key={link.title}
                href={link.href}
                className="text-purple-700 hover:text-purple-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link.title}
              </motion.a>
            ))}
          </nav>
          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <motion.div
                key={social.platform}
                href={social.href}
                className="text-purple-700 hover:text-purple-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                aria-label={social.platform}
              >
                <i className={`fab fa-${social.platform.toLowerCase()`}}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;