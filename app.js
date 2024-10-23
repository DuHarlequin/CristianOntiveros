// Script para actualizar las barras de progreso basado en el porcentaje
document.querySelectorAll('.progress-item').forEach(item => {
    const percentElement = item.querySelector('.percent');
    const progressBar = item.querySelector('.progress');
    const percentValue = parseInt(percentElement.getAttribute('data-percent'));

    // Actualizar el ancho de la barra de progreso
    progressBar.style.width = percentValue + '%';
});
