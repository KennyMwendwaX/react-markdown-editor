"use client";

import { Editable, useEditor } from "@wysimark/react";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeSanitize from "rehype-sanitize";

export default function RichText() {
  const editor = useEditor({});
  const [markdown, setMarkdown] = useState("# Hello World");
  const resetMarkdown = () => {
    // Reset the editor to the saved markdown
    editor.setMarkdown("# Hello World");
  };

  // Added a plugin to sanitize the markdown
  const rehypePlugins = [rehypeSanitize];

  return (
    <div className="bg-white min-h-screen pb-4">
      <div className="pt-16 mx-48 space-y-1">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={resetMarkdown}>
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
        <MarkdownPreview
          className="border border-black rounded-xl"
          source={markdown}
          rehypePlugins={rehypePlugins}
          wrapperElement={{
            "data-color-mode": "dark",
          }}
        />
      </div>
    </div>
  );
}
