import React from "react";
import "./styles/CopyButton.css"; // you can use same button styles

const CopyButton = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Code copied!"))
      .catch(() => alert("Copy failed"));
  };

  return (
    <button className="copy-button" onClick={handleCopy}>
      Copy
    </button>
  );
};

export default CopyButton;
