// Seleccionamos el menú principal y el submenú
const menuItem = document.querySelector('.menu-item');
const submenu = document.querySelector('.submenu');

// Añadimos un evento de clic en el menú principal para mostrar/ocultar el submenú
menuItem.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace del menú principal recargue la página
    submenu.classList.toggle('submenu--visible'); // Mostrar/ocultar el submenú
});

// Evitamos que al hacer clic dentro del submenú se cierre
submenu.addEventListener('click', function(event) {
    event.stopPropagation(); // Esto evita que el clic en el submenú cierre el menú
});

// Cerramos el submenú al hacer clic fuera del mismo
document.addEventListener('click', function(event) {
    // Si el clic no está dentro del menú principal o del submenú, lo cerramos
    if (!menuItem.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.remove('submenu--visible');
    }
});
