import React from "react";

const Reactpage = () => {
  return (
    <div style={{ overflowX: "auto", padding: "1rem" }}>
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
          <tr><td>1</td><td>&lt;html&gt;</td><td>Root element of an HTML document</td><td>&lt;html&gt;...&lt;/html&gt;</td></tr>
          <tr><td>2</td><td>&lt;head&gt;</td><td>Contains metadata and links</td><td>&lt;head&gt;...&lt;/head&gt;</td></tr>
          <tr><td>3</td><td>&lt;title&gt;</td><td>Title of the document (shown on tab)</td><td>&lt;title&gt;My Page&lt;/title&gt;</td></tr>
          <tr><td>4</td><td>&lt;meta&gt;</td><td>Metadata about the document</td><td>&lt;meta charset="UTF-8" /&gt;</td></tr>
          <tr><td>5</td><td>&lt;link&gt;</td><td>Links external resources (like CSS)</td><td>&lt;link rel="stylesheet" href="style.css" /&gt;</td></tr>
          {/* <tr><td>6</td><td>&lt;style&gt;</td><td>Internal CSS styles</td><td>&lt;style&gt;body{{`{color:red;}`}}&lt;/style&gt;</td></tr> */}
          <tr><td>7</td><td>&lt;script&gt;</td><td>Embeds JavaScript code</td><td>&lt;script&gt;alert('Hi')&lt;/script&gt;</td></tr>
          <tr><td>8</td><td>&lt;body&gt;</td><td>Page content goes here</td><td>&lt;body&gt;...&lt;/body&gt;</td></tr>
          <tr><td>9</td><td>&lt;h1&gt;</td><td>Heading level 1</td><td>&lt;h1&gt;Welcome&lt;/h1&gt;</td></tr>
          <tr><td>10</td><td>&lt;h2&gt;</td><td>Heading level 2</td><td>&lt;h2&gt;Subheading&lt;/h2&gt;</td></tr>
          <tr><td>11</td><td>&lt;h3&gt;</td><td>Heading level 3</td><td>&lt;h3&gt;Section&lt;/h3&gt;</td></tr>
          <tr><td>12</td><td>&lt;h4&gt;</td><td>Heading level 4</td><td>&lt;h4&gt;Title&lt;/h4&gt;</td></tr>
          <tr><td>13</td><td>&lt;h5&gt;</td><td>Heading level 5</td><td>&lt;h5&gt;Small title&lt;/h5&gt;</td></tr>
          <tr><td>14</td><td>&lt;h6&gt;</td><td>Heading level 6</td><td>&lt;h6&gt;Smallest heading&lt;/h6&gt;</td></tr>
          <tr><td>15</td><td>&lt;p&gt;</td><td>Paragraph</td><td>&lt;p&gt;This is text.&lt;/p&gt;</td></tr>
          <tr><td>16</td><td>&lt;br&gt;</td><td>Line break</td><td>First&lt;br /&gt;Second</td></tr>
          <tr><td>17</td><td>&lt;hr&gt;</td><td>Horizontal rule</td><td>&lt;hr /&gt;</td></tr>
          <tr><td>18</td><td>&lt;strong&gt;</td><td>Strong importance</td><td>&lt;strong&gt;Important&lt;/strong&gt;</td></tr>
          <tr><td>19</td><td>&lt;b&gt;</td><td>Bold text</td><td>&lt;b&gt;Bold&lt;/b&gt;</td></tr>
          <tr><td>20</td><td>&lt;i&gt;</td><td>Italic text</td><td>&lt;i&gt;Italic&lt;/i&gt;</td></tr>
          <tr><td>21</td><td>&lt;em&gt;</td><td>Emphasized text</td><td>&lt;em&gt;Emphasis&lt;/em&gt;</td></tr>
          <tr><td>22</td><td>&lt;u&gt;</td><td>Underlined text</td><td>&lt;u&gt;Underlined&lt;/u&gt;</td></tr>
          <tr><td>23</td><td>&lt;small&gt;</td><td>Smaller text</td><td>&lt;small&gt;Fine print&lt;/small&gt;</td></tr>
          <tr><td>24</td><td>&lt;mark&gt;</td><td>Highlighted text</td><td>&lt;mark&gt;Marked&lt;/mark&gt;</td></tr>
          <tr><td>25</td><td>&lt;del&gt;</td><td>Deleted text</td><td>&lt;del&gt;Old&lt;/del&gt;</td></tr>
          <tr><td>26</td><td>&lt;ins&gt;</td><td>Inserted text</td><td>&lt;ins&gt;New&lt;/ins&gt;</td></tr>
          <tr><td>27</td><td>&lt;a&gt;</td><td>Hyperlink</td><td>&lt;a href="https://example.com"&gt;Link&lt;/a&gt;</td></tr>
          <tr><td>28</td><td>&lt;img&gt;</td><td>Image</td><td>&lt;img src="image.jpg" alt="desc" /&gt;</td></tr>
          <tr><td>29</td><td>&lt;figure&gt;</td><td>Figure container</td><td>&lt;figure&gt;...&lt;/figure&gt;</td></tr>
          <tr><td>30</td><td>&lt;figcaption&gt;</td><td>Caption for a figure</td><td>&lt;figcaption&gt;Caption&lt;/figcaption&gt;</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reactpage;
