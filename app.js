document.addEventListener("DOMContentLoaded", () => {
    // Función para actualizar el ancho de la barra de progreso
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
    });

    // Función para copiar correo
    document.getElementById('copyEmail').addEventListener('click', function() {
        const email = 'cristian@mail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert("Correo copiado: " + email);
        }).catch(err => {
            console.log('Error al copiar el correo: ', err);
        });
    });
});
