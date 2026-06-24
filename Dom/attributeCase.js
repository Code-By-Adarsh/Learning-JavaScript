var a = document.querySelector(".box")
console.log(a)
console.dir(a)

//getAttributeNames -->for taking attribute names
console.log(a.getAttributeNames())

//getAttribute("element") --> to get the value of attribute
console.log(a.getAttribute("style"))

//setAttribute("element","value") --> for changing the value of attribute
a.setAttribute("class","box1")
console.log(a.getAttribute("class")) //box1

//Style
var c = document.querySelector(".box1")
console.log(c.style)

c.style.backgroundColor = "purple"
c.style.color = "white"