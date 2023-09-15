"use client";

import ReactMarkdown from "react-markdown";

export default function ConvertedText() {
  return (
    <div className="container mx-auto p-2">
      <div className="text-xl flex justify-center">ConvertedText</div>
      <ReactMarkdown># **Hello**, *world*!</ReactMarkdown>
    </div>
  );
}
