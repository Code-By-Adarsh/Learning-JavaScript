//DOM(Document Object Model) : is a translator that turns your webpage code into an interactive tree structure that JavaScript can understand and change.

//4 pillars of DOM
//1.Selection of an element
//2.Changing html
//3.Changing CSS
//4.Event Listener

var a = document.querySelector('h1')
console.log(a)

a.innerHTML = "Hello Adarsh"

a.style.color = "yellow"
a.style.backgroundColor = "red"

a.addEventListener("click",function(){
    a.innerHTML = "RCB"
    a.style.backgroundColor = "black"
})