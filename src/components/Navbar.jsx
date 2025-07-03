import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><a href="/">DLearning Center</a></div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="https://meetkrishna.netlify.app/contact" target="_blank">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
