// Prompt the user to enter their fullname. Generate a username for them based on the input. Start username 
// with @, followed by their fullname and ending with the fullname length.
//e.g fullname="Monikapoddar" , username="@Monikapoddar12".
let fullName=prompt("Enter your full name:");
let userName="@"+fullName+fullName.length;
console.log(userName);