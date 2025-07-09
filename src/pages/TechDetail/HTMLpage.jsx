import React from "react";

const HTMLpage = () => {
  return (
   <div style={{ overflowX: "auto", padding: "1rem" }}>
    <h2>Complete HTML Tags</h2>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ margin: "0 auto", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Tag</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["1", "<html>", "Root element of an HTML document", "<html>...</html>"],
            ["2", "<head>", "Contains metadata and links", "<head>...</head>"],
            ["3", "<title>", "Title of the document (shown on tab)", "<title>My Page</title>"],
            ["4", "<meta>", "Metadata about the document", "<meta charset=\"UTF-8\" />"],
            ["5", "<link>", "Links external resources (like CSS)", "<link rel=\"stylesheet\" href=\"style.css\" />"],
            ["6", "<style>", "Internal CSS styles", "<style>body {color:red;}</style>"],
            ["7", "<script>", "Embeds JavaScript code", "<script>alert('Hi')</script>"],
            ["8", "<body>", "Page content goes here", "<body>...</body>"],
            ["9", "<h1>", "Heading level 1", "<h1>Welcome</h1>"],
            ["10", "<h2>", "Heading level 2", "<h2>Subheading</h2>"],
            ["11", "<h3>", "Heading level 3", "<h3>Section</h3>"],
            ["12", "<h4>", "Heading level 4", "<h4>Title</h4>"],
            ["13", "<h5>", "Heading level 5", "<h5>Small title</h5>"],
            ["14", "<h6>", "Heading level 6", "<h6>Smallest heading</h6>"],
            ["15", "<p>", "Paragraph", "<p>This is text.</p>"],
            ["16", "<br>", "Line break", "First<br />Second"],
            ["17", "<hr>", "Horizontal rule", "<hr />"],
            ["18", "<strong>", "Strong importance", "<strong>Important</strong>"],
            ["19", "<b>", "Bold text", "<b>Bold</b>"],
            ["20", "<i>", "Italic text", "<i>Italic</i>"],
            ["21", "<em>", "Emphasized text", "<em>Emphasis</em>"],
            ["22", "<u>", "Underlined text", "<u>Underlined</u>"],
            ["23", "<small>", "Smaller text", "<small>Fine print</small>"],
            ["24", "<mark>", "Highlighted text", "<mark>Marked</mark>"],
            ["25", "<del>", "Deleted text", "<del>Old</del>"],
            ["26", "<ins>", "Inserted text", "<ins>New</ins>"],
            ["27", "<a>", "Hyperlink", "<a href=\"https://example.com\">Link</a>"],
            ["28", "<img>", "Image", "<img src=\"image.jpg\" alt=\"desc\" />"],
            ["29", "<figure>", "Figure container", "<figure>...</figure>"],
            ["30", "<figcaption>", "Caption for a figure", "<figcaption>Caption</figcaption>"],
            ["31", "<div>", "Block-level container", "<div>Content</div>"],
            ["32", "<span>", "Inline container", "<span>Text</span>"],
            ["33", "<ul>", "Unordered list", "<ul><li>Item</li></ul>"],
            ["34", "<ol>", "Ordered list", "<ol><li>Item</li></ol>"],
            ["35", "<li>", "List item", "<li>Item</li>"],
            ["36", "<form>", "Form container", "<form>...</form>"],
            ["37", "<input>", "User input field", "<input type=\"text\" />"],
            ["38", "<textarea>", "Multi-line input", "<textarea></textarea>"],
            ["39", "<button>", "Clickable button", "<button>Click</button>"],
            ["40", "<select>", "Dropdown menu", "<select><option>1</option></select>"],
            ["41", "<option>", "Dropdown option", "<option>Choice</option>"],
            ["42", "<label>", "Label for input", "<label>Name:</label>"],
            ["43", "<fieldset>", "Group form elements", "<fieldset>...</fieldset>"],
            ["44", "<legend>", "Caption for fieldset", "<legend>Info</legend>"],
            ["45", "<table>", "Table", "<table>...</table>"],
            ["46", "<thead>", "Table header", "<thead>...</thead>"],
            ["47", "<tbody>", "Table body", "<tbody>...</tbody>"],
            ["48", "<tfoot>", "Table footer", "<tfoot>...</tfoot>"],
            ["49", "<video>", "Embed video", "<video src=\"movie.mp4\" controls></video>"],
            ["50", "<audio>", "Embed audio", "<audio src=\"sound.mp3\" controls></audio>"],
            ["51", "<main>", "Main content area", "<main>...</main>"],
            ["52", "<header>", "Header section", "<header>Site Name</header>"],
            ["53", "<footer>", "Footer section", "<footer>Copyright</footer>"],
            ["54", "<nav>", "Navigation links", "<nav><a href=\"/\">Home</a></nav>"],
            ["55", "<article>", "Self-contained content", "<article>News</article>"],
            ["56", "<section>", "Thematic section", "<section>About</section>"],
            ["57", "<aside>", "Sidebar content", "<aside>Related</aside>"],
            ["58", "<details>", "Expandable content", "<details><summary>More</summary>Info</details>"],
            ["59", "<summary>", "Summary for details", "<summary>More</summary>"],
            ["60", "<dialog>", "Dialog box", "<dialog open>Hi</dialog>"],
            ["61", "<canvas>", "Drawing surface", "<canvas id=\"myCanvas\"></canvas>"],
            ["62", "<svg>", "Vector graphics container", "<svg>...</svg>"],
            ["63", "<iframe>", "Embed other page", "<iframe src=\"https://example.com\"></iframe>"],
            ["64", "<noscript>", "Shown if JS is off", "<noscript>Please enable JS</noscript>"],
            ["65", "<template>", "HTML fragment for scripting", "<template id=\"tpl\">...</template>"],
            ["66", "<output>", "Output for form", "<output id=\"res\">0</output>"],
            ["67", "<progress>", "Progress indicator", "<progress value=\"70\" max=\"100\"></progress>"],
            ["68", "<meter>", "Scalar measurement", "<meter value=\"0.8\">80%</meter>"],
            ["69", "<abbr>", "Abbreviation", "<abbr title=\"World Health Org\">WHO</abbr>"],
            ["70", "<code>", "Code formatting", "<code>console.log()</code>"]
          ].map(([num, tag, desc, example]) => (
            <tr key={num}>
              <td>{num}</td>
              <td>{tag}</td>
              <td>{desc}</td>
              <td><code>{example}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HTMLpage;
