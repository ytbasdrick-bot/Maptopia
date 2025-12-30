// Fichier : netlify/functions/talkToRex.js

exports.handler = async function(event, context) {
    // 1. On vérifie que la demande est bien sécurisée (POST)
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    // 2. On récupère le message du joueur
    let body;
    try { 
        body = JSON.parse(event.body); 
    } catch(e) { 
        return { statusCode: 400, body: "Erreur de données" }; 
    }
    
    const userMessage = body.message;

    // 3. RÉCUPÉRATION DE LA CLÉ (Cachée dans les paramètres Netlify)
    const API_KEY = process.env.OPENAI_API_KEY; 

    if (!API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ reply: "Erreur config : Clé API manquante sur Netlify." }) };
    }

    // 4. LA PERSONNALITÉ DE REX (Tu peux modifier le texte entre guillemets ici)
    const SYSTEM_PROMPT = `
    Tu es REX, l'Intelligence Artificielle de Maptopia pour le jeu Heartopia.
    Tu es serviable, un peu geek, et tu adores ce jeu.
    Tu dois répondre en français. Tes réponses doivent être courtes (max 3 phrases).
    
    INFOS DU JEU À CONNAITRE :
    - Pour les bugs : contacter le support via le bouton chat ou Discord.
    - Myrtilles : se trouvent dans la Forêt du Nord.
    - Poissons rares : cherchez dans la Mer Calme ou l'Océan Profond.
    - Le site Maptopia aide à localiser les ressources, mais ne remplace pas le jeu.
    Si tu ne sais pas, dis-leur gentiment de demander sur le Discord officiel.
    `;

    try {
        // 5. Appel au cerveau (OpenAI)
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Le modèle rapide et efficace
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: userMessage }
                ],
                max_tokens: 150 // Limite la longueur de la réponse
            })
        });

        const data = await response.json();
        
        // 6. On renvoie la réponse au site
        if (data.choices && data.choices[0]) {
            return {
                statusCode: 200,
                body: JSON.stringify({ reply: data.choices[0].message.content })
            };
        } else {
             return { statusCode: 500, body: JSON.stringify({ reply: "Je suis fatigué... (Erreur API)" }) };
        }

    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ reply: "Erreur de connexion au cerveau." }) };
    }
};