// Función para copiar la IP del servidor
function copyIP() {
    const ip = 'play.olimposerver.com';
    navigator.clipboard.writeText(ip).then(() => {
        // Mostrar mensaje de confirmación
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '¡IP Copiada!';
        button.style.background = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#ffd700';
        }, 2000);
    });
}

// Simular jugadores online (en un caso real, conectarías con una API)
function updatePlayerCount() {
    const playerCount = Math.floor(Math.random() * 50) + 20; // Simular entre 20-70 jugadores
    document.getElementById('player-count').textContent = `${playerCount}/100`;
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de parallax en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Actualizar contador de jugadores cada 30 segundos
updatePlayerCount();
setInterval(updatePlayerCount, 30000);

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .mod-card, .rule-item, .step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
