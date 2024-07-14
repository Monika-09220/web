// write a function taking two arguments and return their sum
function sumNumbers(a,b){
    return (a+b);
}

console.log("Sum = ", sumNumbers(8,5));

// Write a function that take an argument as string and returns its length
function stringLen(name){
    return  (name.length);
}

console.log("The length of the string is :",stringLen("Monika Poddar"));

//Takes two numbers as input and find their sum, difference, product and quotient
let num1=10;
let num2=5;

const sum=num1+num2;
const diff=num1-num2;
const product=num1*num2;
const quotient=num1/num2;
console.log(`Sum = ${sum}`);
console.log(`Difference = ${diff}`);
console.log(`Product = ${product}`);
console.log(`Quotient = ${quotient}`);

// Takes two numbers and return the larger no.
function largerNum(num1,num2){
    if(num1>num2)
        return num1;
    else
    return num2;
}
console.log("The larger no. is :",largerNum(7,12));

// Reverse String


function ReverseString(str){
    const reverseStr=str.split("").reverse().join("");
    return reverseStr;
}
console.log("The reverse of the string is :",ReverseString("Hello"));

// Takes a no. and check whether it is positive, negative or zero
function checkNum(num){
    if(num>0)
        return ("Positive");
    else if(num<0)
        return ("Negative");
    else
        return ("Zero");
}

console.log("The no. is :",checkNum(-6));

// Takes a no. and print multiplication table for that no.
function printTable(num){
    for(let i=1; i<=10; i++)
        console.log(`${num}*${i}=${num*i}`);
}
printTable(5);

// take a no. and calculate sum upto that no.
function sumOfN(num){
    let result=0;
    for(let i=1; i<=num; i++)
        result+=i;
    return result;
}
const num=10;
console.log(`The sum upto ${num} is : ${sumOfN(num)}`);

// takes a string and return no. of vowels in that string
function vowelNo(str){
    let vowels=['a','e','i','o','u'];
    let count=0;
    for(let i=0; i<str.length; i++)
        {
            if(vowels.includes(str[i].toLowerCase()))
                count++;
        }
        return count;
}

console.log("The no. of vowels in the given string is :",vowelNo("Apple"));

// takes two arrays as argument and return an array of common elements in sorted form

function findCommonElements(arr1, arr2){
      
    let common=[];
    for(let i=0; i<arr1.length; i++)
        {
            if(arr2.includes(arr1[i])){
                if(!common.includes(arr1[i]))
                    common.push(arr1[i]);
            }
            common.sort((a,b)=>a-b);  // sort elements in common array
        }
        return common;
}
// return only unique, common and sorted array
let arr1=[6,2,2,5,4];
let arr2=[5,1,3,4,4];
console.log(`The common elements are : ${findCommonElements(arr1,arr2)}`);