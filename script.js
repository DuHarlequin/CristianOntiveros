// Función para mostrar secciones una por una con animación de luz
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    // Observer para mostrar cada sección por separado
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animación de luces mientras el usuario se desplaza
    function createLight() {
        const light = document.createElement('div');
        light.classList.add('light');
        document.body.appendChild(light);

        // Configuración aleatoria para las luces
        const size = Math.random() * 60 + 20 + 'px';
        light.style.width = size;
        light.style.height = size;
        light.style.left = Math.random() * 100 + 'vw';

        // Tiempo de vida de la luz
        setTimeout(() => {
            light.remove();
        }, 8000);
    }

    // Crear luces cada 500ms
    setInterval(createLight, 500);
});
