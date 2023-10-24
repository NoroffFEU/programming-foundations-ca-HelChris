/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.

 * The item must have at least one property of each of the following `type`s:

    1. String
    2. Number
    3. Boolean
    4. Array
    5. Function


const book1 = {
    title: "The Good Book",
    author: "Tim Minchin",
    published: 2009,
    publisher: "Ready Books",
    genre: "History",
    pages: 200,
    price: 200,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const book2 = {
    title: "Rock 'n' Roll Nerd",
    author: "Tim Minchin",
    published: 2005,
    publisher: "Darkside Books",
    genre: "Memoir",
    pages: 777,
    price: 300,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const book3 = {
    title: "Not Perfect",
    author: "Tim Minchin",
    published: 2005,
    publisher: "Darkside Books",
    genre: "Philosophical",
    pages: 666,
    price: 450,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const book4 = {
    title: "If I Didn't Have You",
    author: "Tim Minchin",
    published: 2009,
    publisher: "Ready Books",
    genre: "Biography",
    pages: 555,
    price: 350,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const book5 = {
    title: "Inflatable You",
    author: "Tim Minchin",
    published: 2005,
    publisher: "Darkside Books",
    genre: "Self-help",
    pages: 444,
    price: 150,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const book6 = {
    title: "You Grew On Me",
    author: "Tim Minchin",
    published: 2006,
    publisher: "Rock Books",
    genre: "True Crime",
    pages: 333,
    price: 250,
    currency: "NOK",
    available: true,
    language: "english",
// Adding a method to display book information in a formatted manner
    getBookInfo: function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

const shelf = {
    //material properties
    material: "wood",
    color: "brown",

    //Dimensions
    unit: "cm",
    width: 200,
    height: 150,
    depth: 60,

    //Configuration
    numberOfShelves: 4, //specifies the number of individual shelves
    assembled: true, //indicates if the shelf is already assembled

    //Books stored on the shelf
    books: [book1, book2, book3, book4, book5, book6], // Initially, the shelf has six books

    //Method to add a book to the shelf
    addBook: function(book) {
        this.books.push(book);
    },

    //Method to remove a book from the shelf by title
    removeBook: function(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
};

*/

// -----------------------------------

// Book constructor
class Book {
    static idCounter = 0; // static counter shared by all Book instances

    constructor(title, author, published, publisher, genre, pages, price, currency, available, language) {
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
        this.available = available;
        this.language = language;
    }
    //Adding a method to display book information in a formatted manner
    getBookInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price} ${this.currency}`;
    }
}

//create book instances
const book1 = new Book("The Good Book", "Tim Minchin", 2009, "Ready Books", "History", 300, 200, "NOK", true, "english");
const book2 = new Book("Rock n Roll Nerd", "Tim Minchin", 2005, "Darkside Books", "Memoir", 777, 300, "NOK", true, "english");
const book3 = new Book("Not Perfect", "Tim Minchin", 2005, "Darkside Books", "Philosophical", 666, 450, "NOK", true, "english");
const book4 = new Book("If I Didn't Have You", "Tim Minchin", 2009, "Ready Books", "Biography", 555, 350, "NOK", true, "english");
const book5 = new Book("Inflatable You", "Tim Minchin", 2005, "Darkside Books", "Self-help", 444, 150, "NOK", true, "english");
const book6 = new Book("You Grew On Me", "Tim Minchin", 2006, "Rock Books", "True Crime", 333, 250, "NOK", true, "english");

const shelf = {
    //material properties
    material: "wood",
    color: "brown",

    //Dimensions
    unit: "cm",
    width: 200,
    height: 150,
    depth: 60,

    //Configuration
    numberOfShelves: 4,
    assembled: true,
    empty: false,

    //Books stored on the shelf
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

