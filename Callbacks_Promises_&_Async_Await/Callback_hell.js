//-----------------------------------------
/*
-->Callback Hell:
Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of doom)

This style of programming becomes difficult to understand & manage.
*/

//-----------------------------------------
function getData(dataId,getNextData){ //think it take 2sec for searching of data
    setTimeout(()=>{
        console.log("Data: "+dataId)
        if(getNextData){
           getNextData() 
        }
    },2000)
}

getData(4,()=>{
    getData(5,()=>{
        getData(6,()=>{
            getData(7)
        })
    })
})