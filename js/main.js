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
// MASCOTTE 3D (Three.js)
// ================================

function initMascotte() {
    const canvas = document.getElementById('mascotte-canvas');
    if (!canvas) return;
    
    // Configuration de la scène
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Créer la plante mascotte
    const plantGroup = new THREE.Group();
    
    // Pot (cylindre)
    const potGeometry = new THREE.CylinderGeometry(0.6, 0.5, 1, 32);
    const potMaterial = new THREE.MeshStandardMaterial({
        color: 0xE8DCC4,
        roughness: 0.7
    });
    const pot = new THREE.Mesh(potGeometry, potMaterial);
    pot.position.y = 0;
    plantGroup.add(pot);
    
    // Terre
    const soilGeometry = new THREE.CylinderGeometry(0.58, 0.58, 0.1, 32);
    const soilMaterial = new THREE.MeshStandardMaterial({
        color: 0x6B5544,
        roughness: 0.9
    });
    const soil = new THREE.Mesh(soilGeometry, soilMaterial);
    soil.position.y = 0.5;
    plantGroup.add(soil);
    
    // Tige principale
    const stemGeometry = new THREE.CylinderGeometry(0.08, 0.1, 2, 16);
    const stemMaterial = new THREE.MeshStandardMaterial({
        color: 0x5A6C57,
        roughness: 0.6
    });
    const stem = new THREE.Mesh(stemGeometry, stemMaterial);
    stem.position.y = 1.5;
    plantGroup.add(stem);
    
    // Feuilles (sphères aplaties)
    const leafMaterial = new THREE.MeshStandardMaterial({
        color: 0x8FA08E,
        roughness: 0.5
    });
    
    // Feuille gauche
    const leafGeometry1 = new THREE.SphereGeometry(0.4, 16, 16);
    const leaf1 = new THREE.Mesh(leafGeometry1, leafMaterial);
    leaf1.scale.set(1.5, 0.3, 1);
    leaf1.position.set(-0.5, 2, 0);
    leaf1.rotation.z = Math.PI / 6;
    plantGroup.add(leaf1);
    
    // Feuille droite
    const leaf2 = new THREE.Mesh(leafGeometry1, leafMaterial);
    leaf2.scale.set(1.5, 0.3, 1);
    leaf2.position.set(0.5, 2.2, 0);
    leaf2.rotation.z = -Math.PI / 6;
    plantGroup.add(leaf2);
    
    // Feuille du haut
    const leaf3 = new THREE.Mesh(leafGeometry1, leafMaterial);
    leaf3.scale.set(1.2, 0.3, 1);
    leaf3.position.set(0, 2.5, 0.2);
    plantGroup.add(leaf3);
    
    // Visage (sphère pour la tête)
    const faceGeometry = new THREE.SphereGeometry(0.35, 32, 32);
    const faceMaterial = new THREE.MeshStandardMaterial({
        color: 0xF5F1E8,
        roughness: 0.3
    });
    const face = new THREE.Mesh(faceGeometry, faceMaterial);
    face.position.set(0, 2.5, 0.3);
    plantGroup.add(face);
    
    // Yeux
    const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x3A3A3A
    });
    
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 2.55, 0.55);
    plantGroup.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 2.55, 0.55);
    plantGroup.add(rightEye);
    
    // Pupilles (pour suivre la souris)
    const pupilMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff
    });
    const pupilGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.1, 2.55, 0.6);
    plantGroup.add(leftPupil);
    
    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.1, 2.55, 0.6);
    plantGroup.add(rightPupil);
    
    // Sourire (torus partiel)
    const smileGeometry = new THREE.TorusGeometry(0.15, 0.02, 16, 32, Math.PI);
    const smileMaterial = new THREE.MeshStandardMaterial({
        color: 0xE8C5C0
    });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, 2.35, 0.55);
    smile.rotation.x = Math.PI;
    plantGroup.add(smile);
    
    scene.add(plantGroup);
    
    // Position de la caméra
    camera.position.z = 5;
    camera.position.y = 2;
    
    // Variables pour le suivi de la souris
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    // Suivi de la souris
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        
        time += 0.01;
        
        // Légère oscillation de la plante
        plantGroup.rotation.z = Math.sin(time) * 0.05;
        
        // Mouvement des feuilles
        leaf1.rotation.y = Math.sin(time * 0.8) * 0.1;
        leaf2.rotation.y = Math.sin(time * 0.8 + Math.PI) * 0.1;
        leaf3.rotation.x = Math.sin(time * 0.6) * 0.1;
        
        // Rotation douce vers la souris
        targetRotationY = mouseX * 0.3;
        targetRotationX = mouseY * 0.2;
        
        plantGroup.rotation.y += (targetRotationY - plantGroup.rotation.y) * 0.05;
        face.rotation.x += (targetRotationX - face.rotation.x) * 0.05;
        
        // Les yeux suivent la souris
        const eyeMovementX = mouseX * 0.05;
        const eyeMovementY = mouseY * 0.05;
        
        leftPupil.position.x = -0.1 + eyeMovementX;
        leftPupil.position.y = 2.55 + eyeMovementY;
        
        rightPupil.position.x = 0.1 + eyeMovementX;
        rightPupil.position.y = 2.55 + eyeMovementY;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Responsive
    window.addEventListener('resize', () => {
        if (!canvas) return;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
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
