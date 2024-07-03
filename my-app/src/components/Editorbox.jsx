"use client";
import { EditorContainer } from "./EditorContainer";

export default function Editorbox({ fileName, setFileName }) {
  return (
    <div className="w-full h-full">
      {
        fileName !== 'Explorer' && (
          <div className="w-full flex items-center justify-center bg-gray-400 rounded-md h-12">
            <p className="text-black text-lg font-bold">{fileName}</p>
          </div>
        )
      }
      <EditorContainer key={fileName} fileExt={fileName} />
    </div>
  );
}
