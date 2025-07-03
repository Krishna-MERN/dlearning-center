import React from "react";
import "./TutorialCard.css";

const TutorialCard = ({
  heading,
  subheading,
  description,
  link,
  code,
  list,
  image,
}) => {
  return (
    <div className="tutorial-card">
      {heading && <h2>{heading}</h2>}
      {subheading && <h3>{subheading}</h3>}
      {description && <p>{description}</p>}
      {image && (
        <img src={image} alt={heading || "tutorial"} className="tutorial-card__image" />
      )}
      {list && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {code && (
        <pre className="tutorial-card__code">
          <code>{code}</code>
        </pre>
      )}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="tutorial-card__link">
          Learn more
        </a>
      )}
    </div>
  );
};

export default TutorialCard;
