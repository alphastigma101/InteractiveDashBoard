/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n\n\nconst book = _script_js__WEBPACK_IMPORTED_MODULE_0__.library.getBook(\"The Silent Shed\");\nconsole.log(book);\n\n//# sourceURL=webpack://library/./src/index.js?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book),\n/* harmony export */   library: () => (/* binding */ library)\n/* harmony export */ });\n// When you need to construct an object the best practice would be the object syntax literal\n// These are not the same as classes, they are different \n\n\n\n\n    // Object literal that constructs books\nconst Book = {\n\n    Author: new Array(),\n    Title: new Array(),\n    Published: new Array(),\n    Pages: new Array(10),\n    Read: new Array(10),\n\n    AddBook: function(author, title, published) {\n\n        if (typeof author == \"string\") this.Author.push(author);\n        else console.log(\"Is not a string type!\\n\", \"It is type \", typeof author, \"\\n\");\n        if (typeof title == \"string\") this.Title.push(title);\n        else console.log(\"Is not a string type!\\n\", \"It is type\", typeof title, \"\\n\");\n        if (typeof published == \"string\") this.Published.push(published);\n        else console.log(\"Is not a string type!\\n\", \"It is type\", typeof published, \"\\n\");\n\n    },\n\n    AddPages: function(pages, name) {\n        // We sync the pages with the author\n        let match_found = false;\n        if (typeof name == \"string\") {\n\n            for (let i = 0; i < this.Author.length; i++) {\n\n                if (name == this.Author.at(i)) {\n\n                    if (i < this.Pages.length) this.Pages[i] = pages;\n                    else this.Pages.push(pages);\n\n                    match_found = true;\n\n                }\n            }\n            if (!match_found) {\n\n                this.Title.forEach((literal) => {\n                    if (name == literal) console.log(\"\\t Titles does not have a page number!\\n\");\n                });\n\n                this.Published.forEach((literal) => {\n                    if (name == literal) console.log(\"\\t Publish date does not have a page number!\\n\");\n                });\n\n            }\n        }\n        else console.log(typeof name == \"string\" ? \n            console.log(\"\\t Does not exist in array\", typeof pages == \"string\" \n                ? \"\\t pages must be type string, which it is\\n\" : \"\\t pages is not string type! it is type \" + typeof pages) : \n            console.log(\"\\t Not a string type \" + \" is type \" + typeof name, typeof pages == \"string\" \n                ? \"\\t pages must be type string, which it is\\n\" : \"\\t pages is not string type! it is type \" + typeof pages));\n    },\n\n    HaveRead: function(read, name) {\n\n        let match_found = false;\n        if (typeof read == \"boolean\" && typeof name == \"string\") {\n        for (let i = 0; i < this.Author.length; i++) {\n                if (name == this.Author.at(i)) {\n                    if (i < this.Read.length) this.Read[i] = read;\n                    else this.Read.push(read);\n\n                    match_found = true;\n\n                }\n            }\n            if (!match_found) {\n\n                this.Title.forEach((literal) => {\n                    if (name == literal) console.log(\"\\t Titles does not have a page number!\\n\");\n                });\n\n                this.Published.forEach((literal) => {\n                    if (name == literal) console.log(\"\\t Publish date does not have a page number!\\n\");\n                });\n            }\n\n        }\n        else console.log(typeof name == \"string\" ? \n            console.log(\"\\t Does not exist in array\", typeof read == \"boolean\" \n                ? \"\\t pages must be type string, which it is\\n\" : \"\\t pages is not string type! it is type \" + typeof read) : \n            console.log(\"\\t Not a string type \" + \" is type \" + typeof name, typeof pages == \"boolean\" \n                ? \"\\t pages must be type string, which it is\\n\" : \"\\t pages is not string type! it is type \" + typeof read));\n\n    },\n    // Function that allows the user to remove the a book before it is added to the library \n    Remove: function(author, title, published) {\n        // Remove the book\n        if (typeof author == \"string\") {\n            if (this.Author) {\n\n                const index = this.Author.findIndex((a, i) => \n                    a === author && \n                    this.Title[i] === title && \n                    this.Published[i] === published\n                );\n\n                if (index !== -1) {\n\n                    this.Author.splice(index, 1);\n                    this.Title.splice(index, 1);\n                    this.Published.splice(index, 1);\n                    this.Pages.splice(index, 1);\n                    this.Read.splice(index, 1);\n\n                    return true;\n\n                }\n            }\n        }\n        \n    },\n    // Function that removes the book if checked out\n    Remove: function(entry) {\n\n        if (Object.prototype.toString.call(entry) === '[object Map]') {\n            \n            const [author] = entry.keys();\n            if (this.Author) {\n                const index = this.Author.indexOf(author);\n            \n                if (index !== -1) {\n\n                    this.Author.splice(index, 1);\n                    this.Title.splice(index, 1);\n                    this.Published.splice(index, 1);\n                    this.Pages.splice(index, 1);\n                    this.Read.splice(index, 1);\n\n                    return true;\n\n                }\n            }\n            \n        }\n\n        console.log(\"Entry is not a Map Type!\\n ...Returning false\\n\");\n        return false;\n\n    },\n\n    Print: function() {\n        // Define a reusable border style\n        const border = \"=\".repeat(40);\n        \n        // Print Authors Section\n        console.log(`\\n${border}`);\n        console.log(\" AUTHORS \".padStart(24, \"=\").padEnd(40, \"=\"));\n        console.log(`${border}\\n`);\n        this.Author.forEach((value, index) => {\n            console.log(` • ${value.padEnd(20)} \\t[Index: ${index}]`);\n        });\n\n        // Print Titles Section\n        console.log(`\\n${border}`);\n        console.log(\" TITLES \".padStart(24, \"=\").padEnd(40, \"=\"));\n        console.log(`${border}\\n`);\n        this.Title.forEach((value, index) => {\n            console.log(` • ${value.padEnd(20)} \\t[Index: ${index}]`);\n        });\n\n        // Print Published Years Section\n        console.log(`\\n${border}`);\n        console.log(\" PUBLICATION YEARS \".padStart(30, \"=\").padEnd(40, \"=\"));\n        console.log(`${border}\\n`);\n        this.Published.forEach((value, index) => {\n            console.log(` • ${String(value).padEnd(4)} \\t\\t[Index: ${index}]`);\n        });\n        \n        console.log(`\\n${border}\\n`);\n    }\n};\n\n// Keep a default of books \nBook.AddBook(\"Elena Whitmore\", \"The Silent Echo\", \"2018\");\nBook.AddPages(\"5\", \"Elena Whitmore\");\nBook.HaveRead(true, \"Elena Whitmore\");\nBook.AddBook(\"Daniel K. Hart\", \"Shadows of Tomorrow\", \"2021\");\nBook.AddPages(\"10\", \"Daniel K. Hart\");\nBook.HaveRead(false, \"Daniel K. Hart\");\nBook.AddBook(\"Sophia Rivers\", \"The Last Ember\", \"2019\");\nBook.AddPages(\"20000000000000\", \"Sophia Rivers\");\nBook.HaveRead(false, \"Sophia Rivers\");\n\nBook.AddBook(\"Bernie Sanders\", \"The Silent Shed\", \"2050\");\nBook.AddPages(\"50\", \"Bernie Sanders\");\nBook.HaveRead(true, \"Bernie Sanders\");\n\n// Library that contains the books\nclass Library {\n\n    #Entries = new Map();\n    #CheckedOut = new Map();\n\n    // Constructor that creates a Library Object\n    constructor(author, title, pages, read, published) {\n        if (this.#validateInput(author, title, pages, read, published)) {\n            author.forEach((value, index) => {\n                this.#Entries.set(value, { \n                    title: title.at(index),\n                    pages: pages.at(index),\n                    read: read.at(index),\n                    published: published.at(index)\n                });\n            });\n        }\n        else console.log(\"Expecting arguments to be all arrays!\\n ...Not constructing library\\n\");\n    }\n\n    // Function that validates the constructor's arguments \n    #validateInput(author, title, pages, read, published) {\n        if (Object.prototype.toString.call(author) === '[object Array]') \n            if (Object.prototype.toString.call(title) === '[object Array]') \n                if (Object.prototype.toString.call(pages) === '[object Array]')\n                    if (Object.prototype.toString.call(read) === '[object Array]') \n                        if (Object.prototype.toString.call(published) === '[object Array]') return true;\n        return false;\n    }\n    \n    // Function that prints the library \n    Print() {\n        if (this.#Entries.size === 0) {\n            console.log(\"No book entries found.\");\n            return;\n        }\n\n        console.log(\"\\n📚 BOOK CATALOG 📚\");\n        console.log(\"=\".repeat(40));\n\n        this.#Entries.forEach((details, author) => {\n            console.log(\n                `\\nAuthor:    ${author}`,\n                `\\nTitle:     ${details.title}`,\n                `\\nPublished: ${details.published}`,\n                `\\nRead:      ${details.read ? '✅' : '❌'}`,\n                `\\nPages:     ${details.pages}\\n`,\n                \"-\".repeat(40)\n            );\n        });\n\n        console.log(`\\nTotal Books: ${this.#Entries.size}`);\n        console.log(\"=\".repeat(40) + \"\\n\");\n    }\n    \n    // Get a specific Book by title\n    getBook(name) {\n\n        if (typeof name !== 'string') throw new TypeError(`Expected string for book name, got ${typeof name}`);\n\n        for (const [author, book] of this.#Entries) {\n            if (book.title === name) return new Map([[author, book]]);\n        }\n\n        throw new ReferenceError(`Book \"${name}\" not found in library`);\n\n    }\n\n    get library() {\n\n        return this.#Entries;\n    }\n    \n    // Remove a specific book by title\n    removeBook(name) {\n\n        if (typeof name == \"string\") {\n            \n            for (const [author, book] of this.#Entries) {\n                if (book.title === name) {\n\n                    this.#Entries.delete(author);\n                    return true;\n\n                }\n            }\n        }\n\n        return true;\n    }\n\n    // Checkout a Book by title\n    checkOut(name) {\n\n        if (typeof name == \"string\") {\n            \n            for (const [author, book] of this.#Entries) {\n                if (book.title === name) {\n\n                    this.#CheckedOut.set(author, book);\n                    this.#Entries.delete(author);\n\n                    return true;\n                }\n            }\n        }\n\n        console.log(\"Book does not exist in the library!\\n ...Returning False\\n\");\n        return false;\n    }\n\n    // Return A Book by title\n    returnBook(name) {\n\n        if (typeof name == \"string\") {\n\n            for (const [author, book] of this.#CheckedOut) {\n                if (book.title === name) {\n\n                    this.#Entries.set(author, book);\n                    this.#CheckedOut.delete(author);\n                    return true;\n\n                }\n            }\n\n            console.log(\"Book does not exist in the library!\\n ...Returning False\\n\");\n            return false;\n\n        }\n        \n        return true;\n\n    }\n}\n\nconst library = new Library(Book.Author, Book.Title, Book.Pages, Book.Read, Book.Published);\n//library.Print();\n\n\n\n//# sourceURL=webpack://library/./src/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;