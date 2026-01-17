// --- CONFIGURATION API & DISCORD ---
const COUNT_API_NAMESPACE = 'maptopia_heartopia_fr_v1';
const COUNT_API_KEY = 'likes';
const COUNT_API_URL_GET = `https://api.counterapi.dev/v1/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}/up`;
const COUNT_API_URL_READ = `https://api.counterapi.dev/v1/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}/`;
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1453916227893334130/_yGCAjF1nsfVQwq3C1M4lWs8STwa26zdusGW__nIeQIEl-TJehlQaf7kvEJJFdoLh1y6";

// Récupération sécurisée des textes (Fallback anglais/défaut si manquant)
function getTxt(path, defaultTxt) {
    if (typeof TEXTS === 'undefined') return defaultTxt;
    return path.split('.').reduce((o, i) => (o ? o[i] : undefined), TEXTS) || defaultTxt;
}

// --- GESTION DES LIKES ---
function initLikeSystem() {
    const likeBtn = document.getElementById('like-btn-internal');
    const likeCountSpan = document.getElementById('like-count-internal');
   
    fetch(COUNT_API_URL_READ)
        .then(res => res.json())
        .then(data => { if(likeCountSpan) likeCountSpan.innerText = data.count || 842; })
        .catch(() => { if(likeCountSpan) likeCountSpan.innerText = "842"; });
    
    const isLiked = localStorage.getItem('maptopia_user_liked') === 'true';
    if(isLiked && likeBtn) { lockLikeButton(likeBtn); }

    window.toggleLikeInternal = function() {
        if (!likeBtn || likeBtn.classList.contains('liked')) return;
        lockLikeButton(likeBtn);
        localStorage.setItem('maptopia_user_liked', 'true');

        fetch(COUNT_API_URL_GET)
            .then(res => res.json())
            .then(data => { if(likeCountSpan) likeCountSpan.innerText = data.count; });

        sendLikeToDiscord();
    };
}

function lockLikeButton(btn) {
    btn.classList.add('liked');
    btn.innerHTML = `<span class="heart-icon-anim">❤</span> ${getTxt('like.thankyou', 'MERCI !')}`;
    btn.title = getTxt('like.already', "Vous avez déjà voté !");
    btn.style.cursor = "default";
}

function sendLikeToDiscord() {
    const payload = { username: "Maptopia Votes", content: "❤️ **Un utilisateur vient d'aimer la carte !**" };
    fetch(DISCORD_WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
    }).catch(console.error);
}

// --- GESTION DU CHAT / CONTACT ---
function toggleChat() {
    const box = document.getElementById('simple-chat-box');
    if(box) box.style.display = (box.style.display === 'flex') ? 'none' : 'flex';
}

function sendToDiscord() {
    const name = document.getElementById('user-name').value.trim();
    const msg = document.getElementById('user-msg').value.trim();
    const status = document.getElementById('chat-status');
    const userLang = navigator.language || navigator.userLanguage;

    if(name === "" || msg === "") {
        status.innerText = getTxt('chat.incomplete', "⚠️ Veuillez remplir tous les champs.");
        status.style.color = "#ff5555";
        return;
    }

    status.innerText = getTxt('chat.wait', "Envoi en cours...");
    status.style.color = "#aaa";
    
    const payload = {
        username: "Maptopia Contact",
        content: `**Nouveau message reçu !**\n👤 **De:** ${name}\n🌍 **Langue détectée:** ${userLang}\n💬 **Message:**\n${msg}`
    };
    fetch(DISCORD_WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
    })
    .then(response => {
        if(response.ok) {
            status.innerText = getTxt('chat.success', "✅ Message envoyé avec succès !");
            status.style.color = "#55ff55";
            document.getElementById('user-msg').value = "";
            setTimeout(() => { toggleChat(); status.innerText = ""; }, 2000);
        } else {
            status.innerText = getTxt('chat.error', "❌ Erreur lors de l'envoi.");
            status.style.color = "#ff5555";
        }
    })
    .catch(err => {
         console.error(err);
        status.innerText = "❌ Erreur de connexion.";
        status.style.color = "#ff5555";
    });
}

