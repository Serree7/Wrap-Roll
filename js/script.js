const burgerButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = navMenu.querySelectorAll('a'); 

burgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav--open'); 
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav--open'); 
    });
});
