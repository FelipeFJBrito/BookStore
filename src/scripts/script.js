let searchTab = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");

searchButton.addEventListener('click', () => {
    let bookName = searchTab.value.trim().toLowerCase();
    if (bookName) {
        // Redirecting to searchPage.html with query parameter 'book'
        window.location.href = `searchPage.html?book=${encodeURIComponent(bookName)}`;
    }
});
