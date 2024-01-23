"use client";

import { Editable, useEditor } from "@wysimark/react";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

export default function RichText() {
  const editor = useEditor({});
  const [markdown, setMarkdown] = useState("# Hello World");
  const resetMarkdown = () => {
    // Reset the editor to the saved markdown
    editor.setMarkdown("# Hello World");
  };
  const source = `
## MarkdownPreview

**Hello world!!!** <IFRAME SRC=\"javascript:javascript:alert(window.origin);\"></IFRAME>

a

alert("Hi yall");


<!-- test --> 123

<!-- test --> 456 <!-- test -->
`;

  return (
    <div className="bg-white min-h-screen pb-4">
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
      <div className="pt-6 mx-auto w-[950px]">
        <div className="text-3xl text-black font-semibold">
          Markdown Preview
        </div>
        <MarkdownPreview source={source} />
      </div>
    </div>
  );
}
