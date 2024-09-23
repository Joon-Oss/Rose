document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const closeButton = document.getElementById('closeButton');

    // Toggle dropdown menu visibility
    menuButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown menu when close button is clicked
    closeButton.addEventListener('click', function() {
        dropdownMenu.style.display = 'none';
    });

    // Close the dropdown menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
