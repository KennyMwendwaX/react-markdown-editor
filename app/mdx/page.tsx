import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const EditorComp = dynamic(() => import("./EditorComponent"), { ssr: false });

const markdown = `
# Hi Yall
* Item 1
* Item 2
* Item 3
  * nested item

1. Item 1
2. Item 2
`;
export default function MDX() {
  return (
    <div>
      Editor:
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
  );
}
