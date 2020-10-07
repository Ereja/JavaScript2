/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}
 */
const myNumbers = [1, 2, 3, 4];
//using filter to get only even numbers:
const evenNumbers = myNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
//using map to double all the numbers
const doubleEvenNumbers = evenNumbers.map((number) => number * 2);
console.log(doubleEvenNumbers);

//we could also combine filter and map together: (NOT SURE IF THIS WOULD BE APPROPRIATE WAY TO WRITE HIGHER ORDER FUNCTION???)
const evenNumbersDoubled = myNumbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenNumbersDoubled);
