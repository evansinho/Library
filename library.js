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
  if (book.title === "" || book.author === "" || book.pages === "") {
    // eslint-disable-next-line no-throw-literal
    throw "error";
  } else {
    myLibrary.push(book);
  }
}
