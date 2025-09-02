import "./styles.css";
import { Book, library, Library } from "./script.js";

const Bag = new Map();

// Create and inject the HTML structure
function initializeApp() {
    document.body.innerHTML = `
    <div class="left-column">
        <div id="submit_container">
            <h2>Add a Book to the Library</h2>
            <form id="add-book-form">
                <label for="nameOfAuthor">Author:</label>
                <input type="text" id="nameOfAuthor" name="nameOfAuthor" required>
            
                <label for="nameOfTitle">Title:</label>
                <input type="text" id="nameOfTitle" name="nameOfTitle" required>
            
                <label for="amountOfPages">Pages:</label>
                <input type="text" id="amountOfPages" name="amountOfPages" required>
                
                <label for="yearPublished">Published:</label>
                <input type="text" id="yearPublished" name="yearPublished" required>
            
                <label for="haveRead">Read:</label>
                <input type="checkbox" id="haveRead" name="haveRead">
            
                <input type="submit" value="Add Book">
            </form>
        </div>
    
        <div id="search_container">
            <h2>Find a Book in the Library</h2>
            <form id="search-form">
                <label for="searchQuery">Search:</label>
                <input type="text" id="searchQuery" name="searchQuery" placeholder="Title">
                <input type="submit" value="Search">
            </form>
        </div>
    </div>

    <div id="book_container">
        <div class="books-grid" id="books-list"></div>
    </div>

    <div class="right-column">
        <div id="check_out_or_container">
            <h2>Check Out/Return Book</h2>
            <form id="checkout-form">
                <label for="checkoutTitle">Book Title:</label>
                <input type="text" id="checkoutTitle" required>
                <input type="submit" value="Check Out">
            </form>
        </div>
    
        <div id="remove_container">
            <h2>Remove Book</h2>
            <form id="remove-form">
                <label for="removeTitle">Book Title:</label>
                <input type="text" id="removeTitle" required>
                <input type="submit" value="Remove">
            </form>
        </div>
    </div>
    `;

    displayBooks();

    setupEventListeners();
}

function setupEventListeners() {

    document.getElementById('add-book-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values and trim them
        const author = document.getElementById('nameOfAuthor').value.trim();
        const title = document.getElementById('nameOfTitle').value.trim();
        const pages = document.getElementById('amountOfPages').value.trim();
        const isRead = document.getElementById('haveRead').checked; 
        const published = document.getElementById("yearPublished").value.trim();

        Book.AddBook(author, title, published);
        Book.AddPages(pages, author);
        Book.HaveRead(isRead, author);

        const temp = new Library(Book.Author, Book.Title, Book.Pages, Book.Read, Book.Published);
        const map = temp.getLibrary();
        library.setLibrary(map);

        displayBooks();

    });

    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('checkoutTitle').value.trim();
        let found = false;

        try {

            // Will throw an exception if not found
            if (library.findBook(title)) {

                const bookMap = library.getBook(title);
                library.removeBook(title);
                Book.Remove(bookMap);
                
                // Add to Bag
                bookMap.forEach((bookDetails, author) => {
                    Bag.set(author, bookDetails);
                });
                
                displayBooks();
                found = true;
                showSearchMessage('Book checked out successfully!', 'success', 'check_out_or_container');
                
            }

        } catch (error) {

            try {

                for (const [author, details] of Bag) {

                    if (details.title === title) {

                        // Return book to library
                        library.addBook(author, details);
                        Bag.delete(author);

                        displayBooks();
                        found = true;
                        showSearchMessage('Book returned to library!', 'success', 'check_out_or_container');

                        break;
                    }
                }
                
                if (!found) throw new Error('Book not found in library or bag');

            } catch (error) {
                showSearchMessage(error.message, 'error', 'check_out_or_container');
            }
        }
        

    });

    document.getElementById('remove-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const title = document.getElementById('removeTitle').value;
        library.removeBook(title);
        displayBooks();

    });

    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('searchQuery').value.trim();
        const searchContainer = document.getElementById('search_container');
        
        // Clear any previous messages
        const existingMessage = document.getElementById('search-message');
        if (existingMessage) existingMessage.remove();
    
        try {

            if (library.findBook(title)) {

                // Create checkout UI elements
                const checkoutDiv = document.createElement('div');
                checkoutDiv.id = 'checkout-options';
                checkoutDiv.innerHTML = `
                    <div class="checkout-prompt">
                        <p>Book found! Would you like to check it out?</p>
                        <label>
                            <input type="checkbox" id="checkout-checkbox"> Yes, check out this book
                        </label>
                        <button id="confirm-checkout">Confirm</button>
                    </div>
                `;
                
                searchContainer.appendChild(checkoutDiv);
                
                // Handle checkout confirmation
                document.getElementById('confirm-checkout').addEventListener('click', function() {

                    const checkoutChecked = document.getElementById('checkout-checkbox').checked;
                    if (checkoutChecked) {

                        try {

                            const bookMap = library.getBook(title);
                            library.removeBook(title);
                            
                            bookMap.forEach((bookDetails, author) => {
                                Bag.set(author, bookDetails);
                            });
                            
                            displayBooks();
                        
                            showSearchMessage('Book checked out successfully!', 'success', 'search_container');

                        } catch (error) {
                            showSearchMessage('Error checking out book: ' + error.message, 'error', 'search_container');
                        }
                    }

                    checkoutDiv.remove();

                });

            } else showSearchMessage('Book not found in library', 'error', 'search_container');

        } catch (error) {
            showSearchMessage('Error searching for book: ' + error.message, 'error', 'search_container');
        }

    });
}

