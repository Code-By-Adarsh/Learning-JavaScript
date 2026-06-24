//createElement()
var a = document.createElement("button")
console.log(a)
console.dir(a)

a.innerText = "Click Me!"
a.style.backgroundColor = "tomato"
a.style.padding = "10px"
a.style.border = "2px solid white"
a.style.borderRadius = "50px"
console.log(a.innerText)
console.log(a.getAttributeNames())

//Insert Elements..
//node.append(el) --> add element at the end of node(inside)
var b = document.querySelector(".anime")
b.append(a)

//node.prepend(el) --> add element at the start of node(inside)
b.prepend(a)

//console.log(b.innerHTML)

//node.before(el) --> add element before the node(outside)
b.before(a)

//node.after(el) --> add element after the node(outside)
b.after(a)
console.log(b.innerHTML)

//Deleting Element..
var c = document.querySelector("ul")
console.log(c)
console.dir(c)