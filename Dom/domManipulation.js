//for printing tagname of an element
var a = document.querySelector("#heading")
console.log(a)
console.dir(a)
console.log(a.tagName) //h1

console.log(a.parentNode) //parent
console.log(a.childNodes) //nodelist[i]

//inner text -> return the text content of the element and all its children
var b = document.querySelector("div")
console.log(b)
console.log(b.innerText)

//inner html -> return the html content of the element and all its children
console.log(b.innerHTML)

var c = document.querySelector("#heading1")
c.innerText = "AB Devilliers"
console.log(c.innerHTML)
c.innerHTML = "<i>Rohit Sharma</i>"
console.log(b.innerHTML)

//textContent -> show the hidden text
var d = document.querySelector("#heading")
console.log(d.innerHTML) //<i>Dom with js</i>
console.log(d.innerText) // nothing
console.log(d.textContent) //Dom with js
console.log(d)

//-------------->lets practice 1
var e = document.querySelector("#practice")
console.log(e.innerText)
e.innerText = (e.innerText).concat(" from Apna College Student")
console.log(e.innerText)

//-------------->lets practice 2
var f = document.querySelectorAll(".box")
console.dir(f) //nodelist(3)
console.log(f) //nodelist(3)

console.log(f[0]) //first div

console.log(f.tagName) //undefined
console.log(f.innerHTML) //undefined
console.log(f.innerText) //undefined

console.log(f[0].tagName) //div
console.log(f[0].innerHTML) //first div
console.log(f[0].innerText) //first div

var x = 1
for(let i of f){
    console.log(i)
    i.innerHTML = `${x} number`
    x++
}