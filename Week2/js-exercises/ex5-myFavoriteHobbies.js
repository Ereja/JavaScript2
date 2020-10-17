/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

  

function createHTMLList(arr) {
  const unorderedList = document.querySelector('ul');
  arr.forEach(hobby => {
    const list = document.createElement('li');
    unorderedList.appendChild(list);
    list.innerText = hobby;
  })
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies);