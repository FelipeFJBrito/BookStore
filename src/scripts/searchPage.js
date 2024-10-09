document.addEventListener('DOMContentLoaded', () => {
    // Parse the URL to get the search query
    const params = new URLSearchParams(window.location.search);
    const bookName = params.get('book');

    if (bookName) {
        // Fetch book data from JSON and display matching results
        generateCard(bookName);
    }
});

const generateCard = (searchTerm) => {
    // Convert search term to lowercase for case-insensitive comparison
    searchTerm = searchTerm.trim().toLowerCase();

    // Fetch data from the JSON file
    fetch('../data/booksNames.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('books-content');
            container.innerHTML = ''; // Clear previous content

            // Store matching books based on search term
            const matchingBooks = [];

            // Loop through all books and check if the search term is in the title
            Object.keys(data).forEach(bookKey => {
                const bookList = data[bookKey];
                if (bookList && bookList.length > 0) {
                    bookList.forEach(item => {
                        if (item.title.toLowerCase().includes(searchTerm)) {
                            matchingBooks.push(item);
                        }
                    });
                }
            });

            // If there are matching books, generate cards
            if (matchingBooks.length > 0) {
                matchingBooks.forEach(item => {
                    // Create card element
                    const card = document.createElement('div');
                    card.className = 'books-item';

                    // Create and append image with a link
                    const divImg = document.createElement('div');
                    divImg.className = 'img-container';

                    // Create the link around the image
                    const imgLink = document.createElement('a');
                    imgLink.href = item.link; // Link to the book PDF
                    imgLink.target = '_blank'; // Open in new tab
                    imgLink.rel = 'noopener noreferrer'; // Security measure

                    const img = document.createElement('img');
                    img.src = item.image; // Book image
                    img.alt = item.title;
                    imgLink.appendChild(img); // Wrap image in the link

                    divImg.appendChild(imgLink); // Append the link-wrapped image to the div
                    card.appendChild(divImg); // Append the div with the image to the card

                    // Create and append title and text
                    const divTitle = document.createElement('div');
                    divTitle.className = 'overlay-text';
                    const title = document.createElement('h3');
                    title.className = 'projects-text-content-title';

                    // Create and append link to title
                    const tLink = document.createElement('a');
                    tLink.className = 'overlay-text-link';
                    tLink.href = item.link;
                    tLink.textContent = item.title;
                    tLink.target = '_blank'; // Open in new tab
                    tLink.rel = 'noopener noreferrer'; // Security measure
                    title.appendChild(tLink);

                    divTitle.appendChild(title);
                    card.appendChild(divTitle);

                    // Append card to container
                    container.appendChild(card);
                });
            } else {
                container.innerHTML = `<p>No books found matching the term "${searchTerm}"</p>`;
            }
        }).catch(error => {
            console.error('Error fetching or processing the JSON file:', error);
        });
};
