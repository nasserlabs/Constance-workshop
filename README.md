# L'Atelier de Constance 🌸

Un site vitrine élégant et moderne pour un atelier floral fictif.

## 📋 Description

Site web professionnel créé avec HTML, CSS et JavaScript vanilla. Design élégant avec une palette douce (vert sauge, crème, beige, rose poudré) et une mascotte 3D interactive.

## 🗂️ Structure du projet

```
Atelier de Constance/
├── index.html              # Page d'accueil
├── produits.html          # Catalogue des produits
├── a-propos.html          # Histoire de l'atelier
├── contact.html           # Page de contact
├── css/
│   └── style.css          # Styles CSS principaux
├── js/
│   └── main.js            # JavaScript (animations, mascotte 3D)
└── assets/
    ├── mascotte/
    │   └── mascotte.gltf  # Modèle 3D de la mascotte
    ├── icons/
    │   ├── logo.svg       # Logo de l'atelier
    │   └── favicon.svg    # Icône du site
    └── images/
        ├── bg-pattern.svg # Pattern de fond floral
        └── projects/
            └── placeholder.svg # Image placeholder pour produits
```

## 🚀 Utilisation

### Installation locale

1. Téléchargez tous les fichiers
2. Ouvrez `index.html` dans votre navigateur
3. C'est tout ! Aucune installation supplémentaire requise

### Navigation

- **Accueil** : Hero section avec mascotte 3D interactive et produits phares
- **Produits** : Catalogue complet avec 8 créations florales
- **À Propos** : Histoire et valeurs de l'atelier
- **Contact** : Formulaire et liens sociaux

## ✨ Fonctionnalités

### Design
- **Palette de couleurs harmonieuse** : Vert sauge, crème, beige, rose poudré
- **Typographie élégante** : Cormorant Garamond (serif) + Outfit (sans-serif)
- **Background pattern SVG** : Motif floral subtil répété
- **Animations douces** : Transitions fluides et effets hover raffinés

### Interactions
- **Navigation responsive** : Menu mobile avec hamburger
- **Mascotte 3D interactive** (Three.js) :
  - Yeux qui suivent la souris
  - Sourire amical
  - Mouvement d'oscillation naturel
  - Feuilles qui bougent doucement
- **Scroll animations** : Apparition progressive des éléments
- **Formulaire de contact** : Validation et message de confirmation
- **Hover effects** : Sur les cartes produits et liens

### Pages

#### 🏠 Accueil (index.html)
- Hero avec slogan poétique
- Présentation de l'atelier
- 3 produits phares
- Mascotte 3D qui suit la souris

#### 🌹 Produits (produits.html)
- 8 créations florales détaillées
- Cartes avec images, descriptions et prix
- Badges (Favori, Nouveau, Saisonnier, Premium)
- Boutons vers Etsy
- Section témoignages clients (4 avis)

#### 📖 À Propos (a-propos.html)
- Histoire de Constance
- Naissance du projet
- Vision et valeurs
- 4 cartes de valeurs (Authenticité, Qualité, Écoresponsabilité, Passion)

#### 📧 Contact (contact.html)
- Icônes sociales encadrées (Instagram, Facebook, Email)
- Formulaire de contact stylisé
- Effets hover élégants

## 🎨 Palette de couleurs

```css
--sage-green: #8FA08E    /* Vert sauge principal */
--cream: #F5F1E8         /* Crème doux */
--beige: #E8DCC4         /* Beige chaleureux */
--rose-powder: #E8C5C0   /* Rose poudré */
--deep-green: #5A6C57    /* Vert profond */
--warm-white: #FEFDFB    /* Blanc chaud */
--charcoal: #3A3A3A      /* Gris foncé */
```

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Grid, Flexbox, animations, variables CSS
- **JavaScript ES6+** : Interactions et animations
- **Three.js** : Rendu 3D de la mascotte
- **Google Fonts** : Cormorant Garamond & Outfit
- **SVG** : Logo, icônes, patterns

## 📱 Responsive

Le site est entièrement responsive :
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🌟 Points forts

1. **Design distinctif** : Palette florale unique, typographie raffinée
2. **Mascotte interactive** : Plante 3D souriante avec yeux suivant la souris
3. **Performance** : Pas de framework lourd, code optimisé
4. **Accessibilité** : Navigation claire, contraste respecté
5. **Animations subtiles** : Élégantes sans être envahissantes
6. **Code propre** : Commenté, organisé, maintenable

## 📝 Notes

- Les produits et avis sont fictifs
- Les liens Etsy pointent vers etsy.com (à remplacer par de vrais liens)
- Les liens sociaux sont des placeholders (#)
- Le formulaire simule l'envoi (pas de backend réel)
- La mascotte utilise Three.js r128 (CDN)

## 🎯 Personnalisation

Pour adapter le site :

1. **Couleurs** : Modifier les variables CSS dans `style.css`
2. **Contenu** : Éditer les fichiers HTML
3. **Produits** : Ajouter/modifier dans `produits.html`
4. **Images** : Remplacer les SVG placeholder par de vraies photos
5. **Formulaire** : Connecter à un service backend (EmailJS, Formspree, etc.)

## 💡 Améliorations possibles

- Ajouter un vrai système de panier
- Intégrer une galerie photo lightbox
- Connecter à une API de paiement
- Ajouter un blog
- Multilingue (FR/EN)
- Mode sombre

## 📄 Licence

Projet créé pour démonstration. Libre d'utilisation et de modification.

---

**Créé avec 💚 pour L'Atelier de Constance**
