for(let i=1; i<=5; i++)
    {
        console.log("Monika, you are best.");
    }
    // for-of loop(It is used to print indivisible char in the string)
    let str="MonikaPoddar";

 for(let ch of str)
     {
       console.log(ch);
     }

 // for-in loop(It is used to print indivisible key of an object)
  let student={
    name: "Monika Poddar",
    age: 20,
    cgpa: 9.5,
    isPass: true
  };

//   for(let i in student)
//     {
//         console.log(i);
//     }
for(let key in student)
    {
        console.log("key=",key, " value=", student[key]);
    }

//Print all even numbers from 0 to 100.
for(let i=0; i<=100; i++)
    {
        if(i%2==0)
            console.log(i);
    }