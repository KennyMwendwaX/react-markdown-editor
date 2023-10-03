"use client";

import { Editable, useEditor } from "@wysimark/react";
import { useState } from "react";

const RichText = () => {
  const [markdown, setMarkdown] = useState("# Hello World");
  const editor = useEditor({});

  const resetMarkdown = () => {
    // reset the editor to an empty string
    editor.setMarkdown("");
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-8 mx-20">
        <button className="text-black" onClick={resetMarkdown}>
          Reset Markdown
        </button>
        <Editable
          className="h-[400px]"
          editor={editor}
          value={markdown}
          onChange={setMarkdown}
        />
      </div>
    </div>
  );
};

export default RichText;