// --- NAVIGATION & UI ---
function toggleMobileMenu() {
    const menu = document.getElementById('main-menu');
    if(menu) menu.classList.toggle('mobile-visible');
    const legend = document.getElementById('legend-box');
    if(menu && menu.classList.contains('mobile-visible') && legend) legend.classList.remove('mobile-visible');
}
function toggleMobileLegend() {
    const legend = document.getElementById('legend-box');
    if(legend) legend.classList.toggle('mobile-visible');
    const menu = document.getElementById('main-menu');
    if(legend && legend.classList.contains('mobile-visible') && menu) menu.classList.remove('mobile-visible');
}
function startExperience() {
    const audio = document.getElementById('main-audio');
    if(audio) audio.play().catch(() => {});
    document.getElementById('intro-screen').style.opacity = '0';
    document.getElementById('map').style.opacity = '1';
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        const welcome = document.getElementById('welcome-modal');
        if(welcome) welcome.style.display = 'flex';
    }, 800);
}
function closeWelcome() { 
    const welcome = document.getElementById('welcome-modal');
    if(welcome) welcome.style.display = 'none'; 
}

// --- CONFIGURATION CARTE ---
var bounds = [[-1000, 0], [0, 1000]];
var map = L.map('map', { crs: L.CRS.Simple, minZoom: 0, maxZoom: 3, zoom: 1, zoomControl: false, maxBounds: bounds, maxBoundsViscosity: 1.0 });
L.imageOverlay('carte.png', bounds).addTo(map);
map.setView([-500, 500], 1);
map.on('zoomstart', () => { document.body.classList.add('is-zooming'); });
map.on('zoomend', () => { document.body.classList.remove('is-zooming'); });

