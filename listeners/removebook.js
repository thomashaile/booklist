// Event: Remove a Book

document.getElementById('book-list').addEventListener('click', (e) => {
    // Remove book from UI

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message

});