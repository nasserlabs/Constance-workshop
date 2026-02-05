/**
 * L'Atelier de Constance - Main JavaScript
 * Gère les animations, interactions et la mascotte 3D
 */

// ================================
// NAVIGATION MOBILE
// ================================

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Fermer le menu au clic sur un lien
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// ================================
// SCROLL ANIMATIONS
// ================================

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

// Observer tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ================================
// FORMULAIRE DE CONTACT
// ================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulation d'envoi (dans un vrai projet, envoyer à un serveur)
        setTimeout(() => {
            contactForm.reset();
            formSuccess.classList.add('show');
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                formSuccess.classList.remove('show');
            }, 5000);
        }, 500);
    });
}

// ================================
// MASCOTTE 2D (SVG Interactif)
// ================================

function initMascotte() {
    const container = document.getElementById('mascotte-canvas');
    if (!container) return;
    
    // Charger le SVG de la mascotte
    fetch('assets/mascotte/mascotte-2d.svg')
        .then(response => response.text())
        .then(svgText => {
            container.innerHTML = svgText;
            
            // Récupérer les éléments du SVG pour l'interaction
            const svg = container.querySelector('svg');
            const leftPupil = container.querySelector('#left-pupil');
            const rightPupil = container.querySelector('#right-pupil');
            const mascotteFace = container.querySelector('#mascotte-face');
            
            if (!svg || !leftPupil || !rightPupil) return;
            
            // Variables pour suivre la souris
            let mouseX = 0;
            let mouseY = 0;
            
            // Suivi de la souris
            document.addEventListener('mousemove', (event) => {
                const containerRect = container.getBoundingClientRect();
                const centerX = containerRect.left + containerRect.width / 2;
                const centerY = containerRect.top + containerRect.height / 2;
                
                // Calculer la position relative de la souris
                mouseX = (event.clientX - centerX) / containerRect.width;
                mouseY = (event.clientY - centerY) / containerRect.height;
                
                // Limiter le mouvement des pupilles
                const maxMove = 3;
                const pupilX = mouseX * maxMove;
                const pupilY = mouseY * maxMove;
                
                // Déplacer les pupilles
                leftPupil.setAttribute('cx', -15 + pupilX);
                leftPupil.setAttribute('cy', -8 + pupilY);
                rightPupil.setAttribute('cx', 15 + pupilX);
                rightPupil.setAttribute('cy', -8 + pupilY);
                
                // Légère rotation du visage vers la souris
                if (mascotteFace) {
                    const rotation = mouseX * 3;
                    mascotteFace.style.transform = `rotate(${rotation}deg)`;
                    mascotteFace.style.transformOrigin = 'center';
                    mascotteFace.style.transition = 'transform 0.1s ease';
                }
            });
            
            // Animation de flottement douce
            let floatTime = 0;
            function animateFloat() {
                floatTime += 0.02;
                const floatY = Math.sin(floatTime) * 5;
                
                if (mascotteFace) {
                    const currentRotation = parseFloat(mascotteFace.style.transform?.match(/-?\d+\.?\d*/)?.[0] || 0);
                    mascotteFace.style.transform = `rotate(${currentRotation}deg) translateY(${floatY}px)`;
                }
                
                requestAnimationFrame(animateFloat);
            }
            
            animateFloat();
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la mascotte:', error);
        });
}

// Initialiser la mascotte quand le DOM est chargé
if (document.getElementById('mascotte-canvas')) {
    initMascotte();
}

// ================================
// SMOOTH SCROLL POUR LES LIENS
// ================================

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

// ================================
// NAVIGATION BAR AU SCROLL
// ================================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ================================
// ANIMATIONS POUR LES CARTES PRODUITS
// ================================

document.querySelectorAll('.product-card, .product-card-full').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('✨ L\'Atelier de Constance - Site chargé avec succès');
