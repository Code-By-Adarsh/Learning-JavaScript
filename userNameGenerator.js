var userName = prompt("Enter your full name: ")
console.log(`Username: ${userName}`)
var suggestedUserName = `@${userName}`+userName.length
console.log("Available Username: ".concat(suggestedUserName))