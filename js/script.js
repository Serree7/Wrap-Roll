// Selecciones del DOM
const burgerButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = navMenu.querySelectorAll('a');
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

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

// Función para ocultar el banner con animación
const hideCookieBanner = () => {
    cookieBanner.classList.add('hide'); // dispara animación de salida
};

// Función para quitar del DOM después de la animación
const removeCookieBanner = () => {
    cookieBanner.style.display = 'none';
};

// Listener del botón (fuera de las funciones)
acceptBtn.addEventListener('click', hideCookieBanner);

// Listener para cuando termine la animación de salida
cookieBanner.addEventListener('animationend', (event) => {
    if (event.animationName === 'cookie-hide') removeCookieBanner();
});


// Listener del botón hamburguesa
burgerButton.addEventListener('click', toggleMenu);

// Listeners de los enlaces
navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
