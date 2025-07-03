import React from "react";
// import "./TechDetail.css";

const Python = () => {
  return (
    <div className="tech-detail">
      <h2>Python</h2>
    
      <p>React is a JavaScript library for building UIs.</p>
      <h3>Features</h3>
      <ul>
        <li>Component-based</li>
        <li>Declarative</li>
        <li>Virtual DOM</li>
      </ul>
      <h3>Sample Code</h3>
      <pre>
{`
import React from "react";
function Hello() {
  return <h1>Hello World</h1>;
}
`}
      </pre>
      <h3>Images</h3>
      <img src="/images/react-logo.png" alt="React Logo" style={{width: "200px"}} />
    </div>
  );
};

export default Python;
