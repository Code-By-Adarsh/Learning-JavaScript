//Dom -> The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page as a hierarchical tree, allowing programming languages (like JavaScript) to interact with and modify the page's content, structure, and style dynamically.

console.log(window.document)
console.log(document)

console.log(document.head) //simple html code
console.dir(document.head) //complete directory of head

//--------------------------------->Selection of element

//Selecting by id
var a = document.getElementById("heading") //h1
console.log(a)

//selecting by class
var b = document.getElementsByClassName("header")
console.log(b) //HTMLCollection(2)
console.dir(b) //HTMLCollection(2)

//we get blank when there is no id and class present
console.log(document.getElementsByClassName('adarsh')) //HTMLCollection[]

//selecting by tagname
var c = document.getElementsByTagName("p")
console.dir(c)

//selecting by query selector
var d = document.querySelector("p") //for first element
console.dir(d)
console.log(d)

var e = document.querySelectorAll("p") //for all elements -> nodelist
console.dir(e) //nodelist[2]

var f = document.querySelector("#heading")
console.dir(f)