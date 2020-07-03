/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const myLibrary = [];

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  if (book.title === '' || book.author === '' || book.pages === '') {
    // eslint-disable-next-line no-throw-literal
    alert('input field can not be empty');
  } else {
    myLibrary.push(book);
  }
}
