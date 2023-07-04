const title = document.querySelector('h1');
const botonJava = document.getElementById('botonJava');
title.style.color = 'red';
title.style.textAlign = 'center';


// Agregar evento de escucha al botón
botonJava.addEventListener('click', function() {
    // Cambiar el texto del elemento h1
    title.textContent = 'Hola mundo con java';
});

