let myLibrary = [];
const form = document.querySelector(".form");

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  const author = document.querySelector('.author').value
  const title = document.querySelector('.title').value
  const pages = document.querySelector('.pages').value
  const read = document.querySelector('.read')
  const book = new Book(author, title, pages, read);

  if (title === "" || author === "" || pages === "") {
    console.log('error')
  } else {
    myLibrary.push(book);
  }
}

function render() {
  const booksctn = document.querySelector("#books-ctn");
  for (book of myLibrary) {
    booksctn.innerHTML += ` 
    <div class="col-sm-4 m-1">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${book.title} </h5>
          <p class="card-text"> ${book.title} is written by ${book.author} and it has ${book.pages} pages </p>
          <a href="#" class="btn btn-primary">read book</a>
        </div>
      </div>
    </div>
    `;
  }
}

// book1 = new Book("authur1", "test book 1", 300, true);
// addBookToLibrary(book1);

// book2 = new Book("authur2", "test book 2", 400, false);
// addBookToLibrary(book2);




form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary()
  render();
});