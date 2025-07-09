import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import TechButton from "../components/TechButton";
import "./styles/Home.css";
import CommentForm from "../components/CommentForm";

const technologies = [
  {  name: "Reactpage", color: "#61DAFB" },
  { name: "ComputerShortcuts", color: "#f89820" },
  { name: "VScodeshortcut", color: "#3776AB" },
  { name: "Express", color: "#3C873A" },
  { name: "ES6", color: "#4DB33D" },
  { name: "MATLAB", color: "#E34C26" },
  { name: "KUBERNETS", color: "#264de4" },

  { name: "C", color: "#61DAFB" },
  { name: "Nodejs", color: "#61DAFB" },
    { name: "INI", color: "#3776AB" },
    { name: "LaTeX", color: "#3C873A" },
    { name: "Rust", color: "#4DB33D" },
    { name: "C#", color: "#E34C26" },
    { name: "Laravel", color: "#264de4" },

    { name: "Dart", color: "#61DAFB" },
    { name: "JSON", color: "#f89820" },
    { name: "HTMLpage", color: "#3776AB" },
    { name: "GrapgQL", color: "#3C873A" },
    { name: "C++", color: "#4DB33D" },
    { name: "Java", color: "#E34C26" },
    { name: "PHP", color: "#264de4" },

    { name: "Docker", color: "#61DAFB" },
    { name: "TOML", color: "#f89820" },
    { name: "YAML", color: "#3776AB" },
    { name: "CSS3", color: "#3C873A" },
    { name: "jQuery", color: "#4DB33D" },
    { name: "JavaScript", color: "#E34C26" },
    { name: "Python", color: "#264de4" },

    { name: "Sass", color: "#61DAFB" },
    { name: "Go", color: "#f89820" },
    { name: "Golong", color: "#3776AB" },
    { name: "Markdown", color: "#3C873A" },
    { name: "JavaScript", color: "#E34C26" },
    { name: "Python", color: "#264de4" },
  
];


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTechs = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
   <h1 textAlign="center">Programming Languages /ToolKit / Shortcut / Database / Other</h1>
      <section className="tech-buttons-grid">
        {filteredTechs.map((tech) => (
          <TechButton
            key={tech.name}
            label={tech.name}
            color={tech.color}
          />
        ))}
        {filteredTechs.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No technology found.
          </p>
        )}
      
      </section>
      <CommentForm />
    </>
  );
};

export default Home;
