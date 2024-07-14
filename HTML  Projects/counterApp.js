const countValue=document.querySelector('#counter');

// increment
const increment= () => {
    // fetch the value from UI
     let value =parseInt(countValue.innerText);
    // Update the value
    value+=1;
    // Set the new value onto UI
    countValue.innerText=value;
}

// decrement
const decrement= () => {
    // fetch the value from UI
     let value =parseInt(countValue.innerText);
    // Update the value
    value-=1;
    // Set the new value onto UI
    countValue.innerText=value;
}