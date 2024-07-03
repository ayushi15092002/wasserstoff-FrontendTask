import { useState } from 'react';

export default function TextEditor() {
  const [text, setText] = useState('Welcome to Text Editor');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleBold = () => {
    setText(`**${text}**`); // Using Markdown syntax for bold
  };

  const handleItalic = () => {
    setText(`*${text}*`); // Using Markdown syntax for italic
  };

  const handleClearFormatting = () => {
    setText(text.replace(/\*\*|\*|_/g, '')); // Remove markdown syntax for bold and italic
  };

  const handleButtonClick = (action) => {
    switch (action) {
      case 'handleClear':
        handleClear();
        break;
      case 'handleUpperCase':
        handleUpperCase();
        break;
      case 'handleLowerCase':
        handleLowerCase();
        break;
      case 'handleBold':
        handleBold();
        break;
      case 'handleItalic':
        handleItalic();
        break;
      case 'handleClearFormatting':
        handleClearFormatting();
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-[94vh] p-6 bg-gray-500 relative">
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        className="w-full h-[80vh] p-2 text-black bg-white border border-gray-700 rounded-lg mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap justify-end gap-2 mt-1 mb-1">
        <button
          onClick={() => handleButtonClick('handleClear')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear
        </button>
        <button
          onClick={() => handleButtonClick('handleUpperCase')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          UpperCase
        </button>
        <button
          onClick={() => handleButtonClick('handleLowerCase')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          LowerCase
        </button>
        <button
          onClick={() => handleButtonClick('handleBold')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Bold
        </button>
        <button
          onClick={() => handleButtonClick('handleItalic')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Italic
        </button>
        <button
          onClick={() => handleButtonClick('handleClearFormatting')}
          className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear Formatting
        </button>
      </div>
    </div>
  );
}
