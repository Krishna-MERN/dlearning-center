import React from "react";
import "./styles/HeroSection.css";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="hero">
      <h2>Master Technologies Faster</h2>
      <p>Explore bite-sized, quick learning resources to boost your skills.</p>
      <div className="hero__search-container">
        <input
          type="text"
          placeholder="Search a technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="hero__search-input"
        />
      </div>
    </section>
  );
};

export default HeroSection;
