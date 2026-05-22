alert("-----Welcome to Number Guessing Game-----")
const answer = 7;
let turn = 1;
do{
    if(turn >= 2){
        var userNumber = prompt(`Chance: ${turn} [You entered wrong number] Enter your number between 1 and 10: `);
    }else{
        var userNumber = prompt(`Chance: ${turn} Enter your number between 1 and 10: `);
    }
    turn++;
}while(userNumber != answer);
console.log("ye you won");