/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(letter) {
  //without brackets new set would create an  object, not an array
  let newArray =  [...new Set(letter)];
  letter.splice(0, letter.length, ...newArray);
}

removeDuplicates(letters);
console.log(letters) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")
//but current array will never be equal to previous array even if they share same content


