// Cambiar el color de fondo del encabezado al hacer clic en el título
const title = document.querySelector('header h1');
title.addEventListener('click', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = '#E74C3C'; // Rojo intenso
});

// Añadir efecto suave al hacer clic en los enlaces del menú
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
