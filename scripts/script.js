let searchTab = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");

// Function to handle click event for toggling visibility
document.querySelector('.toggle').addEventListener('click', function() {
    const secondNavContainer = document.querySelector('.second-nav-container');
    
    // Check the screen width and toggle visibility only if the screen width is 500px or less
    if (window.innerWidth <= 500) {
        if (secondNavContainer.style.display === 'flex') {
            secondNavContainer.style.display = 'none';
        } else {
            secondNavContainer.style.display = 'flex'; // Show the container
        }
    }
});

// Event listener to handle screen resizing
window.addEventListener('resize', function() {
    const secondNavContainer = document.querySelector('.second-nav-container');
    
    // When the screen is greater than 500px, the second-nav must be visible
    if (window.innerWidth > 500) {
        secondNavContainer.style.display = 'flex';
    } else {
        // When the screen size is 500px or less, hide the second-nav-container
        secondNavContainer.style.display = 'none';
    }
});

// Initial check to set visibility based on screen size
window.addEventListener('load', function() {
    const secondNavContainer = document.querySelector('.second-nav-container');
    
    if (window.innerWidth > 500) {
        secondNavContainer.style.display = 'flex';
    } else {
        secondNavContainer.style.display = 'none';
    }
});

function setCategory(category) {
    localStorage.setItem('selectedCategory', category);
}

searchButton.addEventListener('click', () => {
    let bookName = searchTab.value.trim().toLowerCase();
    if (bookName) {
        // Redirecting to searchPage.html with query parameter 'book'
        window.location.href = `searchPage.html?book=${encodeURIComponent(bookName)}`;
    }
});


