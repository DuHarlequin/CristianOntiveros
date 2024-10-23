// Script para actualizar las barras de progreso basado en el porcentaje
document.querySelectorAll('.progress').forEach(progress => {
    const percent = progress.getAttribute('data-percent');
    progress.style.width = percent + '%';
});
