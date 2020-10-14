/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

/*ANSWER:  Variable a is defined in global scope. In function we assign a new value to a and turn it into 12 (a now both in global and local scope are equal to 12). Function inside x function, alerts the new value when called and will display 12.
If we didn`t want to change global variable a from 10 to 12 but to create completely new variable with same name -  a  - inside local scope - we should have used let a = 12
*/

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();
