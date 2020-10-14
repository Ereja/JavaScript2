/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
/* Console log will display 9 as this is value of x.
Outcome of f1(x) is 10 but this is not what we are logging into console
*/

const y = {
  x: 9
};
//declaring an object y, which contains property x with value of 9

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*
f2(y) will change value of x to 10
Object y value is changed from 9 to 10 because arrays and objects are passed by refference. We are passing object as an argument to the function and it changes objects value globally.

*/