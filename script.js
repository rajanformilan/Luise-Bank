// Select elements from the DOM
const burger = document.querySelector('.burger'); // Burger menu
const navLinks = document.querySelector('.nav-links'); // Navigation links
const navItems = document.querySelectorAll('.nav-links li'); // Individual nav items

// Add a click event listener to the burger menu
burger.addEventListener('click', () => {
  // Toggle the visibility of the navigation menu
  navLinks.classList.toggle('nav-active');

  // Animate the navigation links
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      // Reset animation if already active
      item.style.animation = '';
    } else {
      // Add fade-in animation with delay
      item.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Toggle the burger menu animation
  burger.classList.toggle('toggle');
});
