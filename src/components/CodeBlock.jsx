import React from "react";
import "./styles/CodeBlock.css"; // reuse same button styles

const CodeBlock = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Code copied!"))
      .catch(() => alert("Copy failed"));
  };

  return (
    <div className="code-container">
      <button className="copy-button" onClick={handleCopy}>
        Copy
      </button>
      <pre className="code">{code}</pre>
    </div>
  );
};

export default CodeBlock;
