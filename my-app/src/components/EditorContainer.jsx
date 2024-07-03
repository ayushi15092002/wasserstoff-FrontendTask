import TextEditor from "./EditorComponents/TextEditor";
import NoteMaker from "./EditorComponents/NoteMaker";
import ListMaker from "./EditorComponents/ListMaker";
import ReadmeEditor from "./EditorComponents/ReadmeEditor";
import Default from "./EditorComponents/Default";

export const EditorContainer = ({ fileExt, key }) => {
  const ext = fileExt.split('.').pop().toLowerCase();

  const getEditorComponent = () => {
    switch (ext) {
      case "ed":
        return <TextEditor key={key} />;
      case "note":
        return <NoteMaker key={key} />;
      case "lt":
        return <ListMaker key={key} />;
      case "readme":
        return <ReadmeEditor key={key} />;
      default:
        return <Default key={key} />;
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      {getEditorComponent()}
    </div>
  );
};
