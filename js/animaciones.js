
// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
        rect.bottom >= 0
    );
}

// Función para animar las cards cuando son visibles
function animateCards() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
        if (isInViewport(card)) {
            // Aplicamos un delay escalonado para un efecto cascada
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 70); // 70ms de delay entre cada card
        }
    });
}

// Función para inicializar las animaciones
function initAnimations() {
    const cards = document.querySelectorAll('.product-card');
    
    // Configuración inicial: ocultar todas las cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Ejecutar al cargar la página y al hacer scroll
    animateCards();
    window.addEventListener('scroll', animateCards);
}


// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});