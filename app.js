// Código para el botón de copiar correo
document.getElementById('copyEmail').addEventListener('click', function() {
    const email = 'tu-correo@example.com';
    navigator.clipboard.writeText(email);
});
