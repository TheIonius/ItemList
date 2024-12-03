import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gray-800 p-4 flex justify-between items-center"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-white">Home</Link>
      <div className="flex space-x-4">
        <Link to="/signup" className="text-white p-2 rounded-lg shadow-md hover:text-blue-500 transition duration-300">Sign Up</Link>
        <Link to="/login" className="text-white p-2 rounded-lg shadow-md hover:text-green-500 transition duration-300">Log In</Link>
        <DarkModeToggle />
      </div>
    </motion.nav>
  );
};

export default Navbar;