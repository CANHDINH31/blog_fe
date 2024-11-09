import { EditorContent, useEditor } from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
import MenuBar from "./MenuBar";
import { extensions } from "../../constants/tiptapExtensions";

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    editorProps: {
      attributes: {
        class:
          "pb-20 !prose !dark:prose-invert prose-sm sm:prose-base max-w-none focus:outline-none prose-pre:bg-[#282c34] prose-pre:text-[#abb2bf]",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onDataChange(json);
    },
    content: content,
  });

  return (
    <div className="z-0 w-full">
      {editable && <MenuBar editor={editor} />}
      <div className="mt-1 rounded border border-gray-300 bg-white p-4">
        <EditorContent editor={editor} placeholder="Nhập nội dung ..." />
      </div>
    </div>
  );
};

export default Editor;
