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

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayBooks();
}

function displayBooks() {
  container.innerHTML = "";
  myLibrary.map((book) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3 class="title">${book.name}</h3>
      <p class="author">by <span>${book.author}</span></p>
      <p class="pages"> <span>${book.pages}</span> pages</p>
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
    const deleteButton = div.querySelector(".delete-book");
    deleteButton.addEventListener("click", () => {
      deleteBook(book.id);
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const page = document.querySelector("#pages").value;
  const author = document.querySelector("#author").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(name, author, parseInt(page, 4), read);
  displayBooks();
  form.reset();

  modal.close();
});

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
