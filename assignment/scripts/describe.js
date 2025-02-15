// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make avariable called name and have the value equal to 'Dane'.
// In the if statement, we check to see if name is true to 'Mary'
// Since name is not true to 'Mary', that code block won't execute. So the else block will run and we would get 'How do you do?' in the console.
// Also if we console.log(name); we would get Dane in the console.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret that is equal to no value.
// We created a second variable named code with the value equal to 123.
// In the first if statement we check if code is true to 123, since code is equal to 123, we set secret to 'super'. Then we are multipling code by 2, for the value of 246.
// In the second if statement, we check to see if code is greater than 250, since code equals to 246, this code block won't execute.
// We console.log secret, to get super as the output in the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created a variable named isStudent and set it a boolean of true.
// We created a second variable named age and gave it a value of 34.
// We created a  third variable named zip and have it equal to 55407.
// In the first if statement, we are checking to see if isStudent is true and if zip is greater than 8000, since zip is less than 8000, so the first code block won't run.
// In the the first else if statement, we check to see if isStudent is false or if age is less than 30. Since isStudent is set to true and the age is 34, this code block won't run.
// In the second else if statement, we check to see if isStudent equal to true, since isStudent is equal to true, this code block will run.
// We will get 'Welcome to Prime!' in the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
// FIX - colorOne = 'red', but the instructions say colorOne should be set to 'blue and colorTwo is set to 'red'.
// should be colorOne = 'blue';

let colorTwo = 'blue';
// should be  let colorTwo = 'red';

let mix = true;

if (mix === true) {
  colorOne = 'purple';
}

// In the if statement above, it is checking if mix is true and if it is, colorOne is set to 'purple', but the instructions, it's saying that if mix is true, colorOne and colorTwo are set to 'purple'.
// FIX - If we want to set colorOne and colorTwo to 'purple, we can achive this by having mix equal to purple by using a compound conditional like so:

// if (mix === true && colorOne === 'blue' && colorTwo === 'red') {
   mix = 'purple';
// } 
// console.log(mix); this will get the output of purple, since we want to mix colorOne and colorTwo to get purple
*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// The instructions say we want to check if temp is greater than 39 and time is greeater than or equal to 4, console.log('throw away the food!).
// To FIX this code block we could do the following by changing the "||" in the if statement to "&&". Also we can add an else if statment that checks
// if temp is less than 39 and time is less than 4, we can console.log('keep the food!');

// if (temp > 39 && time >=4) {
//   console.log('throw away food!');// this code block will execute with 'throw away food! in the console.
// } else if (temp < 39 && time <= 4) {
//   console.log('keep the food!');
// }
// console.log(temp);// This will output 40 in the console
/*

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// The discription say we check if age is greater than or equal to minAge, but in the code block it says, if minAge is less than or equal to age.
// To fix the code, so that we could get enter on the console, we can do the following:

// let age = 21;
// const minAge = 21;

// if (age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}


/*
// Original code
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

