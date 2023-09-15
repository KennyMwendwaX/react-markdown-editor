import ConvertedText from "@/components/ConvertedText";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <div className="bg-gray-50 text-black">
      <div className="text-3xl flex justify-center p-3">
        React Markdown Editor
      </div>
      <div className="grid grid-cols-2 h-screen">
        <Editor />
        <ConvertedText />
      </div>
    </div>
  );
}
