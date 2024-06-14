// create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum=25;
let userNum=prompt("Guess the game number");
while(gameNum!=userNum)
    {
        userNum=prompt("You entered wrong number. Guess again:");
    }
    console.log("Congratulations! you entered the right number");

// String in Js
let str="Monika Poddar";
console.log("Length of the string is:",str.length); 
console.log("first char:",str[0]);
console.log("second char:",str[1]);

// string Interpolation
let obj={
    item: "pen",
    price: 23,
};
// console.log("The cost of",obj.item,"is", obj.price,"rupees");
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// Template Literals
let specialString =`This is a template literal`;
console.log(typeof specialString);