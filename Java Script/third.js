let a=5;
let b="5";
console.log("a===b", a===b); //false
console.log("a!==b",a!==b) //true

let color;
let mode="dark-mode";
if(mode==="dark-mode"){
    color="black";
}
console.log("color=",color);

//If-Else Statement
let age=12;

if(age>=18)
{
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}

//Ternary Operator
let age1= 25;

let result= age1>=18 ? "Adult" : "Not Adult";
console.log(result);

// Multiple of 5 or not.
let num= prompt("Enter a number");
console.log("num=",num);

if(num%5===0)
{
    console.log(num," is multiple of 5");
}
else
{
    console.log(num," is not a multiple of 5");
}

// Showing Grade According to the marks.
let marks= prompt("Enter your marks");
console.log("Marks=", marks);
if(marks>=80 && marks<=100)
console.log("Grade= A");
else if(marks>=70 && marks<=79)
console.log("Grade= B");
else if(marks>=60 && marks<=69)
console.log("Grade= C");
else if(marks>=50 && marks<=59)
console.log("Grade= D")
else
console.log("Fail");