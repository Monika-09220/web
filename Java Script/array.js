// Arrays are mutable that means the original array can be changed.
let cities =["delhi","mumbai","jaipur","gujarat"];
for(let city of cities)
    {
        console.log(city);
    }
// Accept array with marks and find the average marks of the entire class.
let marks=[85,97,44,37,76,60];
let sum=0;
for(val of marks)
    {
        sum+=val;
    }
    console.log("Sum=",sum);

let avg=sum/marks.length;
console.log("Average=",avg);    