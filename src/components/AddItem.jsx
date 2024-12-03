import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="text-gray-700 border p-2 flex-grow rounded-lg placeholder-gray-400"
        placeholder="Add new item"
        maxLength="35"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300">Add</button>
    </div>
  );
};

export default AddItem;
