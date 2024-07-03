"use client";
import { useState } from "react";
import Editorbox from "@/components/Editorbox";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  const explorer = {
    id: "1",
    name: "Explorer",
    isFolder: true,
    items: []
  };
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileName, setFileName] = useState("Explorer");

  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.push({
        id: Math.random().toString(36).substr(2, 9),
        name: item,
        isFolder,
        items: [],
        content: isFolder ? [] : '',
      });
      return tree;
    }

    let updatedItems = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: updatedItems };
  };

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleAddFileName = (name) => {
    setFileName(name);
  };

  return (
    <>
      <div className="w-full bg-white  flex flex-col lg:flex-row h-screen">
        <div className="bg-white lg:flex-2 border-r border-gray-700 px-5 lg:px-5 flex-shrink-0 lg:w-1/5 w-full lg:h-full overflow-auto shadow-lg">
          <LeftSide
            handleInsertNode={handleInsertNode}
            explorer={explorerData}
            handleAddFileName={handleAddFileName}
          />
        </div>
        <div className="bg-white lg:flex-1 w-full h-full overflow-auto p-4">
          <Editorbox fileName={fileName} />
        </div>
      </div>
    </>
  );
}
