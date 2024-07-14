// Write greet function that takes argument name
function greet(name){
    console.log(`Hello, ${name}. How are you doing today?`);
}
greet("Monika");

// write a fun ction  called getSquare and takes a no. and returns its square
let getSquare=(num=>num*num);
let num=9;
console.log(`Square of ${num}= ${getSquare(num)}`);

//Write a function called 'createCounter' that returns a function. The returned function should increment
// a counter variable each time it is called and return the current count.
function createCounter(){
    let count=0;
    return function (){
        count++;
        return count;
    };
}
const counter= createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Write a function called 'countLetters' that takes a string parameter and returns
// an object that contains a count of each letter in the string.
function countLetters(str){
    const counts={};

    for(let i=0; i<str.length; i++){
        const char=str[i];
         if(counts[char])
            counts[char]++;
        else
        counts[char]=1;
    }
    return counts;
}

console.log(countLetters("Web development"));

//Write a function called 'sumEvenNumbers' that takes an array of numbers
// as a parameter and returns the sum of all even numbers in the array.
function sumEvenNumbers(arr){

     let sum=0;
    for(let i=0; i<arr.length; i++)
        {
            if(arr[i]%2==0)
                sum+=arr[i];
         }
        return sum;
}

let arr=[2,1,9,6,4];
console.log("Sum of all even nos =",sumEvenNumbers(arr));

//Write a function that takes an array of numbers as an argument 
//and returns the sum of all the numbers in the array.
function sumArray(arr1){
    let sum=0;
    for(let i=0; i<arr.length; i++)
        {
            sum+=arr1[i];
        }
        return sum;
}
let arr1=[1,2,3,4,5];
console.log("The sum of elements in the array :",sumArray(arr1));

//Write a function that takes an array of strings as an argument and returns a new 
//array with only the strings that have a length greater than 5.
function greaterLengthString(arr){
    let newarray=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>5)
            newarray.push(arr[i]);
    }
    return newarray;
}

console.log(greaterLengthString(["Apple","Mango","Orange","Watermelon","Lichi"]));

//Write a function that takes an object and returns an array of all the keys in the object.
function keyArray(obj){
    let objKey=Object.keys(obj);
    return objKey;
}

const obj={
    name: "Monika",
    age: 20,
    marks: 92,
    grade: 'A'
};
console.log(keyArray(obj));

//Write a function that takes an array of objects and 
//returns an array of all the values of a specified property name.
function valuesArray(objArray){
    let value=[];
    for(let i=0; i<objArray.length; i++)
        {
            value[i]=objArray[i]["name"];
        }
        return  value;
}
let objArray=[{name: "Monika", age: 20},{name:"Love", age: 34},{name: "Harsh", age: 26}];
console.log(valuesArray(objArray));

//Write a function that takes an array of objects and //
//returns the object with the highest value for a specified property name
function getHighestValue(arr3, proname){

    if(arr3.length==0)
        return null;
    
    let maxobj=arr3[0];
    for(let i=1; i<arr3.length; i++){

        if(arr3[i][proname]>maxobj[proname])
            maxobj=arr3[i];
    }
    return maxobj;
}
const arr3 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
console.log(getHighestValue(arr3,"price"));