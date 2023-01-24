// Grid and List Layout
const layouts = document.querySelectorAll(`.layout > div`);
const bookContainer = document.querySelector(`.book-container`);
const gridBtn = document.querySelector(`.grid`);
const listBtn = document.querySelector(`.list`);
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

const handleOpacity = () => {
  if (bookContainer.classList.contains("grid")) {
    listBtn.style.opacity = "0.5";
    gridBtn.style.opacity = "1";
  } else if (bookContainer.classList.contains("list")) {
    gridBtn.style.opacity = "0.5";
    listBtn.style.opacity = "1";
  }
};
handleOpacity();

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

  handleOpacity();
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
const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

const displayBooks = (myArray) => {
  myArray.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-card");
    bookDiv.innerHTML = `
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <div class="pages">${book.pages}</div>
        `;
    if (book.status === "Read") {
      bookDiv.innerHTML += `
            <div class="rstatus">
                <img src="imgs/check.png" alt="check" class="read">
            </div>
            `;
    } else {
      bookDiv.innerHTML += `
            <div class="rstatus"></div>
            `;
    }
    bookDiv.innerHTML += `
    <button class="delete"><img src="imgs/remove.png" alt="delete"></button>
        `;
    bookContainer.appendChild(bookDiv);
  });
};

displayBooks(myLibrary);

const toggleStatus = (e) => {
  if (e.target.classList.contains("read")) {
    e.target.parentElement.innerHTML = "";
  } else if (e.target.classList.contains("rstatus")) {
    e.target.innerHTML = `
        <img src="imgs/check.png" alt="check" class="read">
        `;
  }
};

bookContainer.addEventListener("click", toggleStatus);

const bookCard = Array.from(document.querySelectorAll(".book-card"));

const deleteBook = (e, myArray) => {
  if (
    e.target.classList.contains("delete") ||
    e.target.parentElement.classList.contains("delete")
  ) {
    const book = e.target.closest(".book-card");
    book.remove();
    myArray.splice(bookCard.indexOf(book), 1);
  }
};

bookContainer.addEventListener("click", (e) => deleteBook(e, myLibrary));

const confirmAdd = document.querySelector(`.confirm`);
const addBookToLibrary = (e) => {
  e.preventDefault();
  const title = document.querySelector(`input[name="title"]`).value;
  const author = document.querySelector(`input[name="author"]`).value;
  const pages = document.querySelector(`input[name="pages"]`).value;
  const status = document.querySelector(`input[name="read"]:checked`).value;
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
  bookContainer.innerHTML = "";
  displayBooks(myLibrary);
  hideForm();
};

confirmAdd.addEventListener("click", addBookToLibrary);

// make book cards that are read go to the bottom of the list
