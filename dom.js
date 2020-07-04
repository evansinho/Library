/* eslint-disable no-plusplus */
/* global myLibrary:true, addBookToLibrary, Book, deleteBook, changeReadStatus, clearInput */

const form = document.querySelector('.form');

function render() {
  const booksctn = document.querySelector('#books-ctn');
  booksctn.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < myLibrary.length; i++) {
    booksctn.innerHTML += ` 
    <div class="col-sm-12 col-md-4 m-1"  >
      <div class="card" >
        <div class="card-body" data-id=${i}>
          <h5 class="card-title"> ${myLibrary[i].title} </h5>
          <p class="card-text"> ${myLibrary[i].title} is written by ${
  myLibrary[i].author
} and it has ${myLibrary[i].pages} pages </p>
          <p> book is ${myLibrary[i].read ? ' read' : 'unread'} </p>
          <a href="#" class="btn read btn-primary"> change read status </a> <a href="#" class="btn btn-primary delete" id="delete-${i}">delete book</a>
        </div>
      </div>
    </div>
    `;
  }
}

document.querySelector('#books-ctn').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    deleteBook(e);
    render();
  }
  if (e.target.classList.contains('read')) {
    changeReadStatus(e);
    render();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.querySelector('#bookAuthor').value;
  const title = document.querySelector('#bookTitle').value;
  const pages = document.querySelector('#bookPages').value;
  const read = document.querySelector('#bookRead').checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  clearInput();
  render();
});
