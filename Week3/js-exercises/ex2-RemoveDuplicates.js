/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// function removeDuplicates(letter) {
//   returnletter.filter((a,b) => letter.indexOf(a) === b);
//   return [...new Set(letter)];
// }

  function removeDuplicates(letter) {
  return letter
    .sort()
    .filter((item, pos, ary) => {
      return !pos || item != ary[pos - 1];
    });
}
console.log(letters)

removeDuplicates(letters);
console.log(removeDuplicates(letters))


if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")



