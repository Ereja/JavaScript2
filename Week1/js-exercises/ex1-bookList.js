/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
 "use strict"

function createBookList(books) {
  // your code goes in here, return the ul element
  const newUl = document.createElement('ul');
  document.querySelector('#bookList').appendChild(newUl);
  newUl.style.cssText = 'display: flex; flex-wrap: wrap;';
  const heading = document.querySelector('h1');
  heading.style.cssText = 'text-align: center; font-size: 2rem;';

  books.forEach((book) => {
    //iterate through array
    const bookTitle = book.title;
    const bookAuthor = book.author;
    const read = book.alreadyRead;

    //create elements and append them
    const newList = document.createElement('li');
    newUl.appendChild(newList);
    const newPar = document.createElement('p');
    newList.appendChild(newPar);
    const newImg = document.createElement('img');
    newImg.src = book.coverImg;
    newList.appendChild(newImg);

    //styles
    newImg.style.cssText = 'height: 350px; max-width: 300px;';
    newList.style.cssText = 'margin: 1rem; list-style: none; padding: 1rem 3rem; flex: 1;';
    newPar.style.cssText = 'font-family: monospace; text-align: center; font-size: 1.4rem';

    //adding text to paragraph
    newPar.innerText = `${bookTitle} by ${bookAuthor}`;

    //background color change
    if (read === true) {
      newList.style.backgroundColor = 'green';
    } else {
      newList.style.backgroundColor = 'red';
    }
  });
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    coverImg: './book covers/norman.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    coverImg: './book covers/christian.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    coverImg: './book covers/hunt.jpg'
  },
];

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
