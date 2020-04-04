document.getElementById('book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instatiate book
        const book = new Book(title, author, isbn);

        // Add Book to UI


        // Add book to store
        Store.addBook(book);

        // Show success message


        // Clear fields

    }
});