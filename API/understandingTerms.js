//---------------------------------------------
/*
--->AJAX : is asynchronous js and xml
--->JSON : is javascript object notation
---> json() method : returns a second promise that resolves with the result of parsing the response body text as JSON.(Input is JSON output is js object)
*/

//----------------------------------------
//by using async-await
const URL = "https://6a451b7eaab3faec3f69710b.mockapi.io/users"
const button = document.querySelector("button")
const box = document.querySelector(".box")
const getUsers = async() =>{
    console.log("Getting users data.......")
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    button.addEventListener("click",()=>{
        box.innerText = JSON.stringify(data[0])
    })
    console.log(data[0])
}

//--------------------------------------------------
//by using promises
/*
fetch(URL).then((response)=>{
    return response.json()
}).then((user1Data)=>{
    console.log(user1Data)
})
*/