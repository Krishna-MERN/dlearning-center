import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/TechButton.css";

const TechButton = ({ label, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tech/${label}`);
  };

  return (
    <button
      className="tech-button"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TechButton;
