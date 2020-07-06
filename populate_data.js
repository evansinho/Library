/* eslint-disable no-plusplus */
/* global myLibrary:true, addBookToLibrary, Book, render */


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

window.addEventListener('load', fetchLibrary);
window.addEventListener('unload', saveLibrary);