// --- VARIABLES GLOBALES ---
const colors = { rouge: '#e74c3c', bleu: '#3498db', vert: '#2ecc71', jaune: '#f1c40f', violet: '#9b59b6', orange: '#e67e22' };
const icons = { note: '📌', fish: '🎣', bird: '🦜', bug: '🦋', wood: '🌲', stone: '⛰️' };
const albertPath = [[-531.5, 635.6], [-530.6, 636.8], [-530, 638.6], [-527.8, 641], [-526.1, 642.5], [-523.9, 643.4], [-520.8, 644.8], [-518.1, 645], [-515.4, 645], [-512, 645], [-508.3, 645], [-503.5, 645], [-499.6, 645], [-493.6, 644.6], [-489.5, 644.8], [-485.6, 644.8], [-481.5, 644.9], [-476.3, 645.1], [-470.5, 645], [-461.4, 645], [-455.8, 645.3], [-448.5, 645.4], [-443.5, 645.4], [-439.6, 645.3], [-436.6, 645], [-432.8, 644.3], [-429.6, 643.6], [-426.5, 642.8], [-424.3, 641.5], [-419.8, 639.5], [-415, 637.1], [-409.6, 634.9], [-405, 631.8], [-400.3, 629], [-395.8, 626], [-391.6, 622.5], [-389.1, 620.8], [-387.1, 618.6], [-384.3, 615.8], [-382.1, 612.6], [-380.4, 610.4], [-379, 608.3], [-377.6, 605.5], [-376, 602.1], [-375.3, 599.3], [-374.4, 594.8], [-374.1, 590], [-373.9, 584.4], [-373.6, 581.1], [-374.8, 576.3], [-375, 571.3], [-376, 564.1], [-376.5, 557.5], [-376.6, 552.8], [-377, 548.3], [-377, 541.9], [-377, 537.1], [-376.9, 531], [-376.4, 522.8], [-375.6, 516.4], [-375.1, 511.3], [-374.6, 506.4], [-373.1, 498.4], [-370.9, 492.1], [-369.8, 487], [-367.3, 481.3], [-365, 477.1], [-363.5, 473.5], [-361.1, 468.3], [-359.1, 463.1], [-356.8, 459], [-354.4, 455], [-352.4, 450.5], [-350, 446], [-347.6, 441.6], [-345.4, 436.6], [-344.1, 432], [-342.5, 425.4], [-341.8, 420.5], [-340.9, 415.4], [-340.1, 409.9], [-339.5, 404], [-339.4, 400], [-339.5, 394.4], [-340.1, 390.9], [-340.8, 385.3], [-341.4, 380.8], [-341.9, 376.1], [-343.6, 370.1], [-345, 366], [-346.9, 361.3], [-349.3, 356.9], [-351, 352.5], [-353.6, 349.6], [-356.3, 345.8], [-359.5, 342.4], [-362.8, 339.1], [-366.1, 336.1], [-370.3, 334], [-374.3, 332], [-377.5, 330], [-380.5, 328.5], [-384, 327.1], [-388, 325.5], [-392.1, 324.9], [-397.6, 324.4], [-402.4, 324.1], [-407.6, 324.1], [-415.3, 324.6], [-420, 325.6], [-425.6, 326.9], [-428.6, 327.9], [-433.5, 329.6], [-438.4, 331.3], [-444.3, 332.9], [-448.5, 335.5], [-451.6, 337.4], [-456.1, 339], [-459, 340.3], [-462.4, 341.8], [-466, 344.4], [-471, 345], [-477.4, 345.5], [-480.1, 345.5], [-483.6, 345.8], [-487.9, 345.4], [-492.4, 345.1], [-497.6, 344.8], [-500, 344], [-504.4, 343.3], [-510, 342.4], [-513.6, 341.6], [-519.3, 340.3], [-523.1, 339.5], [-526.3, 338.8], [-529.1, 338.5], [-533.3, 337.6], [-536.4, 337.4], [-541, 337], [-544.3, 336.5], [-548, 336.6], [-553.5, 337], [-556.6, 337.5], [-561.1, 338.1], [-565.1, 339], [-571.5, 340.4], [-579.9, 343.5], [-585.6, 345.8], [-588, 346.8], [-590.8, 348], [-593.3, 349.5], [-596.8, 351.3], [-599.6, 353.8], [-602.9, 356], [-604.6, 358], [-607.3, 360.8], [-609.3, 363.9], [-610.8, 366], [-612.4, 369.9], [-613.4, 373.1], [-614.1, 376.8], [-614.6, 380.6], [-614.1, 385], [-613.9, 387.9], [-612.5, 391], [-612, 392.4], [-611.3, 396.6], [-612.1, 397.8], [-614, 399.9], [-616.1, 401.5], [-618.5, 403.3], [-620.6, 405], [-622.6, 406.4], [-625.3, 408.5], [-627.4, 411], [-629.4, 413.1], [-632.1, 417.5], [-633, 419.6], [-633.9, 422.1], [-634.1, 425.4], [-634.3, 428.4], [-634.1, 431.3], [-634, 436.3], [-633.4, 442], [-633.1, 447.4], [-632.3, 452.9], [-631.9, 458.1], [-631.1, 465.6], [-630.9, 473.1], [-630.6, 480.8], [-630.6, 487.1], [-631.1, 492], [-631.3, 497], [-631.5, 502], [-631.9, 505.5], [-631.9, 510.4], [-632.4, 516.8], [-632.6, 521.5], [-633, 526.6], [-633.4, 533.9], [-633.3, 543.3], [-633.3, 546.8], [-633.3, 549.1], [-633.3, 552.8], [-633.1, 555.9], [-633.5, 558.5], [-634.4, 562.1], [-636, 565.4], [-638.3, 570.1], [-639.3, 572.8], [-640.4, 575.6], [-640.9, 578], [-641.3, 581.4], [-640.6, 584], [-639.1, 586.5], [-637.3, 588.4], [-634.3, 589.9], [-633.3, 593.6], [-631.8, 597.1], [-631, 600.4], [-628.9, 603.4], [-625.9, 605.8], [-622.6, 608.4], [-618.4, 611.6], [-614.6, 614.3], [-610.5, 616.5], [-606.6, 618.8], [-602.5, 621.3], [-598, 623.9], [-593.6, 626], [-591, 627.9], [-585.8, 630.3], [-581.5, 632.5], [-576.3, 634.5], [-571.9, 636.4], [-568, 637.3], [-564.8, 637.8], [-559.1, 638.1], [-554.5, 638.1], [-548.4, 637.8], [-543.3, 636.4], [-538.4, 635.8], [-532.4, 634.8]];
var userPings = JSON.parse(localStorage.getItem('maptopia_pings')) || [];
var pingMarkers = {};
var tempPingMarker = null;
var dataStorage = { pnj:[], bus:[], shop:[], lieux:[], animal:[], resource:[] };
var activeResourceLayers = {}; 
var currentSingleMarker = null;

