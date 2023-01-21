function myBook(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
};

myBook.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
};

const RichDadPoorDad = new myBook("Rich Dad Poor Dad", "Robert Kiyosaki", 300, "not read yet");

console.log(RichDadPoorDad.info());
