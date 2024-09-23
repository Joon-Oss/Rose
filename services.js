const menuIcon = document.getElementById("menu-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
    dropdownMenu.style.display = "block"; // Show the dropdown
});

closeIcon.addEventListener("click", () => {
    dropdownMenu.style.display = "none"; // Hide the dropdown
});

// Optional: Close dropdown when clicking outside
window.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none"; // Hide the dropdown
    }
});



// Get modal element
const modal = document.getElementById("modal");

// Get open modal button
const openModalBtn = document.getElementById("openModal");

// Get close button
const closeModalBtn = document.getElementById("closeModal");

// Open modal and stop body scrolling
openModalBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block"; 
  document.body.style.overflow = "hidden"; // Stop page scrolling
});

// Close modal and restore body scrolling
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore page scrolling
});

// Close the modal if user clicks outside of the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  }
});

// Modal for Advertisement
document.getElementById("openModalAd").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalAd").style.display = "block";
});
document.getElementById("closeModalAd").addEventListener("click", function() {
  document.getElementById("modalAd").style.display = "none";
});

// Modal for Branding
document.getElementById("openModalBranding").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBranding").style.display = "block";
});
document.getElementById("closeModalBranding").addEventListener("click", function() {
  document.getElementById("modalBranding").style.display = "none";
});

// Modal for Marketing
document.getElementById("openModalMarketing").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalMarketing").style.display = "block";
});
document.getElementById("closeModalMarketing").addEventListener("click", function() {
  document.getElementById("modalMarketing").style.display = "none";
});

// Modal for Virtual Assistant
document.getElementById("openModalAssistant").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalAssistant").style.display = "block";
});
document.getElementById("closeModalAssistant").addEventListener("click", function() {
  document.getElementById("modalAssistant").style.display = "none";
});

// Modal for Customer Support
document.getElementById("openModalSupport").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalSupport").style.display = "block";
});
document.getElementById("closeModalSupport").addEventListener("click", function() {
  document.getElementById("modalSupport").style.display = "none";
});

// Modal for Business Lady 1
document.getElementById("openModalBusiness1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBusiness1").style.display = "block";
});
document.getElementById("closeModalBusiness1").addEventListener("click", function() {
  document.getElementById("modalBusiness1").style.display = "none";
});

// Modal for Business Lady 2
document.getElementById("openModalBusiness2").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBusiness2").style.display = "block";
});
document.getElementById("closeModalBusiness2").addEventListener("click", function() {
  document.getElementById("modalBusiness2").style.display = "none";
});

// Modal for Advertisement
document.getElementById("openModalAd").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalAd").style.display = "block";
});
document.getElementById("closeModalAd").addEventListener("click", function() {
  document.getElementById("modalAd").style.display = "none";
});

// Modal for Branding
document.getElementById("openModalBranding").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBranding").style.display = "block";
});
document.getElementById("closeModalBranding").addEventListener("click", function() {
  document.getElementById("modalBranding").style.display = "none";
});

// Modal for Marketing
document.getElementById("openModalMarketing").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalMarketing").style.display = "block";
});
document.getElementById("closeModalMarketing").addEventListener("click", function() {
  document.getElementById("modalMarketing").style.display = "none";
});

// Modal for Virtual Assistant
document.getElementById("openModalAssistant").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalAssistant").style.display = "block";
});
document.getElementById("closeModalAssistant").addEventListener("click", function() {
  document.getElementById("modalAssistant").style.display = "none";
});

// Modal for Customer Support
document.getElementById("openModalSupport").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalSupport").style.display = "block";
});
document.getElementById("closeModalSupport").addEventListener("click", function() {
  document.getElementById("modalSupport").style.display = "none";
});

// Modal for Business Lady 1
document.getElementById("openModalBusiness1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBusiness1").style.display = "block";
});
document.getElementById("closeModalBusiness1").addEventListener("click", function() {
  document.getElementById("modalBusiness1").style.display = "none";
});

// Modal for Business Lady 2
document.getElementById("openModalBusiness2").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("modalBusiness2").style.display = "block";
});
document.getElementById("closeModalBusiness2").addEventListener("click", function() {
  document.getElementById("modalBusiness2").style.display = "none";
});
