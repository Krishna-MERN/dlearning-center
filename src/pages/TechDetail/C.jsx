import "./TutorialText.css";
import CodeBlock from "../../components/CodeBlock";
const C = () => {
  return (
    <div className="tutorialarea">


      <div className="tutorial-card">
        <h1 className="heading">JavaScript Tutorial</h1>


        <h2 className="subheading">What is JavaScript</h2>

        <p className="description">
          JavaScript is a programming language initially designed to interact
          with elements of web pages. Within web browsers, JavaScript consists
          of three main parts:
        </p>
        <ul className="list">
          <li>ECMAScript provides the core functionality.</li>
          <li>
            The Document Object Model (DOM) provides interfaces for interacting
            with elements on web pages
          </li>
          <li>
            The Browser Object Model (BOM) provides the browser API for
            interacting with the web browser.
          </li>
        </ul>


        <div className="note">
          Note that the following section offers a solid introduction to
          JavaScript code. If you’re not yet familiar with it, that’s perfectly
          fine. You’ll have the opportunity to learn in the upcoming tutorial.
        </div>
        <p className="description">
          To define a variable in JavaScript, you use var keyword. For example:
        </p>
        
<CodeBlock code={`var x = 10;
var y = 20;`} />

        <p className="description">
          ES6 added a new way to declare a variable with the let keyword:
        </p>
        
        <p className="description">
          There are differences between var and let. And it’s a good practice to
          use the let keyword to declare variables. To declare a function, you
          use the function keyword. The following example defines a function
          that calculates the sum of two arguments:
        </p>
     </div>
     </div>
  );
};
export default C;
