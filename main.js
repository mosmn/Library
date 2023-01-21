function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;

const RichDadPoorDad = new Book('Rich Dad Poor Dad', 'Robert Kiyosaki', 300, 'not read yet');

console.log(RichDadPoorDad.info());
