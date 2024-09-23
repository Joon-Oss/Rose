// Toggle dropdown menu on clicking the menu button
document.querySelector(".menu-btn").addEventListener("click", function() {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList.toggle("show");
});

// Hide the dropdown menu when clicking outside of it
document.addEventListener("click", function(event) {
    const isMenuClick = event.target.closest(".menu-container");
    if (!isMenuClick) {
        document.querySelector(".dropdown-menu").classList.remove("show");
    }
});

// Handle contact form submission and display success message
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Display success message on top of the form (centered)
    const successMessage = document.getElementById("success-message");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("visible");

    // Clear form fields
    document.getElementById("contact-form").reset();

    // Hide the message after 5 seconds
    setTimeout(function() {
        successMessage.classList.add("hidden");
        successMessage.classList.remove("visible");
    }, 5000);
});
