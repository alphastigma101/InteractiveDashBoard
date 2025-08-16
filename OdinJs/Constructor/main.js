// When you need to construct an object the best practice would be the object syntax literal
// These are not the same as classes, they are different 


// Object literal that constructs books
const Book = {
    Size: 10,
    Author: new Array(Size),
    Title: new Array(Size),
    Published: new Array(Size),
    Pages: new Array(Size),
    Read: new Array(Size),
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
        if (typeof name == "string") {
            this.Author.forEach((literal, index) => {
                if (name == literal) this.Pages[index] = pages;
            });
            this.Title.forEach((literal) => {
                if (name == literal) console.log("\t Titles does not have a page number!\n");
            });
            this.Published.forEach((literal) => {
                if (name == literal) console.log("\t Publish date does not have a page number!\n");
            });
        }
        else console.log(typeof name == "string" ? 
            console.log("\t Does not exist in array", typeof pages == "string" 
                ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof pages) : 
            console.log("\t Not a string type " + " is type " + typeof name, typeof pages == "string" 
                ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof pages));
    },
    HaveRead: function(read, name) {
        if (typeof read == "bool" && typeof name == "string") {
            this.Author.forEach((literal, index) => {
                if (name == literal) this.Read[index] = read;
            });
            this.Title.forEach((literal) => {
                if (name == literal) console.log("\t Titles does not have a page number!\n");
            });
            this.Published.forEach((literal) => {
                if (name == literal) console.log("\t Publish date does not have a page number!\n");
            });

        }
        else console.log(typeof name == "string" ? 
            console.log("\t Does not exist in array", typeof read == "bool" 
                ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof read) : 
            console.log("\t Not a string type " + " is type " + typeof name, typeof pages == "bool" 
                ? "\t pages must be type string, which it is\n" : "\t pages is not string type! it is type " + typeof read));

    },
    Remove: function(author, title, published) {
        if (typeof author == "string") {
            for (let i = 0; i < this.Author.length; i++) {
                if (this.Author.at(i) == author) this.Author[i] = "";
            }
        }
        else console.log(typeof author == "string" ? "\t It is type string, but it does not exist in array\n" : "\t is not string type!\n", "It is Type" + typeof author, "\n");
        if (typeof title == "string") {
            for (let i = 0; i < this.Title.length; i++) {
                if (this.Title.at(i) == title) this.Title[i] = "";
            }
        }
        else console.log(typeof title == "string" ? "\t It is type string, but it does not exist in array\n" : "\t is not string type!\n", "It is Type" + typeof title, "\n");

        if (typeof published == "string") {
            for (let i = 0; i < this.Published.length; i++) {
                if (this.Published.at(i) == published) this.Published[i] = "";
            }
        }
        else console.log(published, typeof published == "string" ? "\t It is type string, but it does not exist in array\n" : "\t is not string type!\n", "It is Type" + typeof author, "\n");
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

// Library that contains the books
class Library {
    #Entries = new Map();

    constructor(author, title, pages, read, published) {
        if (author instanceof Array && title instanceof Array && 
            pages instanceof Array && read instanceof Array && published instanceof Array) {
            author.forEach((value, index) => {
                this.#Entries.set(value, { 
                    title: title.at(index),
                    pages: pages.at(index),
                    read: read.at(index),
                    published: published.at(index)
                });
            });
        }
    }

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
}

Book.Add("The Silent Echo", "Elena Whitmore", "2018");
Book.AddPages("5", Book.Author.at(0));
Book.HaveRead(true, Book.Author.at(0));
Book.Add("Shadows of Tomorrow", "Daniel K. Hart", "2021");
Book.AddPages("10", Book.Author.at(1));
Book.HaveRead(false, Book.Author.at(1));
Book.Add("The Last Ember", "Sophia Rivers", "2019");
Book.AddPages("20000000000000", Book.Author.at(2));
Book.HaveRead(false, Book.Author.at(2));

//BuildBook.Print();
const book = new Library(Book.Author, Book.Title, Book.Read, Book.Published);
book.Print();

//Book.Remove("Shadows of Tomorrow"); // Removes the second book
//Book.Print();