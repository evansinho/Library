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

function addBookToLibrary(book) {
  if (book.title === "" || book.author === "" || book.pages === "") {
    console.log("error");
  } else {
    myLibrary.push(book);
  }
}

function render() {
  const booksctn = document.querySelector("#books-ctn");
  booksctn.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    booksctn.innerHTML += ` 
    <div class="col-sm-3 m-1"  >
      <div class="card" style="width: 18rem;">
        <div class="card-body" data-id=${i}>
          <h5 class="card-title"> ${myLibrary[i].title} </h5>
          <p class="card-text"> ${myLibrary[i].title} is written by ${
      myLibrary[i].author
    } and it has ${myLibrary[i].pages}  </p>
          <p> book is  ${myLibrary[i].read ? " already read" : "to read"} </p>
          <a href="#" class="btn read btn-primary"> ${
            myLibrary[i].read ? " to read" : "already read"
          } </a> <a href="#" class="btn btn-primary delete" id="delete-${i}">delete book</a>
        </div>
      </div>
    </div>
    `;
  }
}

render();

document.querySelector("#books-ctn").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement.parentElement.parentElement);
    id = e.target.parentElement.dataset.id;
    myLibrary.splice(id, 1);
    render();
  }
  if (e.target.classList.contains("read")) {
    id = e.target.parentElement.dataset.id;
    myLibrary[id].read = !myLibrary[id].read;
    if (myLibrary[id].read) {
      e.target.innerHTML = " Already read";
    } else {
      e.target.innerHTML = " To read";
    }
    render();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.querySelector("#bookAuthor").value;
  const title = document.querySelector("#bookTitle").value;
  const pages = document.querySelector("#bookPages").value;
  const read = document.querySelector("#bookRead").checked;
  const book = new Book(author, title, pages, read);
  addBookToLibrary(book);
  render();
});
