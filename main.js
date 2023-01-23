const layouts = document.querySelectorAll(`.layout > div`);
const bookContainer = document.querySelector(`.book-container`);

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

let labels = null;

layouts.forEach((layout) => {
  layout.addEventListener("click", (e) => {
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
  });
});
