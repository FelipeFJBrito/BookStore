document.addEventListener('DOMContentLoaded', () => {
    // Read the selected category from localStorage
    const selectedCategory = localStorage.getItem('selectedCategory') || 'comps'; // Default to 'comps' if no category is selected.
  
    const generateCard = (category) => {
      fetch('./data/booksSection.json') // Fetch data from the JSON file
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById('books-content');
          container.innerHTML = ''; // Clear previous content
  
          const bookList = data[category]; // Get the list of books for the category
          if (bookList && bookList.length > 0) {
            bookList.forEach(item => {
              // Creating card element
              const card = document.createElement('div');
              card.className = 'books-item';
  
              // Creating and appending image with a link
              const divImg = document.createElement('div');
              divImg.className = 'img-container';
  
              // Creating the link around the image
              const imgLink = document.createElement('a');
              imgLink.href = item.link; // Link to the book
              imgLink.target = '_blank'; // Open in new tab
              imgLink.rel = 'noopener noreferrer'; // Security measure
  
              const img = document.createElement('img');
              img.src = item.image; // Book cover image
              img.alt = item.title; // Alt text for accessibility
              imgLink.appendChild(img); // Wrap image in the link
  
              divImg.appendChild(imgLink); // Append the link-wrapped image to the div
              card.appendChild(divImg); // Append the div with the image to the card
  
              // Creating and appending title and text
              const divTitle = document.createElement('div');
              divTitle.className = 'overlay-text';
              const title = document.createElement('h3');
              title.className = 'projects-text-content-title';
  
              // Creating and appending link to title
              const tLink = document.createElement('a');
              tLink.className = 'overlay-text-link';
              tLink.href = item.link;
              tLink.textContent = item.title;
              tLink.target = '_blank'; // Open in new tab
              tLink.rel = 'noopener noreferrer'; // Security measure
              title.appendChild(tLink);
  
              divTitle.appendChild(title);
              card.appendChild(divTitle);
  
              // Appending card to container
              container.appendChild(card);
            });
          } else {
            container.innerHTML = `<p>No books found for category: ${category.toUpperCase()}</p>`;
          }
        }).catch(error => {
          console.error('Error fetching or processing the JSON file:', error);
        });
    };
  
    // Call generateCard function with the selected category
    generateCard(selectedCategory);
  });
  