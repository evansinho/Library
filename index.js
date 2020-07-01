let myLibrary = [];

class Book {
  constructor(author, tittle, pages, read) {
    this.author = author;
    this.tittle = tittle;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function getBooks() {
  for (book of myLibrary) {
    console.log(book.tittle);
  }
}

function render() {
  const booksctn = document.querySelector("#books-ctn");
  for (book of myLibrary) {
    booksctn.innerHTML += ` 
    <div class="col-sm-4 m-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${book.tittle} </h5>
          <p class="card-text"> ${book.tittle} is written by ${book.authur} and it has ${book.pages} pages </p>
          <a href="#" class="btn btn-primary">read book</a>
        </div>
      </div>
    </div>
    `;
  }
}

book1 = new Book("authur1", "test book 1", 300, true);
addBookToLibrary(book1);

book2 = new Book("authur2", "test book 2", 400, false);
addBookToLibrary(book2);

getBooks();

render();
