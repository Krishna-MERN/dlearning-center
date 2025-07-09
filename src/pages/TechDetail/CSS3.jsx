import React from "react";

const CSS3 = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>CSS Complete Tutorial</h1>

      <section>
        <h2>1. Introduction to CSS</h2>
        <p>
          CSS (Cascading Style Sheets) is used to style and layout web pages — for example,
          to alter the font, color, size, and spacing of your content, split it into multiple
          columns, or add animations and other decorative features.
        </p>
      </section>

      <section>
        <h2>2. Types of CSS</h2>
        <ul>
          <li><strong>Inline CSS:</strong> Applied directly within an element using the <code>style</code> attribute.</li>
          <li><strong>Internal CSS:</strong> Defined within a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</li>
          <li><strong>External CSS:</strong> Linked via a separate .css file using the <code>&lt;link&gt;</code> tag.</li>
        </ul>
      </section>

      <section>
        <h2>3. CSS Syntax</h2>
        <pre>
{`selector {
  property: value;
}`}
        </pre>
        <p>Example:</p>
        <pre>
{`p {
  color: red;
  font-size: 16px;
}`}
        </pre>
      </section>

      <section>
        <h2>4. Selectors</h2>
        <ul>
          <li><strong>Universal Selector:</strong> <code>*</code></li>
          <li><strong>Element Selector:</strong> <code>p</code>, <code>h1</code>, etc.</li>
          <li><strong>Class Selector:</strong> <code>.classname</code></li>
          <li><strong>ID Selector:</strong> <code>#idname</code></li>
          <li><strong>Group Selector:</strong> <code>h1, p</code></li>
          <li><strong>Attribute Selector:</strong> <code>input[type="text"]</code></li>
        </ul>
      </section>

      <section>
        <h2>5. CSS Properties</h2>
        <ul>
          <li><strong>Color:</strong> <code>color</code>, <code>background-color</code></li>
          <li><strong>Text:</strong> <code>font-size</code>, <code>font-family</code>, <code>text-align</code></li>
          <li><strong>Box Model:</strong> <code>margin</code>, <code>padding</code>, <code>border</code></li>
          <li><strong>Display & Position:</strong> <code>display</code>, <code>position</code>, <code>top/right/bottom/left</code></li>
          <li><strong>Flexbox/Grid:</strong> <code>display: flex</code>, <code>display: grid</code></li>
        </ul>
      </section>

      <section>
        <h2>6. Box Model</h2>
        <p>Every HTML element can be considered as a box with:</p>
        <ul>
          <li><strong>Content</strong> - The actual content of the box</li>
          <li><strong>Padding</strong> - Clears an area around the content</li>
          <li><strong>Border</strong> - A border around the padding</li>
          <li><strong>Margin</strong> - Clears an area outside the border</li>
        </ul>
      </section>

      <section>
        <h2>7. Flexbox</h2>
        <p>Flexbox is a CSS layout model that allows responsive alignment of elements.</p>
        <pre>
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
        </pre>
      </section>

      <section>
        <h2>8. CSS Grid</h2>
        <p>Grid is a two-dimensional layout system for the web.</p>
        <pre>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}
        </pre>
      </section>

      <section>
        <h2>9. Media Queries</h2>
        <p>Used for responsive design:</p>
        <pre>
{`@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
        </pre>
      </section>

      <section>
        <h2>10. Animations</h2>
        <pre>
{`@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.box {
  animation: slide 2s infinite;
}`}
        </pre>
      </section>

      <footer style={{ marginTop: "2rem", textAlign: "center", color: "gray" }}>
        <p>© 2025 CSS Tutorial by YourName</p>
      </footer>
    </div>
  );
};

export default CSS3;