function displayBooks() {

    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';
    
    // Get books from library and bag
    const libraryBooks = library.getLibrary();
    const bagBooks = Bag;
    
    const librarySection = document.createElement('div');
    librarySection.className = 'library-section';
    librarySection.innerHTML = '<h2 style="color: #1e90ff; margin-bottom: 20px;">Library Books</h2>';
    
    let bagSection = null;
    let divider = null;
    if (bagBooks && bagBooks.size > 0) {

        // Issue here. Checked Out Books is not displaying a certain color
        bagSection = document.createElement('div');
        bagSection.className = 'bag-section';
        bagSection.innerHTML = '<h2 style="color: #1e90ff; margin-bottom: 20px;">Checked Out Books</h2>';
        
        // Add visual divider
        divider = document.createElement('div');
        divider.className = 'section-divider';
        divider.innerHTML = '<hr>';

    }
    
    Array.from(libraryBooks.entries()).forEach(([author, bookDetails]) => {

        const bookCard = createBookCard(author, bookDetails);
        librarySection.appendChild(bookCard);

    });
    
    // Display bag books if they exist
    if (bagSection) {

        Array.from(bagBooks.entries()).forEach(([author, bookDetails]) => {

            const bookCard = createBookCard(author, bookDetails);
            bookCard.classList.add('checked-out');
            bagSection.appendChild(bookCard);

        });
        
        booksList.appendChild(librarySection);
        booksList.appendChild(divider);
        booksList.appendChild(bagSection);


    } else booksList.appendChild(librarySection);
}

// Helper function to create book cards
function createBookCard(author, bookDetails) {

    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    
    bookCard.innerHTML = `
        <h3>${bookDetails.title}</h3>
        <div class="book-info"><strong>Author:</strong> ${author}</div>
        <div class="book-info"><strong>Published:</strong> ${bookDetails.published}</div>
        <div class="book-info"><strong>Pages:</strong> ${bookDetails.pages}</div>
        <div class="book-info">
            <strong>Status:</strong> 
            <span class="${bookDetails.read ? 'read-status' : 'not-read'}">
                ${bookDetails.read ? 'Read' : 'Not Read'}
            </span>
        </div>
    `;

    return bookCard;
}

// Helper function to show temporary messages
function showSearchMessage(message, type, id) {

    const searchContainer = document.getElementById(id);
    const existingMessage = document.getElementById('search-message');
    
    if (existingMessage) existingMessage.remove();
    
    const messageDiv = document.createElement('div');
    messageDiv.id = 'search-message';
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    searchContainer.appendChild(messageDiv);
    
    // Remove message after 10 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 10000);
}

// Start the app
initializeApp();