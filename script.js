const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility on click
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
