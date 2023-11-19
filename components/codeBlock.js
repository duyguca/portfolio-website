"use client";
import { CodeBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock({ code, language, showLineNumbers }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}
