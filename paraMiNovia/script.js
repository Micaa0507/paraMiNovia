let contador = 0;  // Para contar cuántos elementos fueron tocados
const totalElementos = document.querySelectorAll('.floating').length;  // Obtener la cantidad de elementos a tocar

document.querySelectorAll('.floating').forEach(img => {
    img.addEventListener('click', () => {
        // Mostrar el mensaje en el modal
        const message = img.getAttribute('data-message');
        document.getElementById('message-text').textContent = message;
        document.getElementById('modal').classList.remove('hide');

        // Incrementar el contador cada vez que se hace clic
        contador++;

        // Redirigir si se tocó todos los elementos
        if (contador === totalElementos) {
            // Redirigir a la página de felicitación
            setTimeout(() => {
                window.location.href = "cym.html";  // Asegúrate de que la URL sea correcta
            }, 1000);  // Esperar 1 segundo para que el modal se muestre antes de redirigir
        }
    });
});

function hideMessage() {
    document.getElementById('modal').classList.add('hide');
}
