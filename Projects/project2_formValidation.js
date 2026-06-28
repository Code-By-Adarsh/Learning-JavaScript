document.getElementById("f").addEventListener("submit",(e)=>{
    e.preventDefault() //prevent unneccessary default
    var a = document.getElementById("n1").value
    var b = document.getElementById("n2").value
    var c = document.getElementById("n3").value
    var d = document.getElementById("n4").value
    var e1 = false

    if(a==""||b==""||c==""||d==""){
        alert("All fields are mandatory.")
    }else if(a.length >10 && a.length < 6){
        alert("Username field range must be between 6 and 10.")
    }else if(b.length != 10){
        alert("Contact number should be of 10 digit.")
    }else if(isNaN(b)){
        alert("Contact number should be valid")
    }else if(c != d){
        alert("Password and confirm password must be same.")
    }else{
        e1 = true
    }
    
    if(e1){
        //location.reload() //for page refresh
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        //window.location.href="dataSuccessful.html" for redirecting to next page
        console.log("Account Successfully Created!")
    }
})