// --- FONCTIONS MARQUEURS & PATROUILLES ---
function createFinalMarker(p) {
    var markerHtml = `<div style="background:${colors[p.color]};width:28px;height:28px;border:2px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;">${icons[p.icon]}</div>`;
    var marker = L.marker(p.latlng, {icon: L.divIcon({className:'', html:markerHtml, iconSize:[28,28], iconAnchor:[14,14]})}).addTo(map);
    marker.bindPopup(`<div style="text-align:center;"><b>${p.text}</b><br><div class="coord-box">${p.latlng.lat.toFixed(1)}, ${p.latlng.lng.toFixed(1)}</div><button onclick="removeUserPing('${p.id}')" style="width:100%; background:#e74c3c; color:white; border:none; padding:5px; margin-top:5px; cursor:pointer; border-radius:3px;">Supprimer</button></div>`);
    pingMarkers[p.id] = marker;
}

map.on('contextmenu', (e) => {
    if(tempPingMarker) map.removeLayer(tempPingMarker);
    var mid = "temp_" + Date.now();
    var tempHtml = `<div style="background:gray;width:28px;height:28px;border:2px dashed white;border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0.7;">?</div>`;
    tempPingMarker = L.marker(e.latlng, {icon: L.divIcon({className:'', html:tempHtml, iconSize:[28,28], iconAnchor:[14,14]})}).addTo(map);
    tempPingMarker.tempColor = 'bleu';
    var div = document.createElement('div');
    div.style.minWidth = "180px";
    
    div.innerHTML = `<b style="display:block;margin-bottom:5px;text-align:center;">Nouveau Marqueur</b><input type="text" id="in-${mid}" placeholder="" style="width:100%; padding:5px; margin-bottom:10px; box-sizing:border-box;"><div style="display:flex; gap:5px; margin-bottom:10px; justify-content:center;">${Object.entries(colors).map(([k,v]) => `<div style="background:${v}; width:20px;
    height:20px; border-radius:50%; cursor:pointer; border:1px solid transparent;" onclick="selectPingColor('${k}', this)"></div>`).join('')}</div><button onclick="confirmPing('${mid}',${e.latlng.lat},${e.latlng.lng})" style="width:100%; background:#27ae60; color:white; border:none; padding:8px; cursor:pointer; border-radius:4px; font-weight:bold;">CONFIRMER</button><button onclick="cancelPing()" style="width:100%; background:#95a5a6;
    color:white; border:none; padding:5px; cursor:pointer; border-radius:4px; margin-top:5px; font-size:10px;">ANNULER</button>`;
    tempPingMarker.bindPopup(div, {closeOnClick: false}).openPopup();
});

window.selectPingColor = (c, el) => { tempPingMarker.tempColor = c; el.parentElement.querySelectorAll('div').forEach(d => d.style.borderColor='transparent'); el.style.borderColor='black'; };
window.cancelPing = () => { if(tempPingMarker) { map.removeLayer(tempPingMarker); tempPingMarker = null; } };
window.confirmPing = (mid, lat, lng) => {
    var v = document.getElementById('in-'+mid).value || "Lieu";
    var id = "id_"+Date.now();
    var newPing = {id:id, latlng:{lat,lng}, 
    text:v, color:tempPingMarker.tempColor, icon:'note'};
    userPings.push(newPing);
    localStorage.setItem('maptopia_pings', JSON.stringify(userPings));
    map.removeLayer(tempPingMarker);
    tempPingMarker = null;
    createFinalMarker(newPing);
    updateUserLegend();
};
window.removeUserPing = (id) => { if(pingMarkers[id]) map.removeLayer(pingMarkers[id]);
userPings = userPings.filter(p => p.id != id); localStorage.setItem('maptopia_pings', JSON.stringify(userPings)); updateUserLegend(); };

