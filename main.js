const layouts = document.querySelectorAll(`.layout div`);
const bookContainer = document.querySelector(`.book-container`);

layouts.forEach((layout) => {
  layout.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`grid`)) {
      if (bookContainer.classList.contains(`list`)) {
        bookContainer.classList.remove(`list`);
        bookContainer.classList.add(`grid`);
      } else {
        bookContainer.classList.add(`grid`);
      }
    } else if (e.target.classList.contains(`list`)) {
      if (bookContainer.classList.contains(`grid`)) {
        bookContainer.classList.remove(`grid`);
        bookContainer.classList.add(`list`);
      } else {
        bookContainer.classList.add(`list`);
      }
    }
  });
});
