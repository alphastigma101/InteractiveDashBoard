# HTML/CSS/JS Cheat Sheet

## HTML Basics

### Document Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

### Common Tags
```html
<h1> to <h6> - Headings
<p> - Paragraph
<a href="url">Link</a> - Hyperlink
<img src="image.jpg" alt="description"> - Image
<ul>, <ol>, <li> - Lists
<div> - Division/Container
<span> - Inline container
<br> - Line break
<hr> - Horizontal rule
```

### Forms
```html
<form action="/submit" method="post">
    <input type="text" placeholder="Name">
    <input type="password" placeholder="Password">
    <input type="email" placeholder="Email">
    <input type="number" placeholder="Age">
    <input type="date">
    <input type="checkbox"> Checkbox
    <input type="radio"> Radio button
    <textarea rows="4" cols="50"></textarea>
    <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

### Semantic HTML
```html
<header> - Header content
<nav> - Navigation links
<main> - Main content
<section> - Section of content
<article> - Independent content
<aside> - Sidebar content
<footer> - Footer content
```

## CSS Basics

### Selectors
```css
element - p { color: blue; }
.class - .intro { font-weight: bold; }
#id - #header { background: #fff; }
* - Universal selector
element, element - h1, h2 { margin: 0; }
element element - div p { color: red; }
element>element - div > p { color: blue; }
element+element - div + p { margin-top: 10px; }
element~element - p ~ span { color: purple; }
```

### Box Model
```css
width, height - Size of element
margin - Space outside border
padding - Space inside border
border - Border around element
box-sizing: border-box - Includes padding/border in width/height
```

### Positioning
```css
position: static | relative | absolute | fixed | sticky
top, right, bottom, left - Offset values
float: left | right | none
clear: left | right | both | none
display: block | inline | inline-block | flex | grid | none
```

### Flexbox
```css
display: flex;
flex-direction: row | row-reverse | column | column-reverse
flex-wrap: nowrap | wrap | wrap-reverse
justify-content: flex-start | flex-end | center | space-between | space-around
align-items: stretch | flex-start | flex-end | center | baseline
align-content: stretch | flex-start | flex-end | center | space-between | space-around
```

### Grid
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 100px 200px;
gap: 10px;
grid-column: 1 / 3;
grid-row: 1;
grid-area: 1 / 1 / 3 / 3;
```

### Common Properties
```css
color: #hex | rgb() | rgba() | hsl() | hsla() | name
background: color image repeat attachment position
font-family: "Arial", sans-serif
font-size: 16px | 1em | 1rem
font-weight: normal | bold | 100-900
text-align: left | right | center | justify
text-decoration: none | underline | overline | line-through
```

### CSS Position Property Cheat Sheet

| Position Value | Description |
|---------------|-------------|
| **Fixed**     | Element remains in the same position relative to the viewport even when the page is scrolled. |
| **Static**    | Default positioning method. Elements are positioned according to the normal flow of the document. |
| **Relative**  | Elements are positioned relative to their normal position in the document flow. Other elements will not fill the gap left by this element when adjusted. |
| **Absolute**  | Positioned relative to its nearest non-static ancestor. Elements with `position: absolute` are taken out of the normal document flow. |
| **Sticky**    | Combines features of `position: relative` and `position: fixed`. The element is treated as `position: relative` until it reaches a specified threshold, then it becomes `position: fixed`. |

## Example Usage

```css
.fixed-element {
  position: fixed;
  top: 0;
  left: 0;
}

.relative-element {
  position: relative;
  top: 20px;
  left: 20px;
}

.absolute-element {
  position: absolute;
  top: 50%;
  left: 50%;
}

.sticky-element {
  position: sticky;
  top: 10px;
}
```

### CSS Selector Cheat Sheet

| Selector Type    | Description | Syntax Example |
|-----------------|------------|----------------|
| **Universal**   | Selects all elements on the page | `* { property: value; }` |
| **Type**       | Selects all HTML tags/elements of given type in your document | `p { property: value; }` |
| **ID**         | Selects an element based on the value of its unique id attribute | `#id { property: value; }` |
| **Class**      | Selects all elements in the document that have the given class attribute | `.class { property: value; }` |
| **Attribute**  | Selects all elements that have a specified attribute | `a[attribute="value"] { property: value; }` |
| **Combinators** | Complex selectors consisting of more than one selector having some relationship between them | `selector1 selector2 { }` (descendant)<br>`selector1 + selector2 { }` (adjacent sibling)<br>`selector1 > selector2 { }` (child) |
| **Pseudo**     | Defines the special state of an element to add an effect to an existing element based on its states | `selector:pseudo-class {`<br>&nbsp;&nbsp;`property: value;`<br>`}` |

