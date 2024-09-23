function toggleMenu() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Optional: Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown');
    const menuIcon = document.querySelector('.menu-icon');
    if (!dropdown.contains(event.target) && !menuIcon.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
