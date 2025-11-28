// Funcionalidad básica para los botones
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        const productTitle = this.closest('.product-card').querySelector('.product-title').textContent;
        alert(`Has seleccionado: ${productTitle}. En una implementación real, esto te llevaría al proceso de compra.`);
    });
});

// Efecto de scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de carga para las tarjetas de productos
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Cambio de color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--secondary-color)';
        header.style.backdropFilter = 'none';
    }
});