function updateUserLegend() {
    const list = document.getElementById('legend-list'); 
    if(!list) return;
    list.innerHTML = "";
    userPings.forEach(p => {
        const div = document.createElement('div'); div.className='legend-item';
        div.innerHTML = `<div style="width:100%; display:flex; justify-content:space-between; align-items:center;"><span onclick="map.flyTo([${p.latlng.lat},${p.latlng.lng}], 2)" style="cursor:pointer;">${icons[p.icon]} ${p.text}</span><button onclick="removeUserPing('${p.id}')" style="background:none; border:none; color:white; cursor:pointer; font-weight:bold;">X</button></div><div class="coord-box">${p.latlng.lat.toFixed(1)}, ${p.latlng.lng.toFixed(1)}</div>`;
        list.appendChild(div);
    });
}

function triggerMovement(item) {
    if (!map.hasLayer(item.marker)) return;
    if(item.marker._icon) item.marker._icon.classList.add('smooth-move');
    let newLat = item.pos[0] + (Math.random() - 0.5) * (item.radius / 1.5);
    let newLng = item.pos[1] + (Math.random() - 0.5) * (item.radius / 1.5);
    item.marker.setLatLng([newLat, newLng]);
    item.moveTimer = setTimeout(() => triggerMovement(item), 7000);
}

function startAlbertPatrol(marker, index) {
    if (!map.hasLayer(marker)) return;
    if(marker._icon) { marker._icon.classList.remove('smooth-move'); marker._icon.classList.add('albert-walk'); }
    let nextIndex = (index + 1) % albertPath.length;
    let nextPos = albertPath[nextIndex];
    marker.setLatLng(nextPos);
    marker.moveTimer = setTimeout(() => { startAlbertPatrol(marker, nextIndex); }, 2000);
}

function register(cat, pos, name, img, opts = {}) {
    let m;
    var iSize;
    if (cat === 'pnj') iSize = [35,35];
    else if (cat === 'resource') iSize = [30,30];
    else iSize = [60,60];

    var iAnchor;
    if (cat === 'pnj') iAnchor = [17,17];
    else if (cat === 'resource') iAnchor = [15,15];
    else iAnchor = [30,60];

    var customClass = (cat === 'pnj') ? 'pnj-icon' : '';
    
    // --- CORRECTION MOBILE : DÉSACTIVÉ POUR ÉVITER LES IMAGES MANQUANTES ---
    // Si vous avez un dossier "pnjmobil" sur votre serveur, vous pouvez décommenter la ligne ci-dessous :
    // if(cat === 'pnj' && window.innerWidth <= 768) img = img.replace('pnj/', 'pnjmobil/');
    
    if(opts.type) { 
        m = L.marker(pos, { icon: L.divIcon({ className: 'invisible-marker', html: '', iconSize: [1, 1] }) }).bindTooltip(name, { permanent: true, direction: 'center', className: opts.type });
        if(opts.startOn) m.addTo(map); 
    } else {
        if (cat === 'resource') {
             m = L.marker(pos, { icon: L.icon({ iconUrl: img, iconSize: iSize, className: 'resource-icon' }) });
        } else {
             m = L.marker(pos, { icon: L.icon({ iconUrl: img, iconSize: iSize, iconAnchor: iAnchor, className: customClass }) });
        }

        if(cat === 'pnj') { 
            var popupContent = `<div class='heartopia-popup'>${name}</div>`; 
            var customOptions = { className: 'heartopia-popup', closeButton: false, offset: [0, -10] };
            m.bindPopup(popupContent, customOptions); 
        } else if(cat !== 'bus' && cat !== 'shop' && cat !== 'resource') { 
            m.bindPopup(`<b>${name}</b>`);
        }
        
        if(opts.startOn || cat === 'pnj') m.addTo(map);
    }
    dataStorage[cat].push({name, pos, marker:m, category:cat, radius: opts.radius || 50, moveTimer: null});
}

