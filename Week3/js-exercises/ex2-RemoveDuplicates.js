/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(letter) {
  // return letter.filter((a,b) => letter.indexOf(a) === b);
  return [...new Set(letter)]
}

removeDuplicates(letters);
console.log(removeDuplicates(letters))
/*returns [ 'a', 'b', 'c', 'd', 'e', 'f' ] which is equal to if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
but I do not get "Hooray!" */


//filter method returns ['a', 'b', 'c', 'd', 'e', 'f']
//new set method returns ['a', 'b', 'c', 'd', 'e', 'f']
//answer on class chat on slack: It’s because arrays are compared as references and two arrays may be equal only if they reference the same variable.  

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")

