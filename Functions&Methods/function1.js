//function -> function are the block of code that performs a specific task, can be invoked whenever needed

//function declaration
// function func_name(){
//     part of code
// }

function walk(){
    console.log("Chal rha hu")
}

//function calling
//func_name()

walk()

//-----------------------------------

//parameter ->a variable used at the time of func decelaration
//argument ->a real value passed during the function calling

function goodMorning(personName,dayName){
    console.log(`Hi! ${personName}, Good Morning`)
    console.log("How are you?")
    console.log(`What's your plan for this ${dayName}`)
}

goodMorning("Amit","Sunday");

//------------------------------------

//return ->used in function for returning any value it is the value of function
function hike(salary){
    finalSalary = salary + salary*50/100
    return finalSalary
    console.log("code does not work after return keyword")
}

console.log("Your final salary after 50% increment: "+hike(17676))


//------------------------------
//Arrow type function ->compact way of writing function
const prupose = function(loveName){
    console.log("I love you",loveName)
}

const prupose1 = (loveName) =>{
    console.log("I love you to",loveName)
}

prupose("Rony")
prupose1("Adarsh")

//----------------------------------
//lets practice 1

function countVowels(userInput){
    var noOfVowels = 0
    var user = userInput
    var vowels = ["a","e","i","o","u"]
    for(let word of user){
        for(let vowel of vowels){
            if(word.toLowerCase() == vowel){
                noOfVowels++
            }
        }
    }

    console.log(`Number of vowels ${userInput} is: ${noOfVowels}`)
}

countVowels("Adarsh")