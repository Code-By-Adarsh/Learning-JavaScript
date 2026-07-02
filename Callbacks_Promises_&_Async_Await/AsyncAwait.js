//-------------------------------------------------
/*
--->Async-Await
async function always returns a promise

--->Syntax:
async function myFunction(){.....}

await pauses the execution of its surrounding async function until the promise is settled.
*/

//-------------------------------------------------

function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data:",dataId)
            resolve(200)
        },9000)
    })
}

async function getWeatherData() {
    let data100 = await api(100)
    console.log(data100) //200
    await api(200)
    await api(300)
    await api(400)
    await api(500)
}

let apiData = getWeatherData()  // <--------------Unneccesary call


//---------------------------------------------
//IIFE-Immediately invoked function expression
//IIFE is a function that is called immediately as soon as it is defined.

/*
function api(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data:",dataId)
            resolve(200)
        },1000)
    })
}

(async function() {
    await api(100)
    await api(200)
    await api(300)
    await api(400)
    await api(500)
})()
*/