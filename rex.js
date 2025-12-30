// Fichier : rex.js (Interface Client)

// Fonction Ouvrir/Fermer
function toggleRex() {
    const chatBox = document.getElementById('rex-chat-container');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
        const msgs = document.getElementById('rex-messages');
        if (msgs.innerHTML.trim() === "") {
            addRexMessage("Salut ! Je suis REX, ta nouvelle IA. Pose-moi une question sur le jeu ! 🤖");
        }
    } else {
        chatBox.style.display = 'none';
    }
}

// Afficher un message
function addRexMessage(text, isUser = false) {
    const messagesDiv = document.getElementById('rex-messages');
    const msgDiv = document.createElement('div');
    
    msgDiv.style.marginBottom = "8px";
    msgDiv.style.padding = "8px 12px";
    msgDiv.style.borderRadius = "15px";
    msgDiv.style.maxWidth = "85%";
    msgDiv.style.fontSize = "14px";
    msgDiv.style.lineHeight = "1.4";

    if (isUser) {
        msgDiv.style.background = "#d4af37"; // Doré
        msgDiv.style.color = "white";
        msgDiv.style.marginLeft = "auto";
        msgDiv.innerHTML = text;
    } else {
        msgDiv.style.background = "#f1f1f1"; // Gris
        msgDiv.style.color = "#333";
        msgDiv.style.marginRight = "auto";
        // Convertit les sauts de ligne pour l'affichage HTML
        msgDiv.innerHTML = `<strong>REX:</strong> ${text.replace(/\n/g, '<br>')}`;
    }
    
    messagesDiv.appendChild(msgDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Envoyer la question (Cerveau)
async function askRex() {
    const inputField = document.getElementById('rex-user-input');
    const userText = inputField.value.trim();
    if (userText === "") return;

    // 1. Afficher question utilisateur
    addRexMessage(userText, true);
    inputField.value = ""; 

    // 2. Indicateur de chargement
    const loadingDiv = document.createElement('div');
    loadingDiv.id = "rex-loading";
    loadingDiv.innerHTML = "<small style='color:#888; margin-left:10px;'>REX réfléchit...</small>";
    document.getElementById('rex-messages').appendChild(loadingDiv);

    try {
        // 3. APPEL DU FICHIER SECURISE (Le backend)
        const response = await fetch("/.netlify/functions/talkToRex", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userText })
        });

        const data = await response.json();
        
        // Supprimer le "REX réfléchit..."
        const loadingEl = document.getElementById('rex-loading');
        if(loadingEl) loadingEl.remove();

        if (data.reply) {
            addRexMessage(data.reply);
        } else {
            addRexMessage("Désolé, je n'ai pas compris.");
        }

    } catch (error) {
        const loadingEl = document.getElementById('rex-loading');
        if(loadingEl) loadingEl.remove();
        addRexMessage("Erreur de connexion. (Est-ce que le site est bien en ligne sur Netlify ?)");
    }
}

// Touche Entrée pour envoyer
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('rex-user-input');
    if(input) {
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") askRex();
        });
    }
});