"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ConvertedText() {
  return (
    <div className="container mx-auto p-2">
      <div className="text-xl flex justify-center">ConvertedText</div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>e</ReactMarkdown>
    </div>
  );
}
