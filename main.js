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
}

layouts.forEach((layout) => {
  layout.addEventListener("click", handleLayoutClick);
});

const addBook = document.querySelector(`.add-book`);
const form = document.querySelector(`form`);
const closeBtn = document.querySelector(`.close`);

const showForm = () => {
  form.style.display = "flex";
};

const hideForm = () => {
  form.style.display = "none";
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
}

window.addEventListener("click", handleWindowClick);
