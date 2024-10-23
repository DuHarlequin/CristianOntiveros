// Función para copiar el correo
function copyEmail() {
    const email = "tuemail@ejemplo.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Correo copiado: " + email);
    });
}

// Función para actualizar el progreso
document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function (bar) {
        const percentage = bar.style.width;
        bar.querySelector('span').textContent = percentage;
    });
});
