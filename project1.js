var a = document.querySelector("h1")

var c = document.querySelector("#button")

var count = 0

c.addEventListener("click",function(){
    count++
    a.innerHTML = count
})
