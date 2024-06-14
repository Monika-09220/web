// String Method in JS
// strings are immutable that means the original  string can never be changed.
let str="Monika Poddar";
let newStr=str.toUpperCase();
let newStr1=str.toLowerCase();
console.log(str);
console.log(newStr);
console.log(newStr1);
console.log(str);

let str1="    Apna College JS        ";
console.log(str1.trim()); //use for remove whitespaces.
console.log(str1);
console.log(str.slice(2,8)); // returns the part of the string.

let str2="Monika";
let str3=" Poddar";
console.log(str2.concat(str3)); // joins str3 with str2.
console.log(str2.charAt(4));
console.log(str3.replace('o','f'));  // replace the char with new value.