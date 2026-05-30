// 1. Find the search input box and all the course cards on the page
const searchInput = document.getElementById('search-box');
const courseCards = document.querySelectorAll('.course-card');

// 2. Listen for typing events inside the search box
searchInput.addEventListener('input', function() {
    // Convert text to lowercase so matching isn't ruined by capitalization differences
    const searchText = searchInput.value.toLowerCase();

    // 3. Loop through every single course card
    courseCards.forEach(function(card) {
        // Find the title text inside the current card
        const courseTitle = card.querySelector('h4').textContent.toLowerCase();

        // 4. Check if the title contains the typed search text
        if (courseTitle.includes(searchText)) {
            card.style.display = "block"; // Show the card if it matches
        } else {
            card.style.display = "none";  // Hide the card if it doesn't match
        }
    });
});