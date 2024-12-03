import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import { motion } from 'framer-motion';

const Home = ({ items, setItems }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeSound, setTypeSound] = useState(null);
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    const typeAudio = new Audio('/type-sound.mp3');
    const clickAudio = new Audio('/click-sound.mp3');
    setTypeSound(typeAudio);
    setClickSound(clickAudio);

    const handleKeyPress = () => {
      typeAudio.currentTime = 0;
      typeAudio.play();
    };

    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(inputElement => {
      inputElement.addEventListener('keypress', handleKeyPress);
    });

    return () => {
      inputElements.forEach(inputElement => {
        inputElement.removeEventListener('keypress', handleKeyPress);
      });
    };
  }, []);

  const handleAddItem = (item) => {
    setItems([...items, { text: item }]);
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditValue(items[index].text);
  };

  const handleSaveEdit = () => {
    const updatedItems = [...items];
    updatedItems[editIndex].text = editValue;
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue('');
    clickSound.currentTime = 0;
    clickSound.play();
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    clickSound.currentTime = 0;
    clickSound.play();
  };

  const filteredItems = items.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <motion.div
      className="p-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4 text-center">Item List</h1>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-gray-700 border p-2 mb-4 w-full rounded-lg placeholder-gray-400"
        />
        <AddItem onAdd={handleAddItem} />
        <ItemList items={filteredItems} onEdit={handleEditItem} onDelete={handleDeleteItem} />
        {editIndex !== null && (
          <div className="mt-4">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />
            <button onClick={handleSaveEdit} className="bg-green-500 text-white p-2 mt-2 rounded-lg hover:bg-green-600 transition duration-300 w-full">Save</button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Home;