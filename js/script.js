// Selecciones del DOM
const burgerButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = navMenu.querySelectorAll('a');

// Mostrar menú
const openMenu = () => {
    navMenu.style.display = 'flex';      
    navMenu.classList.remove('nav--close'); 
    navMenu.classList.add('nav--open');   
};

// Ocultar menú
const closeMenu = () => {
    navMenu.classList.remove('nav--open');  
    navMenu.classList.add('nav--close');   

    // Ocultamos al final de la animación
    setTimeout(() => {
        navMenu.classList.remove('nav--close');
        navMenu.style.display = 'none';
    }, 300); // Duración de la animación
};

// Alternar menú
const toggleMenu = () => {
    if (navMenu.classList.contains('nav--open')) {
        closeMenu();
    } else {
        openMenu();
    }
};

// Cerrar menú al hacer click en un enlace
const handleLinkClick = () => {
    if (navMenu.classList.contains('nav--open')) {
        closeMenu();
    }
};


// Listener del botón hamburguesa
burgerButton.addEventListener('click', toggleMenu);

// Listeners de los enlaces
navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