// --- CHARGEMENT DES DONNÉES DEPUIS data-fr.js ---
function loadExternalData() {
    if(typeof PNJ_DATA !== 'undefined') PNJ_DATA.forEach(d => register('pnj', [d[0], d[1]], d[2], d[3]));
    if(typeof BUS_DATA !== 'undefined') BUS_DATA.forEach(b => register('bus', b[1], b[0], 'bus.png', {startOn: true}));
    if(typeof SHOP_DATA !== 'undefined') SHOP_DATA.forEach(s => register('shop', [s[0],s[1]], s[2], s[3]));
    if(typeof ANIMAL_DATA !== 'undefined') ANIMAL_DATA.forEach(a => register('animal', a.pos, a.name, a.img, {radius: a.radius}));
    if(typeof LIEUX_DATA !== 'undefined') LIEUX_DATA.forEach(l => register('lieux', l.pos, l.name, '', {type:l.type, startOn:l.startOn}));

    setTimeout(initMenu, 300);
    let albert = dataStorage.pnj.find(i => i.name === "Albert Jr.");
    if(albert) startAlbertPatrol(albert.marker, 0);
    userPings.forEach(p => createFinalMarker(p));
    updateUserLegend();
    initLikeSystem();
}

// SECURITÉ IMAGES MANQUANTES : DÉSACTIVÉ POUR DÉBOGAGE
/*
document.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none'; 
    }
}, true);
*/

