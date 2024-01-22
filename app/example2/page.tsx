"use client";

import { Editable, useEditor } from "@wysimark/react";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function RichText() {
  const editor = useEditor({});
  const [markdown, setMarkdown] = useState("# Hello World");
  const resetMarkdown = () => {
    // Reset the editor to the saved markdown
    editor.setMarkdown(markdown);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-16 mx-48">
        <button className="text-black" onClick={resetMarkdown}>
          Reset Markdown
        </button>
        <Editable
          className="h-[400px] w-[500px]"
          editor={editor}
          value={markdown}
          onChange={setMarkdown}
        />
      </div>
      <div className="pt-6 px-6 mx-auto">
        <MarkdownPreview source={markdown} />
      </div>
    </div>
  );
}
