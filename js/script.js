class Book {
    static idCounter = 0; // static counter shared by all Book instances

    constructor(title, author, published, publisher, genre, pages, price, currency, onShelf, language) {
        Book.idCounter++; //increment the counter for each new book
        this.id = Book.idCounter; // assign the current value of counter to this book's ID

        this.title = title;
        this.author = author;
        this.published = published;
        this.publisher = publisher;
        this.genre = genre;
        this.pages = pages;
        this.price = price;
        this.currency = currency;
        this.onShelf = onShelf;
        this.language = language;
    }

    getBookInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPublished: ${this.published}\nPublisher: ${this.publisher}\nPrice: ${this.price} ${this.currency}\nOnShelf: ${this.onShelf} `;
    }
}

const book1 = new Book("The Good Book", "Tim Minchin", 2009, "Ready Books", "History", 300, 200, "NOK", false, "english");
const book2 = new Book("Rock n Roll Nerd", "Tim Minchin", 2005, "Darkside Books", "Memoir", 777, 300, "NOK", true, "english");
const book3 = new Book("Not Perfect", "Tim Minchin", 2005, "Darkside Books", "Philosophical", 666, 450, "NOK", true, "english");
const book4 = new Book("If I Didn't Have You", "Tim Minchin", 2009, "Ready Books", "Biography", 555, 350, "NOK", true, "english");
const book5 = new Book("Inflatable You", "Tim Minchin", 2005, "Darkside Books", "Self-help", 444, 150, "NOK", false, "english");
const book6 = new Book("You Grew On Me", "Tim Minchin", 2006, "Rock Books", "True Crime", 333, 250, "NOK", true, "english");

const shelf = {
    //material properties
    material: "wood",
    color: "brown",

    //dimensions
    unit: "cm",
    width: 200,
    height: 150,
    depth: 60,

    //configuration
    numberOfShelves: 4,
    assembled: true,
    empty: false,

    //books
    books: [book1, book2, book3, book4, book5, book6],

    addBook: function(book) {
        this.books.push(book);
        return "Book added successfully!";
    },

    removeBook: function(id) {
        const originalLength = this.books.length;
        this.books = this.books.filter(book => book.id !== id);

        if (this.books.length === originalLength) {
            return "No book found with the provided ID.";
        } else if (this.books.length === 0) {
            this.empty = true;
            return "The bookshelf is empty at the moment.";
        }
        return "Book removed successfully!";
    },

    getTotalBooks: function() {
        return this.books.length;
    },

    getTotalPrice: function() {
        return this.books.reduce((total, book) => total + book.price, 0);
    }
};