import React, { useState } from "react";

export default function NoteMaker() {
  const statusOptions = ["Todo", "Doing", "Done"];

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Todo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const addNote = () => {
    if (inputValue.trim() !== "") {
      const newNote = {
        id: Date.now(),
        note: inputValue,
        status: selectedStatus,
      };
      setData([...data, newNote]);
      setInputValue("");
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id.toString());
  };

  const handleDrop = (e, targetStatus) => {
    const id = e.dataTransfer.getData("text/plain");
    const updatedData = data.map((item) =>
      item.id === parseInt(id) ? { ...item, status: targetStatus } : item
    );
    setData(updatedData);
  };

  return (
    <div className="w-full h-[94vh] bg-gray-500 flex flex-col items-center p-5">
      <input
        type="text"
        placeholder="Add a new note..."
        value={inputValue}
        onChange={handleInputChange}
        className="mt-3 p-2 border text-cyan-600 border-gray-300 rounded-md w-[300px] md:w-[400px] lg:w-[500px]"
      />
      <select
        value={selectedStatus}
        onChange={handleStatusChange}
        className="mt-3 p-2 border text-cyan-600 border-gray-300 rounded-md w-[300px] md:w-[400px] lg:w-[500px]"
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <button
        onClick={addNote}
        className="mt-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Note
      </button>
      <div className="flex-1 w-full mt-5 flex justify-center gap-4">
        {statusOptions.map((status) => (
          <div
            key={status}
            className="flex-1 flex flex-col items-center"
            onDrop={(e) => handleDrop(e, status)}
            onDragOver={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl text-white select-none">{status}</h1>
            <div
              className="flex flex-col mt-5 gap-2 w-[90%] md:w-[80%] lg:w-[70%]"
              onDragOver={(e) => e.preventDefault()}
            >
              {data
                .filter((note) => note.status === status)
                .map((note) => (
                  <div
                    key={note.id}
                    className="bg-gray-200 text-cyan-600 rounded-md shadow-lg w-full p-2 cursor-move"
                    draggable
                    onDragStart={(e) => handleDragStart(e, note.id)}
                  >
                    {note.note}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
