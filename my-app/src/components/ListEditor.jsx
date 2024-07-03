import { useState } from 'react';

const ListEditor = () => {
  const [managedItems, setManagedItems] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() !== '') {
      const newItem = {
        id: Date.now(),
        content: textInput,
      };
      setManagedItems([...managedItems, newItem]);
      setTextInput('');
    }
  };

  const handleDeleteItem = (id) => {
    const updatedItems = managedItems.filter(item => item.id !== id);
    setManagedItems(updatedItems);
  };

  return (
    <div className="p-4 text-black h-screen">
      <h2 className="text-2xl mb-4 mt-4 text-center font-bold">Item Manager</h2>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <input
          type="text"
          value={textInput}
          onChange={handleTextChange}
          placeholder="Enter new item..."
          className="p-2 rounded border border-gray-300 text-cyan-600 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
          Add Item
        </button>
      </form>
      <ul className="list-disc pl-6">
        {managedItems.map(item => (
          <li key={item.id} className="mb-2">
            {item.content}
            <button onClick={() => handleDeleteItem(item.id)} className="ml-2 text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListEditor;