function initMenu() {
    var menuCtrl = L.control({position: 'topleft'});
    menuCtrl.onAdd = function() {
        var div = L.DomUtil.create('div', 'leaflet-control-layers');
        div.id = "main-menu";
        const t = (typeof TEXTS !== 'undefined') ? TEXTS.menu : {};

        div.innerHTML = `
        <div id="c-pnj"><div class="accordion-title title-pnj">${t.pnj || 'PNJs'}</div><div class="accordion-content"></div></div>
        <div id="c-animal"><div class="accordion-title title-animal">${t.animals || 'ANIMAUX'}</div><div class="accordion-content"></div></div>
        <div id="c-bus"><div class="accordion-title title-bus">${t.bus || 'BUS'}</div><div class="accordion-content"></div></div>
        <div id="c-shop"><div class="accordion-title title-shop">${t.shops || 'MAGASINS'}</div><div class="accordion-content"></div></div>
        <div id="c-lieux"><div class="accordion-title title-lieux">${t.places || 'LIEUX'}</div><div class="accordion-content"></div></div>
        <div id="c-fish"><div class="accordion-title title-poisson">${t.fish || 'POISSONS'}</div><div class="accordion-content"></div></div>
        <div id="c-bug"><div class="accordion-title title-insecte">${t.bugs || 'INSECTES'}</div><div class="accordion-content"></div></div>
        <div id="c-bird"><div class="accordion-title title-bird">${t.birds || 'OISEAUX'}</div><div class="accordion-content"></div></div>
        <div id="c-resource"><div class="accordion-title title-resource">${t.resources || 'RESSOURCES'}</div><div class="accordion-content"></div></div>`;
        
        L.DomEvent.disableScrollPropagation(div);
        L.DomEvent.disableClickPropagation(div);
        return div;
    };
    menuCtrl.addTo(map);

    ['pnj','animal','bus','shop','lieux'].forEach(cat => {
        var box = document.getElementById('c-'+cat);
        if(!box) return;
        var content = box.querySelector('.accordion-content');
        box.querySelector('.accordion-title').onclick = () => {
            const isOpening = !content.classList.contains('active');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if(isOpening) { 
                content.classList.add('active'); 
                if(currentSingleMarker) { if(currentSingleMarker.moveTimer) clearTimeout(currentSingleMarker.moveTimer); map.removeLayer(currentSingleMarker.marker); currentSingleMarker = null; } 
            }
        };
        dataStorage[cat].forEach(item => {
            var el = document.createElement('div'); el.className = 'menu-item'; el.innerHTML = item.name;
            el.onclick = () => {
                if (cat === 'bus' || cat === 'lieux' || (cat === 'pnj' && item.name !== "Albert Jr.")) { 
                    map.flyTo(item.pos, 3, { animate: true, duration: 1.5 });
                    if(cat === 'pnj') item.marker.openPopup(); 
                } else if (cat === 'pnj' && item.name === "Albert Jr.") { 
                    map.flyTo(item.marker.getLatLng(), 3, { animate: true });
                    item.marker.openPopup(); 
                    if(!item.marker.moveTimer) startAlbertPatrol(item.marker, 0); 
                } else {
                    if(currentSingleMarker) { if(currentSingleMarker.moveTimer) clearTimeout(currentSingleMarker.moveTimer); map.removeLayer(currentSingleMarker.marker); }
                    let albert = dataStorage.pnj.find(i => i.name === "Albert Jr.");
                    if(albert && albert.marker.moveTimer) { clearTimeout(albert.marker.moveTimer); albert.marker.moveTimer = null; if(albert.marker._icon) albert.marker._icon.classList.remove('albert-walk'); }
                    currentSingleMarker = item;
                    item.marker.setLatLng(item.pos).addTo(map); map.flyTo(item.pos, 3, { animate: true });
                    if(item.marker._icon) { item.marker._icon.classList.remove('smooth-move'); item.marker._icon.classList.remove('albert-walk'); }
                    if(cat === 'animal') setTimeout(() => triggerMovement(item), 500);
                }
                if(window.innerWidth <= 768) toggleMobileMenu();
            };
            content.appendChild(el);
        });
    });

    let savedCollection = JSON.parse(localStorage.getItem('maptopia_collection')) || {};
    ['fish', 'bug', 'bird'].forEach(type => {
        let box = document.getElementById('c-'+type);
        if (!box) return;
        let content = box.querySelector('.accordion-content');
        let list;
        if (type === 'fish') list = (typeof fishList !== 'undefined') ? fishList : [];
        else if (type === 'bug') list = (typeof bugList !== 'undefined') ? bugList : [];
        else list = (typeof birdList !== 'undefined') ? birdList : [];

        box.querySelector('.accordion-title').onclick = () => {
            const isOpening = !content.classList.contains('active');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if (isOpening) {
                content.classList.add('active');
                if (currentSingleMarker) {
                    if (currentSingleMarker.moveTimer) clearTimeout(currentSingleMarker.moveTimer);
                    map.removeLayer(currentSingleMarker.marker);
                    currentSingleMarker = null;
                }
            }
        };
        list.forEach(item => {
            let el = document.createElement('div'); el.className = 'menu-item';
            let chk = document.createElement('input'); chk.type = 'checkbox'; chk.className = 'collection-check';
            chk.checked = !!savedCollection[item.name];
            chk.onclick = (e) => { e.stopPropagation(); savedCollection[item.name] = chk.checked; localStorage.setItem('maptopia_collection', JSON.stringify(savedCollection)); };
            let span = document.createElement('span'); span.innerText = item.name; span.style.flexGrow = "1";
            el.appendChild(chk); el.appendChild(span);
            el.onclick = (e) => {
                if (e.target.type === 'checkbox') return;
                openOverlay(item.name, item.bg, item.cond, item.heure);
                if (window.innerWidth <= 768) toggleMobileMenu();
            };
            content.appendChild(el);
        });
    });

    var resContainer = document.querySelector(`#c-resource .accordion-content`);
    var resTitle = document.querySelector(`#c-resource .accordion-title`);
    if(resContainer && resTitle && typeof resourcesData !== 'undefined') {
        resTitle.onclick = () => {
            const isOpening = !resContainer.classList.contains('active');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if (isOpening) {
                resContainer.classList.add('active');
                if (currentSingleMarker) {
                    if (currentSingleMarker.moveTimer) clearTimeout(currentSingleMarker.moveTimer);
                    map.removeLayer(currentSingleMarker.marker);
                    currentSingleMarker = null;
                }
            }
        };
        Object.keys(resourcesData).forEach(resName => {
            var data = resourcesData[resName];
            var div = document.createElement('div'); div.className = 'menu-item';
            div.innerText = resName + " (" + data.positions.length + ")";
            div.onclick = function() { toggleResourceGroup(resName, data, this); };
            resContainer.appendChild(div);
        });
    }

    const mainMenu = document.getElementById('main-menu');
    if(mainMenu) {
        L.DomEvent.disableScrollPropagation(mainMenu);
        L.DomEvent.disableClickPropagation(mainMenu);
    }
}

