// Configuration
const COUNT_API_NAMESPACE = 'maptopia_heartopia_com_v1'; // Nouveau namespace pour le .com
const COUNT_API_KEY = 'likes';

// Initialisation de la carte
// Coordonnées approximatives pour centrer sur la France/Europe ou votre monde imaginaire
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2
});

// Dimensions de votre image (A ajuster selon votre image maptopia.jpg)
const w = 2048;
const h = 2048;
const southWest = map.unproject([0, h], map.getMaxZoom()-1);
const northEast = map.unproject([w, 0], map.getMaxZoom()-1);
const bounds = new L.LatLngBounds(southWest, northEast);

// Ajouter l'image de la carte
L.imageOverlay('maptopia.jpg', bounds).addTo(map);
map.setMaxBounds(bounds);
map.fitBounds(bounds);

// Icônes personnalisées
const createIcon = (color) => {
    return L.divIcon({
        className: 'custom-pin',
        html: `<span style="font-size: 2rem; color: ${color}; text-shadow: 2px 2px 0 #000;">📍</span>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -35]
    });
};

const icons = {
    ville: createIcon('#e74c3c'),    // Rouge
    foret: createIcon('#27ae60'),    // Vert
    montagne: createIcon('#7f8c8d'), // Gris
    special: createIcon('#f1c40f')   // Jaune
};

// Ajouter les marqueurs depuis data-fr.js
// On suppose que data-fr.js définit une variable 'locations'
if (typeof locations !== 'undefined') {
    locations.forEach(loc => {
        L.marker(loc.coords, { icon: icons[loc.type] || icons.special })
            .bindPopup(`
                <div class="custom-popup">
                    <div class="popup-title">${loc.name}</div>
                    <div class="popup-desc">${loc.desc}</div>
                </div>
            `)
            .addTo(map);
    });
}

// Gestion des Likes avec CountAPI
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

// Récupérer le nombre de likes actuel
fetch(`https://api.countapi.xyz/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`)
    .then(res => res.json())
    .then(res => {
        likeCount.innerText = res.value;
    })
    .catch(err => console.log('Erreur compteur:', err));

// Ajouter un like au clic
likeBtn.addEventListener('click', () => {
    // Petit effet visuel
    likeBtn.style.transform = "scale(1.2)";
    setTimeout(() => likeBtn.style.transform = "scale(1)", 200);

    // Vérifier si déjà liké (simple stockage local)
    if(localStorage.getItem('hasLiked')) {
        alert("Vous avez déjà donné votre J'aime ! Merci !");
        return;
    }

    fetch(`https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`)
        .then(res => res.json())
        .then(res => {
            likeCount.innerText = res.value;
            localStorage.setItem('hasLiked', 'true');
            likeBtn.classList.add('liked'); // Ajouter une classe pour changer le style si besoin
        });
});

// Supprimer l'écran de chargement
window.addEventListener('load', () => {
    const loader = document.getElementById('loading');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Fonction de partage (Copier le lien)
function copyLink() {
    // L'adresse de votre nouveau site
    const url = 'https://www.maptopia-asdrick.com';
    
    navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector('.btn-share');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<span class="icon">✅</span> Copié !';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Erreur copie:', err);
        prompt("Copiez le lien ci-dessous :", url);
    });
}
