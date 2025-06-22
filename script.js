const form = document.querySelector("#form");
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

let myLibrary = [];

class Book {
  constructor(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(name, author, pages, isRead) {
  const book = new Book(name, author, pages, isRead);
  myLibrary.push(book);
}

function displayBooks(){

}

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
