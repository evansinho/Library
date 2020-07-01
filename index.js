/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const myLibrary = [];
const form = document.querySelector('.form');
window.addEventListener('load', fetchLibrary);
window.addEventListener('unload', saveLibrary);

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
    throw 'error';
  } else {
    myLibrary.push(book);
  }
}

function render() {
  const booksctn = document.querySelector('#books-ctn');
  booksctn.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < myLibrary.length; i++) {
    booksctn.innerHTML += ` 
    <div class="col-sm-12 col-md-3 m-1"  >
      <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${i}>
          <h5 class="card-title"> ${myLibrary[i].title} </h5>
          <p class="card-text"> ${myLibrary[i].title} is written by ${
  myLibrary[i].author
} and it has ${myLibrary[i].pages} pages </p>
          <p> book is  ${myLibrary[i].read ? ' already read' : 'to read'} </p>
          <a href="#" class="btn read btn-primary"> ${
  myLibrary[i].read ? ' to read' : 'already read'
} </a> <a href="#" class="btn btn-primary delete" id="delete-${i}">delete book</a>
        </div>
      </div>
    </div>
    `;
  }
}

function clearInput() {
  document.querySelector('#bookAuthor').value = '';
  document.querySelector('#bookTitle').value = '';
  document.querySelector('#bookPages').value = '';
  document.querySelector('#bookRead').checked = false;
}

document.querySelector('#books-ctn').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete')) {
    const { id } = e.target.parentElement.dataset;
    myLibrary.splice(id, 1);
    render();
  }
  if (e.target.classList.contains('read')) {
    id = e.target.parentElement.dataset.id;
    myLibrary[id].read = !myLibrary[id].read;
    if (myLibrary[id].read) {
      e.target.innerHTML = ' Already read';
    } else {
      e.target.innerHTML = ' To read';
    }
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

function populateStorage() {
  const bookOne = ['Budapeste', 'Chico Buarque de Holanda', 174, true];
  const bookTwo = [
    'Will my cat eat my eyeballs?',
    'Caitlin Doughty',
    222,
    true,
  ];
  const bookThree = ['The Time Machine', 'H.G. Wells', 118, true];
  localStorage.setItem('book1', JSON.stringify(bookOne));
  localStorage.setItem('book2', JSON.stringify(bookTwo));
  localStorage.setItem('book3', JSON.stringify(bookThree));
}

function fetchLibrary() {
  // If it is the first time entering the site, creates a storage with predetermined books
  if (!localStorage.getItem('book1')) populateStorage();

  for (let i = 1; i <= localStorage.length; i++) {
    const bookArr = JSON.parse(localStorage.getItem(`book${i}`));
    const book = new Book(bookArr[0], bookArr[1], bookArr[2], bookArr[3]);
    addBookToLibrary(book);
    render();
  }
}

function saveLibrary() {
  localStorage.clear();

  let i = 1;
  myLibrary.forEach((book) => {
    localStorage.setItem(`book${i}`, JSON.stringify(Object.values(book)));
    i++;
  });
}
