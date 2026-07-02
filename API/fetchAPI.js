//---------------------------------------
/*
--->fetch API(Application Programming Interface)
the fetch API provides an interface for fetching (sending/receiving) resources.

It uses Request and Response object.

The fetch() method is used to fetch a resource(data)

Note: We use mockapi that best and great with easeness
*/

//----------------------------------------
const URL = "https://6a451b7eaab3faec3f69710b.mockapi.io/users"

const getUsers = async () =>{
    console.log("Getting users data.......")
    let response = await fetch(URL)
    console.log(response)
    console.log(response.status)
    console.log(response.body)
    let data = await response.json()
    console.log(data)
}

