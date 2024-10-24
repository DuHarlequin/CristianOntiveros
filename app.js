function copiarCorreo() {
    const correo = document.getElementById('email').value;
    navigator.clipboard.writeText(correo).then(() => {
        alert('Correo copiado: ' + correo);
    });
}
