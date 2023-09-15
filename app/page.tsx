"use client";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

export default function Home() {
  // Then register the languages you need
  hljs.registerLanguage("javascript", javascript);
  // Initialize a markdown parser
  const mdParser = new MarkdownIt(
    /* Markdown-it options */
    {
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      },
    }
  );

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    console.log("handleEditorChange", html, text);
  }
  return (
    <div className="bg-gray-50 text-black h-screen">
      <div className="text-3xl flex justify-center p-3">Markdown Editor</div>
      <div className="flex justify-center">
        <MdEditor
          style={{ height: "500px", width: "80%" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
