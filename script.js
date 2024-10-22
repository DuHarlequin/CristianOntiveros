// Función para añadir animación de desvanecimiento
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Añadir una clase animada cuando las secciones son visibles en pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
