import "./TutorialText.css";
import CodeBlock from "../../components/CodeBlock";
import JavaScriptHelloWorld from "./images/JavaScript-Hello-World.png";
const Javascript = () => {
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
        <p className="description">
          JavaScript allows you to add interactivity to a web page. Typically,
          you use JavaScript with HTML and CSS to enhance a web page’s
          functionality, such as validating forms, creating interactive maps,
          and displaying animated charts. When a web page is loaded, i.e., after
          HTML and CSS have been downloaded, the JavaScript engine in the web
          browser executes the JavaScript code. The JavaScript code then
          modifies the HTML and CSS to update the user interface dynamically.
        </p>
        <h2 className="subheading">Client-side vs. Server-side JavaScript</h2>
        <p className="description">
          When JavaScript is used on a web page, it is executed in web browsers,
          serving as a client-side language. JavaScript can run on both web
          browsers and servers. A popular JavaScript server-side environment is
          Node.js. Unlike client-side JavaScript, server-side JavaScript
          executes on the server and allows you to access databases, file
          systems, etc.
        </p>

        <div className="note">
          Note that the following section offers a solid introduction to
          JavaScript code. If you’re not yet familiar with it, that’s perfectly
          fine. You’ll have the opportunity to learn in the upcoming tutorial.
        </div>
        <p className="description">
          To define a variable in JavaScript, you use var keyword. For example:
        </p>

        <CodeBlock
          code={`var x = 10;
var y = 20;`}
        />

        <p className="description">
          ES6 added a new way to declare a variable with the let keyword:
        </p>
        <CodeBlock
          code={`let x = 10;
let y = 20;`}
        />

        <p className="description">
          There are differences between var and let. And it’s a good practice to
          use the let keyword to declare variables. To declare a function, you
          use the function keyword. The following example defines a function
          that calculates the sum of two arguments:
        </p>
        <CodeBlock
          code={`function add( a, b ) {
   return a + b;
}`}
        />
        <p className="description">
          To call the add() function, you use the following syntax:
        </p>
        <CodeBlock code={`let result = add(x, y);`} />
        <p className="description">
          To log the result into the console window of the web browser or
          terminal (in the case of node.js), you use the console.log() function:
        </p>
        <CodeBlock code={`let result = add(x, y);`} />
        <p className="description">
          Now, you should see 30 in the output. JavaScript provides you with
          condition statements such as if-else and switch statements. For
          example:
        </p>
        <CodeBlock
          code={`let a = 20, 
b = 30;
function divide(a, b) {
    if(b == 0) {
       throw 'Division by zero';
    }
    return a / b;
} `}
        />
        <p className="description">
          In the divide() function, we check whether the de-numerator (b) is
          zero. If yes, we throw an exception. Otherwise, we return the result
          of a / b. To declare an array, you use the following syntax:
        </p>
        <CodeBlock code={`let items = [];`} />

        <p className="description">
          To declare an array with initial elements, you specify those elements
          within the square brackets:
        </p>
        <CodeBlock code={`let items = [1, 2, 3];`} />
        <p className="description">
          You can access the number of elements in the items array through its
          length property:
        </p>
        <CodeBlock code={`console.log(items.length); // 3`} />

        <p className="description">
          To iterate over the elements of the items array, you use the for loop
          statement as follows:{" "}
        </p>
        <CodeBlock
          code={`for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
}`}
        />

        <p className="description">
          Alternatively, you can use the for...of loop in ES6:
        </p>
        <CodeBlock
          code={`for(let item of items) {
    console.log(item);
}`}
        />

        {/* new section */}

        <h1 className="heading">JavaScript Hello World Example</h1>
        <p className="description">
          <b>Summary:</b> This tutorial helps you get started with JavaScript by
          showing you how to embed JavaScript code into an HTML page to display
          the Hello World message.
        </p>
        <h2 className="subheading">
          Creating a JavaScript Hello World project
        </h2>
        <ul className="list">
          <li>
            Step 1. Create a new project directory called helloworld to store
            the HTML and JavaScript files.
          </li>
          <li>
            Step 2. Open the helloworld project directory in your favorite code
            editor. We’ll use the VS Code.
          </li>
          <li>
            Step 3. Create a new HTML file namedindex.html inside the helloworld
            project directory with the following code:
          </li>

          <CodeBlock
            code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Hello, World!</title>
  </head>
  <body>
    <script>
      alert('Hello, World!');
    </script>
  </body>
</html>`}
          />
          <li>
            Step 4. Right-click the editor and select “Open with Live Server”.
            VS Code will start a web server and open the index.html in the
            default web browser:
          </li>
        </ul>
        <img className="image" src={JavaScriptHelloWorld} alt="JavaScript" />
        <p className="description">
          How it works. First, use the {`<script>`} element to insert JavaScript
          into the index.html file:
        </p>
        <CodeBlock
          code={`<script>
   alert('Hello, World!');
</script>`}
        />
        <p className="description">
          Second, call the alert() function to display an alert on the web
          browser:
        </p>

        <CodeBlock code={`alert('Hello, World!');`} />

        <p className="description">
          The alert() is a built-in function available on a web browser for
          displaying an alert.
        </p>

        <div className="note">
          It’s important to note that placing JavaScript code inside the{" "}
          {`<script> `}element directly in HTML is not recommended and should be
          used only for proof of concept or testing purposes.
        </div>

        <h2 className="subheading">Including an external JavaScript file</h2>
        <ul className="list">
          <li>
            Step 1. Create a new directory in the project directory called js .
            By convention, we place the JavaScript files in a directory called
            js, which stands for JavaScript.
          </li>
          <li>
            Step 2. Create a new app.js file in the js directory with the
            following code:
          </li>
          <CodeBlock cide={`alert('Hello, World!');`} />
          <li>
            Step 3. Modify the index.html to include the app.js file before the
            body closing tag:
          </li>
        </ul>
        <CodeBlock
          code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Hello, World!</title>
  </head>
  <body>
    <script src="js/app.js"></script>
  </body>
</html>`}
        />
        <h2 className="subheading">Summary</h2>
        <ul className="list">
          <li>
            Use {`<script>`} element to include a JavaScript file in an HTML
            page.
          </li>
          <li>Use alert() function to display an alert in the web browser.</li>
        </ul>

        <a
          className="link"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>

        <span className="linkLabel" onClick={() => alert("Label clicked!")}>
          Click Me
        </span>
      </div>
    </div>
  );
};
export default Javascript;
