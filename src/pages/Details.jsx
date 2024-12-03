import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Details = ({ items }) => {
  const { id } = useParams();
  const item = items[id];

  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl mb-4">Item Details</h1>
      {item ? (
        <div className="p-4 border">
          <h2 className="text-xl">{item.text}</h2>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </motion.div>
  );
};

export default Details;