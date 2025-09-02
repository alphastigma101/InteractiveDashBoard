// When you need to construct an object the best practice would be the object syntax literal
// These are not the same as classes, they are different 


let Book;

if (Book === undefined) {

    // Object literal that constructs books
    Book = {

        Author: new Array(),
        Title: new Array(),
        Published: new Array(),
        Pages: new Array(10),
        Read: new Array(10),

        AddBook: function(author, title, published) {

            if (typeof author == "string") this.Author.push(author);
            else console.log("Is not a string type!\n", "It is type ", typeof author, "\n");
            if (typeof title == "string") this.Title.push(title);
            else console.log("Is not a string type!\n", "It is type", typeof title, "\n");
            if (typeof published == "string") this.Published.push(published);
            else console.log("Is not a string type!\n", "It is type", typeof published, "\n");

        },

        AddPages: function(pages, name) {
            // We sync the pages with the author
            let match_found = false;
            if (typeof name == "string") {

                for (let i = 0; i < this.Author.length; i++) {

                    if (name == this.Author.at(i)) {

                        if (i < this.Pages.length) this.Pages[i] = pages;
                        else this.Pages.push(pages);

                        match_found = true;

                    }
                }
                if (!match_found) {

                    this.Title.forEach((literal) => {
                        if (name == literal) console.log("\t Titles does not have a page number!\n");
                    });

                    this.Published.forEach((literal) => {
                        if (name == literal) console.log("\t Publish date does not have a page number!\n");
                    });

                }
            }
            else console.log(typeof name == "string" ? 
                console.log("\t Does not exist in array", typeof pages == "string" 
                    ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof pages) : 
                console.log("\t Not a string type " + " is type " + typeof name, typeof pages == "string" 
                    ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof pages));
        },

        HaveRead: function(read, name) {

            let match_found = false;
            if (typeof read == "boolean" && typeof name == "string") {
            for (let i = 0; i < this.Author.length; i++) {
                    if (name == this.Author.at(i)) {
                        if (i < this.Read.length) this.Read[i] = read;
                        else this.Read.push(read);

                        match_found = true;

                    }
                }
                if (!match_found) {

                    this.Title.forEach((literal) => {
                        if (name == literal) console.log("\t Titles does not have a page number!\n");
                    });

                    this.Published.forEach((literal) => {
                        if (name == literal) console.log("\t Publish date does not have a page number!\n");
                    });
                }

            }
            else console.log(typeof name == "string" ? 
                console.log("\t Does not exist in array", typeof read == "boolean" 
                    ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof read) : 
                console.log("\t Not a string type " + " is type " + typeof name, typeof pages == "boolean" 
                    ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof read));

        },
        // Function that allows the user to remove the a book before it is added to the library 
        Remove: function(author, title, published) {
            // Remove the book
            if (typeof author == "string") {
                if (this.Author) {

                    const index = this.Author.findIndex((a, i) => 
                        a === author && 
                        this.Title[i] === title && 
                        this.Published[i] === published
                    );

                    if (index !== -1) {

                        this.Author.splice(index, 1);
                        this.Title.splice(index, 1);
                        this.Published.splice(index, 1);
                        this.Pages.splice(index, 1);
                        this.Read.splice(index, 1);

                        return true;

                    }
                }
            }
            
        },
        // Function that removes the book if checked out
        Remove: function(entry) {

            if (Object.prototype.toString.call(entry) === '[object Map]') {
                
                const [author] = entry.keys();
                if (this.Author) {
                    const index = this.Author.indexOf(author);
                
                    if (index !== -1) {

                        this.Author.splice(index, 1);
                        this.Title.splice(index, 1);
                        this.Published.splice(index, 1);
                        this.Pages.splice(index, 1);
                        this.Read.splice(index, 1);

                        return true;

                    }
                }
                
            }

            console.log("Entry is not a Map Type!\n ...Returning false\n");
            return false;

        },

        Print: function() {
            // Define a reusable border style
            const border = "=".repeat(40);
            
            // Print Authors Section
            console.log(`\n${border}`);
            console.log(" AUTHORS ".padStart(24, "=").padEnd(40, "="));
            console.log(`${border}\n`);
            this.Author.forEach((value, index) => {
                console.log(` • ${value.padEnd(20)} \t[Index: ${index}]`);
            });

            // Print Titles Section
            console.log(`\n${border}`);
            console.log(" TITLES ".padStart(24, "=").padEnd(40, "="));
            console.log(`${border}\n`);
            this.Title.forEach((value, index) => {
                console.log(` • ${value.padEnd(20)} \t[Index: ${index}]`);
            });

            // Print Published Years Section
            console.log(`\n${border}`);
            console.log(" PUBLICATION YEARS ".padStart(30, "=").padEnd(40, "="));
            console.log(`${border}\n`);
            this.Published.forEach((value, index) => {
                console.log(` • ${String(value).padEnd(4)} \t\t[Index: ${index}]`);
            });
            
            console.log(`\n${border}\n`);
        }
    };

    // Keep a default of books 
    Book.AddBook("Elena Whitmore", "The Silent Echo", "2018");
    Book.AddPages("5", "Elena Whitmore");
    Book.HaveRead(true, "Elena Whitmore");
    Book.AddBook("Daniel K. Hart", "Shadows of Tomorrow", "2021");
    Book.AddPages("10", "Daniel K. Hart");
    Book.HaveRead(false, "Daniel K. Hart");
    Book.AddBook("Sophia Rivers", "The Last Ember", "2019");
    Book.AddPages("20000000000000", "Sophia Rivers");
    Book.HaveRead(false, "Sophia Rivers");

    Book.AddBook("Bernie Sanders", "The Silent Shed", "2050");
    Book.AddPages("50", "Bernie Sanders");
    Book.HaveRead(true, "Bernie Sanders");
}

