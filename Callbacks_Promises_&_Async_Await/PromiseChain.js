//-------------------------------------------------
//Promise Chain
function asyncFunc(dataId){
    return new Promise((resolve,result)=>{
        setTimeout(()=>{
            console.log("Data:",dataId)
            resolve("Success")
        },5000)
    })
}

// console.log("Fetching  Data 1......")
// let p1 = asyncFunc(1)
// p1.then((result)=>{
//     console.log("Data1 fetched:",result)
//     console.log("Fetching  Data 2......")
//     let p2 = asyncFunc(2)
//     p2.then((result)=>{
//         console.log("Data2 fetched:",result)
//     })
// })

//--------------------------------------------------
//better version
// console.log("Fetching  Data 1......")
// asyncFunc(1).then((result)=>{
//     console.log("Data1 fetched:",result)
//     console.log("Fetching  Data 2......")
//     asyncFunc(2).then((result)=>{
//         console.log("Data2 fetched:",result)
//     })
// })

//------------------------------------------------
//more better version
console.log("Fetching  Data 1......")
asyncFunc(1).then((result)=>{
    console.log("Data1 fetched:",result)
    console.log("Fetching  Data 2......")
    return asyncFunc(2)
}).then((result)=>{
    console.log("Data2 fetched:",result)
    console.log("Fetching  Data 3......")
    return asyncFunc(3)
}).then((result)=>{
    console.log("Data3 fetched:",result)
    console.log("Fetching  Data 4......")
    return asyncFunc(4)
}).then((result)=>{
    console.log("Data4 fetched:",result)
    console.log("Fetching  Data 5......")
    return asyncFunc(5)
}).then((result)=>{
    console.log("Data5 fetched:",result)
})