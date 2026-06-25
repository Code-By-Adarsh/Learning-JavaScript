//------------------->lets practice 1
var a = document.createElement("button")
a.innerText = "Click Me"
a.style.backgroundColor = "red"
a.style.color = "white"

document.querySelector("body").prepend(a)
console.log(document.body)

//------------------->lets practice 2
var b = document.querySelector("p")
b.setAttribute("class","para newPara myPara")
console.log(b.innerHTML)
console.log(b.getAttribute("class"))

//for viewing through classList
console.log(b.classList) //DOMTokenList(3) ['para', 'newPara', 'myPara', value: 'para newPara myPara']

//for removing the class through classList
b.classList.remove("newPara")
console.log(b.getAttribute("class"))
console.log(b.classList) //DOMTokenList(2) ['para', 'myPara', value: 'para myPara']

//for adding the class through classList
b.classList.add("newPara")
console.log(b.getAttribute("class"))
console.log(b.classList) //DOMTokenList(3) ['para', 'myPara', 'newPara', value: 'para myPara newPara']