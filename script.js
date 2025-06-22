const form = document.querySelector("#form");
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const container = document.querySelector(".container");

let myLibrary = [];

class Book {
  constructor(name, author, pages, isRead) {
    this.id = crypto.randomUUID();
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

function displayBooks() {
  container.innerHTML = "";
  myLibrary.map((book) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3 class="title">${book.name}</h3>
      <p class="author">by ${book.author}</p>
      <p class="pages">${book.pages} pages</p>
      <p class="isread">${book.isRead ? "Completed" : "Not read now"}</p>
      <div class="actions">
        <button class="toggle-read">Toggle Read</button>
        <button class="delete-book">Delete</button>
      </div>    
    `;
    container.appendChild(div);
    const readButton = div.querySelector(".toggle-read");
    readButton.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });
  });
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
displayBooks();
