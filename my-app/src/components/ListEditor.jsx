import { useState } from 'react';

const ListMaker = () => {
  const [listItems, setListItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  const handleChange = (e) => {
    setNewItemText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemText.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: newItemText,
      };
      setListItems([...listItems, newItem]);
      setNewItemText('');
    }
  };

  const handleDelete = (id) => {
    const updatedList = listItems.filter(item => item.id !== id);
    setListItems(updatedList);
  };

  return (
    <div className="p-4 text-black h-screen">
      <h2 className="text-2xl mb-4 mt-4 text-center font-bold">List Maker</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={newItemText}
          onChange={handleChange}
          placeholder="Enter new item..."
          className="p-2 rounded border border-gray-300 text-cyan-600 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
          Add Item
        </button>
      </form>
      <ul className="list-disc pl-6">
        {listItems.map(item => (
          <li key={item.id} className="mb-2">
            {item.text}
            <button onClick={() => handleDelete(item.id)} className="ml-2 text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMaker;
