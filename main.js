// Selecciona el enlace "Gallery" y el submenú
const menuItem = document.querySelector('.menu-item');
const submenu = document.querySelector('.submenu');

// Añadimos un evento de clic en el menú principal
menuItem.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página

    // Alternamos la clase para mostrar u ocultar el submenú
    submenu.classList.toggle('submenu--visible');
});
