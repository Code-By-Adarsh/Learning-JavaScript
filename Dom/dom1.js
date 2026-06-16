//Dom -> when a web page is loaded,the browser creates a Document Object Model (Dom) of the page.

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
console.log(b)
console.dir(b)

//we get blank when there is no id and class present
console.log(document.getElementsByClassName('adarsh'))