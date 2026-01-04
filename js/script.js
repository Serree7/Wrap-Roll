// Get references to the burger button and nav menu
const burgerButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = navMenu.querySelectorAll('a'); // All links inside the nav menu

// Toggle mobile menu open/close on burger click
burgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav--open'); 
});

// Close mobile menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav--open'); 
    });
});
