// When you run JavaScript in a browser, the window object represents the actual browser window (or tab) itself. It is the absolute top-level, global object where everything else lives.

// Here is a breakdown of what makes it so important:

// 1. It's the "Global" Scope
// Because it's the root object, everything you do globally in your code gets attached to it. If you create a global variable using var or a global function, they automatically become properties of the window object.

// JavaScript
// var myName = "Gemini";
// console.log(window.myName); // Outputs: "Gemini"

// function sayHi() {
//   console.log("Yo!");
// }
// window.sayHi(); // Outputs: "Yo!"
// (Note: Variables declared with let and const at the global level do not get attached to the window object, which is one reason they are safer to use!)

// 2. It Holds the DOM (Document Object Model)
// You know how you use document.querySelector or document.getElementById to change your HTML? The document is actually just a property of the window object.

// When you type document, JavaScript automatically assumes you mean window.document. It holds your entire webpage.

console.log(window)