// Library that contains the books
class Library {

    #Entries = new Map();
    #CheckedOut = new Map();

    // Constructor that creates a Library Object
    constructor(author, title, pages, read, published) {
        if (this.#validateInput(author, title, pages, read, published)) {
            author.forEach((value, index) => {
                this.#Entries.set(value, { 
                    title: title.at(index),
                    pages: pages.at(index),
                    read: read.at(index),
                    published: published.at(index)
                });
            });
        }
        else console.log("Expecting arguments to be all arrays!\n ...Not constructing library\n");
    }

    // Function that validates the constructor's arguments 
    #validateInput(author, title, pages, read, published) {
        if (Object.prototype.toString.call(author) === '[object Array]') 
            if (Object.prototype.toString.call(title) === '[object Array]') 
                if (Object.prototype.toString.call(pages) === '[object Array]')
                    if (Object.prototype.toString.call(read) === '[object Array]') 
                        if (Object.prototype.toString.call(published) === '[object Array]') return true;
        return false;
    }
    
    // Function that prints the library 
    Print() {
        if (this.#Entries.size === 0) {
            console.log("No book entries found.");
            return;
        }

        console.log("\n📚 BOOK CATALOG 📚");
        console.log("=".repeat(40));

        this.#Entries.forEach((details, author) => {
            console.log(
                `\nAuthor:    ${author}`,
                `\nTitle:     ${details.title}`,
                `\nPublished: ${details.published}`,
                `\nRead:      ${details.read ? '✅' : '❌'}`,
                `\nPages:     ${details.pages}\n`,
                "-".repeat(40)
            );
        });

        console.log(`\nTotal Books: ${this.#Entries.size}`);
        console.log("=".repeat(40) + "\n");
    }
    
    // Get a specific Book by title
    getBook(name) {

        if (typeof name !== 'string') throw new TypeError(`Expected string for book name, got ${typeof name}`);

        for (const [author, book] of this.#Entries) {
            if (book.title === name) return new Map([[author, book]]);
        }

        throw new ReferenceError(`Book "${name}" not found in library`);

    }

    get library() {

        return this.#Entries;
    }
    
    // Remove a specific book by title
    removeBook(name) {

        if (typeof name == "string") {
            
            for (const [author, book] of this.#Entries) {
                if (book.title === name) {

                    this.#Entries.delete(author);
                    return true;

                }
            }
        }

        return true;
    }

    // Checkout a Book by title
    checkOut(name) {

        if (typeof name == "string") {
            
            for (const [author, book] of this.#Entries) {
                if (book.title === name) {

                    this.#CheckedOut.set(author, book);
                    this.#Entries.delete(author);

                    return true;
                }
            }
        }

        console.log("Book does not exist in the library!\n ...Returning False\n");
        return false;
    }

    // Return A Book by title
    returnBook(name) {

        if (typeof name == "string") {

            for (const [author, book] of this.#CheckedOut) {
                if (book.title === name) {

                    this.#Entries.set(author, book);
                    this.#CheckedOut.delete(author);
                    return true;

                }
            }

            console.log("Book does not exist in the library!\n ...Returning False\n");
            return false;

        }
        
        return true;

    }
}

const library = new Library(Book.Author, Book.Title, Book.Pages, Book.Read, Book.Published);
//library.Print();


//const book = library.getBook("The Silent Shed");

window.myLibrary = {
    Book,
    Library,
    library,
    getAllBooks: () => library.library()
};