function toggleResourceGroup(name, data, btnElement) {
    if (activeResourceLayers[name]) {
        activeResourceLayers[name].forEach(m => map.removeLayer(m));
        delete activeResourceLayers[name];
        btnElement.classList.remove('active-resource');
    } else {
        var markers = [];
        data.positions.forEach(pos => {
            var m = L.marker(pos, { icon: L.icon({ iconUrl: data.icon, iconSize: [30, 30], className: 'resource-icon' }) }).addTo(map).bindPopup(name);
            markers.push(m);
        });
        activeResourceLayers[name] = markers;
        btnElement.classList.add('active-resource');
        if (name === "Fluorite" || name === "Bois de chêne glissant") {
             if (data.positions.length > 0) map.flyTo(data.positions[0], 4, { duration: 1.5 });
        }
    }
    if(window.innerWidth <= 768) toggleMobileMenu();
}

function openOverlay(name, img_loc, img_weather, img_time) {
    document.getElementById('info-name').innerText = name;
    const loc = document.getElementById('info-loc');
    const weather = document.getElementById('info-weather');
    const time = document.getElementById('info-time');
    if(loc) loc.src = img_loc || '';
    if(weather) weather.src = img_weather || '';
    if(time) time.src = img_time || '';
    document.getElementById('overlay-info').style.display = 'flex';
}

// --- LOGIQUE QUIZ ---
let currentQ = 0;
function openQuiz() {
    if(typeof QUIZ_DATA === 'undefined') return;
    currentQ = 0;
    const quiz = document.getElementById('quiz-container');
    if(quiz) quiz.style.display = 'block';
    showQuestion();
}
function closeQuiz() { 
    const quiz = document.getElementById('quiz-container');
    if(quiz) quiz.style.display = 'none'; 
}
function showQuestion() {
    let q = QUIZ_DATA[currentQ];
    const quest = document.getElementById('quiz-question');
    if(quest) quest.innerText = `Question ${currentQ + 1}/30 : ${q.q}`;
    let optContainer = document.getElementById('quiz-options');
    if(!optContainer) return;
    optContainer.innerHTML = "";
    const feedback = document.getElementById('quiz-feedback');
    if(feedback) feedback.innerText = "";
    q.o.forEach((opt, i) => {
        let btn = document.createElement('div'); btn.className = 'quiz-option'; btn.innerText = opt;
        btn.onclick = () => {
            if(i === q.a) {
                if(feedback) feedback.innerText = getTxt('quiz.success', "✅ BRAVO !");
                if(feedback) feedback.style.color = "green";
                setTimeout(() => { currentQ++; if(currentQ < 30) showQuestion(); else finishQuiz(); }, 1000);
            } else {
                if(feedback) feedback.innerText = getTxt('quiz.error', "❌ ERREUR !");
                if(feedback) feedback.style.color = "red";
            }
        };
        optContainer.appendChild(btn);
    });
}
function finishQuiz() {
    const quest = document.getElementById('quiz-question');
    if(quest) quest.innerText = getTxt('quiz.finishTitle', "🏆 EXPERT CONFIRMED !");
    const optContainer = document.getElementById('quiz-options');
    if(optContainer) optContainer.innerHTML = `<p>${getTxt('quiz.finishText', "Félicitations !")}</p>`;
    const feedback = document.getElementById('quiz-feedback');
    if(feedback) feedback.innerText = "";
}

// LANCEMENT
loadExternalData();
