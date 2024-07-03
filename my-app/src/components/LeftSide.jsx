import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

function LeftSide({ handleInsertNode, explorer, handleAddFileName }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      const enteredFileName = e.target.value.trim();
      const isFolder = showInput.isFolder;

      if (!isFolder) {
        const allowedExtensions = [".note", ".lt", ".readme", ".ed"];
        if (!allowedExtensions.some((ext) => enteredFileName.endsWith(ext))) {
          alert("Invalid file extension. Please use only '.note', '.lt', '.readme', or '.ed' extensions.");
          return;
        }
      }

      handleInsertNode(explorer.id, enteredFileName, isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const sortedItems = [...explorer.items].sort((a, b) => {
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="w-full mt-5">
      {explorer.isFolder ? (
        <>
          <div
            onClick={() => setExpand(!expand)}
            className="flex items-center justify-between w-full cursor-pointer text-gray-400 hover:text-black"
          >
            <span>📁 {explorer.name}</span>
            <div className="space-x-2">
              <button
                onClick={(e) => handleNewFolder(e, true)}
                className="text-sm text-gray-400 hover:text-black focus:outline-none"
              >
                <FontAwesomeIcon icon={faFolder} />
              </button>
              <button
                onClick={(e) => handleNewFolder(e, false)}
                className="text-sm text-gray-400 hover:text-black focus:outline-none"
              >
                <FontAwesomeIcon icon={faFile} />
              </button>
            </div>
          </div>
          <div className={`pl-5 ${expand ? "block" : "hidden"}`}>
            {showInput.visible && (
              <div className="flex items-center mt-2 text-black">
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  type="text"
                  className="ml-2 px-2 py-1 bg-gray-400 border border-gray-600 rounded-md text-sm focus:outline-none focus:border-blue-500"
                  autoFocus
                  onKeyDown={onAddFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )}
            {sortedItems.map((exp) => (
              <LeftSide
                key={exp.id}
                handleInsertNode={handleInsertNode}
                explorer={exp}
                handleAddFileName={handleAddFileName}
              />
            ))}
          </div>
        </>
      ) : (
        <span
          className="block mt-2 text-gray-400 cursor-pointer hover:text-black"
          onClick={() => handleAddFileName(explorer.name)}
        >
          📄 {explorer.name}
        </span>
      )}
    </div>
  );
}

export default LeftSide;
