"use client";

import WelcomeScreen from './Welcome';
import TextEditor from './TextEditor';
import ListMaker from './ListEditor';
import NoteMaker from './NoteEditor';
import ReadmeEditor from './ReadmeEditor';


export default function Editorbox({ fileName }) {

  const ext = fileName.split('.').pop().toLowerCase();

  const getEditorComponent = () => {
    switch (ext) {
      case "ed":
        return <TextEditor key={fileName} />;
      case "note":
        return <NoteMaker key={fileName} />;
      case "lt":
        return <ListMaker key={fileName} />;
      case "readme":
        return <ReadmeEditor key={fileName} />;
      default:
        return <WelcomeScreen key={fileName} />;
    }
  };

  return (
    <div className="w-full h-full">
      {
        fileName !== 'Explorer' && (
          <div className="w-full flex items-center justify-center bg-gray-400 rounded-md h-12">
            <p className="text-black text-lg font-bold">{fileName}</p>
          </div>
        )
      }
      {getEditorComponent()}
    </div>
  );
}
