import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="p-2 border-b flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to={`/details/${index}`} className="text-blue-500">{item.text}</Link>
          <div>
            <button onClick={() => onEdit(index)} className="bg-yellow-500 text-white p-2 mr-2 rounded-lg hover:bg-yellow-600 transition duration-300">Edit</button>
            <button onClick={() => onDelete(index)} className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300">Delete</button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ItemList;