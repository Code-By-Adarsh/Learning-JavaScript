//Events
/*
-The change in state of an object is called an event.
Events are fired to notify code of 'interesting changes' that may affect the code execution.

-Mouse events(click, double click, etc)
-keyboard events (keypress,keyup,keydown,etc)
-form events(submit,etc)
-print even and many more

-priority order:
unlike css,
js event handling > inline event handling
*/

var a = document.querySelector("button")
console.log(a.getAttributeNames())
console.log(a.getAttribute("onclick"))

//---------------------------------------------
//Syntax for event:
/*
node.event = () =>{
    //task
    }
*/

var b = document.querySelector("#btn2")
/*
b.ondblclick = () => {
    console.log("Button was 2x times.")
}
*/

//----------------------------------------------
//Event object -> this consist the complete information about the event. For understanding in practical way we use it as a argument in event:

/*
b.onclick = (evtObj) => {
    console.log(evtObj)
}
*/

//--------------------------------------------------
//Event Listener
/*
-node.addEventListener(event,callback)
-node.removeEventListener(even,callback)

note: the callback should be same to remove
note: callback functions are function that are used as argument to another function.
*/

b.addEventListener("click",()=>{
    console.log("Button 2 was clicked - handler 1")
})

b.addEventListener("click",(evtObject)=>{
    console.log("Button 2 was clicked - handler 2")
    console.log(evtObject)
})

var handler3 = () =>{
    console.log("Button 2 was clicked - handler 3")
}

b.addEventListener("click",handler3)

//for removing the event listener
b.removeEventListener("click",handler3)

//---------------------------------------------
//lets practice
var c = document.querySelector("#btn3")
var d = document.querySelector("body")
var e = document.querySelector("h1")
var lightMode = false

c.addEventListener("click",()=>{
    if(lightMode){
        d.style.backgroundColor = "black"
        lightMode = false
        e.style.color = "white"
        e.innerText = "I Love You"
    }else{
        d.style.backgroundColor = "white"
        lightMode = true
        e.style.color = "black"
        e.innerText = "I Hate You"
    }
})

