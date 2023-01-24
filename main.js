// Grid and List Layout
const layouts = document.querySelectorAll(`.layout > div`);
const bookContainer = document.querySelector(`.book-container`);
let labels = null;

const createLabels = () => {
  const labels = document.createElement(`div`);
  labels.classList.add(`labels`);
  labels.innerHTML = `
    <div class="title">Title</div>
    <div class="author">Author</div>
    <div class="pages">Pages</div>
    <div class="status">Status</div>
  `;
  bookContainer.insertBefore(labels, bookContainer.firstChild);
  return labels;
};

const handleLayoutClick = (e) => {
  const layoutClass = e.target.className;
  bookContainer.classList.remove("grid", "list");
  bookContainer.classList.add(layoutClass);

  if (layoutClass === "list") {
    if (!labels) {
      labels = createLabels();
    }
  } else if (labels) {
    labels.remove();
    labels = null;
  }
};

layouts.forEach((layout) => {
  layout.addEventListener("click", handleLayoutClick);
});

// Form
const addBook = document.querySelector(`.add-book`);
const form = document.querySelector(`form`);
const closeBtn = document.querySelector(`.close`);
const container = document.querySelector(`.container`);

const showForm = () => {
  form.style.display = "flex";
  container.classList.add("form-open");
};

const hideForm = () => {
  form.style.display = "none";
  container.classList.remove("form-open");
  form.reset();
};

addBook.addEventListener("click", showForm);
closeBtn.addEventListener("click", hideForm);

const handleWindowClick = (e) => {
  if (
    e.target !== form &&
    e.target !== closeBtn &&
    e.target !== addBook &&
    !form.contains(e.target)
  ) {
    hideForm();
  }
};

window.addEventListener("click", handleWindowClick);

// Logic
const myLibrary = [{ title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, status: "Read" }, 
{ title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1216, status: "Read" },
{ title: "The Silmarillion", author: "J.R.R. Tolkien", pages: 480, status: "Read" }];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }

const displayBooks = (myArray) => {
    myArray.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.innerHTML = `
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <div class="pages">${book.pages}</div>
        <div class="status">${book.status}</div>
        `;
        bookContainer.appendChild(bookDiv);
    });
    };

displayBooks(myLibrary);