## Examples Of Selectors
```css
/* universal selector */
* {
    background-color: hsl(325, 63%, 82%);
    text-align: center;
}
/* type selector */
span {
    background-color: skyblue;
}
/* id selector */
#div1 {
    color: green;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
/* class selector */
.div2 {
    color: orange;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
}
/* attribute selector */
div[style] {
    text-align: center;
    color: purple;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: -20px;
}
/* combinator selector */
div>p {
    color: #009900;
    font-size: 32px;
    font-weight: bold;
    margin: 0px;
    text-align: center;
}
/* class selector */
.box {
    background-color: yellow;
    width: 300px;
    height: 100px;
    margin: auto;
    font-size: 30px;
    text-align: center;
}
/* pseudo selector */
.box:hover {
    background-color: orange;
}
```
### Pseudo-class Examples
... 

### Media Queries

> Note: **Media Queries:** The CSS Media Query is used to make the web page more responsive according to the different screens or media types. Media queries include a block of CSS only if a certain expression is true.

```css
@media screen and (max-width: 768px) {
    /* Styles for screens ≤ 768px */
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Styles for screens between 769px and 1024px */
}
```

## JavaScript Basics

### Variables
```javascript
let variableName = value; // Block-scoped
const constantName = value; // Block-scoped, immutable
var oldVariable = value; // Function-scoped (avoid)
```

### Data Types
```javascript
// Primitives
let str = "Hello"; // String
let num = 42; // Number
let bool = true; // Boolean
let nothing = null; // Null
let notDefined = undefined; // Undefined
let sym = Symbol(); // Symbol

// Objects
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let func = function() {}; // Function
```

### Operators
```javascript
// Arithmetic
+ - * / % ** ++ --

// Assignment
= += -= *= /= %= **=

// Comparison
== === != !== > < >= <=

// Logical
&& || !

// Ternary
condition ? expr1 : expr2
```

### Functions
```javascript
// Function declaration
function name(params) { return value; }

// Function expression
const name = function(params) { return value; };

// Arrow function
const name = (params) => { return value; };
const name = params => value; // Implicit return

// IIFE
(function() { /* code */ })();
```

### DOM Manipulation
```javascript
// Selecting elements
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('p');

// Modifying elements
element.textContent = 'text';
element.innerHTML = '<strong>HTML</strong>';
element.setAttribute('attr', 'value');
element.style.property = 'value';
element.classList.add('class');
element.classList.remove('class');
element.classList.toggle('class');

// Events
element.addEventListener('click', function(e) {
    console.log(e.target);
});

// Creating elements
const newEl = document.createElement('div');
parentEl.appendChild(newEl);
parentEl.removeChild(childEl);
```

### Array Methods
```javascript
arr.push(item); // Add to end
arr.pop(); // Remove from end
arr.shift(); // Remove from start
arr.unshift(item); // Add to start
arr.slice(start, end); // Subarray
arr.splice(index, count, items); // Modify array
arr.concat(arr2); // Combine arrays
arr.indexOf(item); // Find index
arr.includes(item); // Check existence
arr.find(callback); // Find item
arr.filter(callback); // Filter items
arr.map(callback); // Transform items
arr.reduce(callback); // Accumulate
arr.sort(callback); // Sort
arr.forEach(callback); // Iterate
```

### Object Methods
```javascript
Object.keys(obj); // Get keys
Object.values(obj); // Get values
Object.entries(obj); // Get key-value pairs
Object.assign(target, source); // Copy properties
Object.freeze(obj); // Make immutable
```

### ES6+ Features
```javascript
// Template literals
`String ${variable}`;

// Destructuring
const { prop } = object;
const [ first ] = array;

// Spread operator
const newArr = [...arr];
const newObj = { ...obj };

// Rest parameters
function(...args) { }

// Modules
import module from 'module';
export default thing;
export { thing };
```

### Error Handling
```javascript
try {
    // Code that may throw error
} catch (error) {
    console.error(error);
} finally {
    // Always executes
}

throw new Error('Message');
```

### Async JavaScript
```javascript
// Callbacks
function callbackExample(callback) {
    setTimeout(() => callback('Done'), 1000);
}

// Promises
new Promise((resolve, reject) => {
    if (success) resolve(value);
    else reject(error);
}).then(value => {
    // Success
}).catch(error => {
    // Error
});

// Async/Await
async function asyncFunc() {
    try {
        const result = await promise;
    } catch (error) {
        console.error(error);
    }
}
```

## Common Snippets

### HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Reset
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### Center Div
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

### Responsive Image
```css
.responsive-img {
    max-width: 100%;
    height: auto;
}
```

### Dark Mode Toggle
```javascript
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
```

### Form Validation
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) form.submit();
});

function validateForm() {
    // Validation logic
    return isValid;
}
```

### AJAX Request
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```
