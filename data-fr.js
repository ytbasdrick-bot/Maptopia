// --- DONNÉES FRANÇAISES (data-fr.js) ---

// 1. TEXTES UI (Pour le multilingue)
const TEXTS = {
    title: "MAPTOPIA FR",
    enterBtn: "✨ ENTRER SUR LA CARTE ✨",
    menu: {
        pnj: "PNJs",
        animals: "ANIMAUX",
        bus: "BUS",
        shops: "MAGASINS",
        places: "LIEUX",
        fish: "POISSONS",
        bugs: "INSECTES",
        birds: "OISEAUX",
        resources: "RESSOURCES"
    },
    chat: {
        success: "✅ Message envoyé avec succès !",
        error: "❌ Erreur lors de l'envoi.",
        incomplete: "⚠️ Veuillez remplir tous les champs.",
        wait: "Envoi en cours..."
    },
    quiz: {
        success: "✅ BRAVO !",
        error: "❌ ERREUR !",
        finishTitle: "🏆 EXPERT CONFIRMÉ !",
        finishText: "Vous connaissez Heartopia sur le bout des doigts.",
        quitBtn: "QUITTER LE QUIZ"
    },
    like: {
        thankyou: "MERCI !",
        already: "Vous avez déjà voté !"
    }
};

// 2. LISTE DES PNJS
const PNJ_DATA = [
    [-471, 501, "Bob", "pnj/bob.png"],
    [-526, 499, "Atara", "pnj/atara.png"],
    [-478, 493, "Collectionneur", "pnj/collectioneur.png"],
    [-469, 488, "Dorothée", "pnj/dorothée.png"],
    [-446, 493, "Massimo", "pnj/massimo.png"],
    [-412, 418, "Ka Ching", "pnj/kaching.png"], /* Corrigé sans espace */
    [-399, 591, "Andrew", "pnj/andrew.png"],
    [-259, 522, "Eric", "pnj/eric.png"],
    [-456, 549, "Vanya", "pnj/vanya.png"],
    [-502, 582, "Naniwa", "pnj/naniwa.png"],
    [-502, 519, "Mme Joan", "pnj/mmejoan.png"], /* Corrigé sans espace */
    [-807, 419, "Will", "pnj/will.png"],
    [-355, 809, "Patti", "pnj/patti.png"],
    [-653, 225, "Vernie", "pnj/vernie.png"],
    [-498, 526, "Bailey j", "pnj/bayleyj.png"],
    [-528.3, 560.3, "Blanc", "pnj/blanc.png"],
    [-499.8, 499.0, "Annie", "pnj/annie.png"],
    [-532.4, 634.8, "Albert Jr.", "pnj/albertjr.png"], /* Corrigé sans espace */
    [-734.8, 445.8, "Bill", "pnj/bill.png"],
    [-509.4, 414, "Doris (pluie)", "pnj/doris.png"]
];

// 3. BUS
const BUS_DATA = [
    ["Banlieue Ouest",[-533,340]], ["Banlieue Village",[-519,639]], ["Village Pêcheurs",[-654,479]], 
    ["Champ Fleurs",[-532,218]], ["Montagne Thermale",[-222,512]], ["Banlieue Nord",[-373,480]], 
    ["Place Centrale",[-497,481]], ["Forêt",[-500,798]]
];

// 4. MAGASINS (Noms de fichiers harmonisés en minuscules)
const SHOP_DATA = [
    [-472,487,"Vêtements","vetement.png"],
    [-474,503,"Meubles","meuble.png"],     /* Corrigé : Meuble -> meuble */
    [-496.4,520.6,"Animaux","chien.png"],
    [-440,467,"Librairie","librairie.png"] /* Corrigé : Librairie -> librairie */
];

// 5. ANIMAUX
const ANIMAL_DATA = [
    {pos: [-691, 783], name: "Panda", img: "panda.png", radius: 60},
    {pos: [-184, 291], name: "Capybara", img: "capybara.png", radius: 50},
    {pos: [-533, 340], name: "Lapin", img: "lapin.png", radius: 40},
    {pos: [-649, 185], name: "Renard", img: "renard.png", radius: 70},
    {pos: [-737, 512], name: "Loutre", img: "loutre.png", radius: 40},
    {pos: [-354.3, 277.3], name: "Vison", img: "vison.png", radius: 10},
    {pos: [-531, 805], name: "Cerf", img: "cerf.png", radius: 60},
    {pos: [-725, 208], name: "Lama", img: "lama.png", radius: 50}
];

// 6. LIEUX
const LIEUX_DATA = [
    {pos:[-538,492], name:"Place Centrale", type:"label-ville", startOn:true}, 
    {pos:[-692,506], name:"Village Pêcheurs", type:"label-ville", startOn:true}, 
    {pos:[-438,513], name:"Rue des Habitants", type:"label-ville", startOn:true}, 
    {pos:[-649,185], name:"Champ de Fleurs", type:"label-ville", startOn:true}, 
    {pos:[-440,184], name:"Montagne de la Baleine", type:"label-ville", startOn:true}, 
    {pos:[-184,291], name:"Les Ruines", type:"label-ville", startOn:true}, 
    {pos:[-223,501], name:"Montagne Thermale", type:"label-ville", startOn:true}, 
    {pos:[-228,627], name:"Falaise Rocheuse", type:"label-ville", startOn:true}, 
    {pos:[-531,805], name:"Forêt des Chênes", type:"label-ville", startOn:true}, 
    {pos:[-494,429], name:"Rue des Arts", type:"label-ville", startOn:true}, 
    {pos:[-510,558], name:"Rue des Jardins", type:"label-ville", startOn:true}, 
    {pos:[-736,602], name:"Quai Oriental", type:"label-ville", startOn:true}, 
    {pos:[-690,402], name:"Le Quai", type:"label-ville", startOn:true}, 
    {pos:[-780,387], name:"Phare", type:"label-ville", startOn:true}, 
    {pos:[-691,783], name:"Tremplin", type:"label-ville", startOn:true}, 
    {pos:[-338,933], name:"Île de la Forêt", type:"label-ville", startOn:true}, 
    {pos:[-587,406], name:"Banlieue", type:"label-ville", startOn:true}, 
    {pos:[-725,208], name:"Plage Violette", type:"label-ville", startOn:true}, 
    {pos:[-783,478], name:"Mer Calme", type:"label-eau", startOn:true}, 
    {pos:[-534,92], name:"Mer de la Baleine", type:"label-eau", startOn:true}, 
    {pos:[-68,497], name:"Mer Ancienne", type:"label-eau", startOn:true}, 
    {pos:[-536,232], name:"Lac de la Prairie", type:"label-eau", startOn:true}, 
    {pos:[-337,319], name:"Rivière Aurore", type:"label-eau", startOn:true}, 
    {pos:[-176,394], name:"Lac Volcanique", type:"label-eau", startOn:true}, 
    {pos:[-265,537], name:"Lac de la source Thermale", type:"label-eau", startOn:true}, 
    {pos:[-344,652], name:"Rivière Peu Profonde", type:"label-eau", startOn:true}, 
    {pos:[-598,748], name:"Lac de la Forêt", type:"label-eau", startOn:true}, 
    {pos:[-431,774], name:"Haut Lac Forêt", type:"label-eau", startOn:true}, 
    {pos:[-608,481], name:"Lac de Banlieue", type:"label-eau", startOn:true}, 
    {pos:[-669,368], name:"Rivière Tranquille", type:"label-eau", startOn:true}, 
    {pos:[-674,627], name:"Rivière Arbres Géants", type:"label-eau", startOn:true}, 
    {pos:[-600,600], name:"Champ de Fleurs au Moulin", type:"label-ville", startOn:true}, 
    {pos:[-670,450], name:"Ponton Est", type:"label-ville", startOn:true}
];

// 7. RESSOURCES
const resourcesData = {
    "Framboise": { icon: "resource/framboise.png", positions: [[-680.8, 330.9], [-668.5, 352.1], [-667.9, 268.5], [-648.3, 288.6], [-613.5, 317.4], [-602.8, 274.5], [-617.6, 211.6], [-571.5, 254.4], [-538.9, 208.6], [-527.8, 251.6], [-535.8, 288.3], [-503.1, 242.9], [-495, 222.4], [-453.8, 222.4], [-438.6, 246], [-395, 247.4], [-387.1, 269.5]] },
    "Myrtille": { icon: "resource/myrtille.png", positions: [[-642.9, 371.9], [-631.9, 368.4], [-628.5, 365.5], [-606.8, 350.3], [-602.5, 342.3], [-590.1, 334.1], [-575.6, 332.1], [-562.1, 330], [-544.9, 324.5], [-518.4, 320.3], [-515.9, 320.5], [-500.8, 321.1], [-479.3, 328.6], [-468.3, 320], [-437.3, 313.9], [-411.4, 311.4], [-400.3, 311.4], [-379.5, 304.1], [-327.4, 352], [-313.6, 339], [-328.6, 371.5], [-324.4, 389.3], [-297.9, 410.8], [-271.6, 395.4], [-319.9, 413.5], [-330.4, 421.6], [-333.4, 450], [-338.6, 468.6], [-297.4, 484.4], [-349, 489.4], [-356.5, 499.3], [-360.4, 526.4], [-355.5, 545.1], [-352.9, 565.9], [-316, 558.1], [-363.6, 578.4], [-365.3, 609], [-360.9, 628.1], [-343, 634], [-388, 655.4], [-400.9, 654.3], [-421.9, 656.4], [-444.1, 670.6], [-462.5, 654], [-476.8, 654.6], [-491.6, 656.3], [-506.4, 672.4], [-525.4, 688], [-542.6, 650], [-559.3, 644.9], [-575.6, 651], [-597.8, 643.8], [-604.8, 633.8], [-627.9, 619.4]] },
    "Pomme": { icon: "resource/pomme.png", positions: [[-356.3, 493], [-365.4, 560.1], [-362.4, 581], [-324.6, 570.1], [-296, 610.3], [-365.6, 619.5], [-362.8, 628.5], [-393.5, 654.8], [-420.6, 653.3], [-436.1, 665.4], [-444.4, 685.1], [-436.6, 697.5], [-458.4, 744.9], [-505, 677.3], [-494.5, 657], [-459.8, 653.6], [-530.1, 677.9], [-540.1, 648.6], [-592.8, 676.6], [-606.9, 634.1], [-629.3, 623]] },
    "Grand Arbre": { icon: "resource/grand arbre.png", positions: [[-612, 424.5], [-641.8, 369], [-351, 329.5], [-414.3, 337.1], [-396.3, 608.9], [-376.3, 624], [-616, 593.6], [-672.3, 642]] },
    "Pierre": { icon: "resource/pierre.png", positions: [[-615.9, 316], [-641.5, 278.8], [-558.4, 257.4], [-535, 292], [-499.5, 241.1], [-466.8, 283.1], [-407.1, 244.1], [-284, 402.8], [-254.6, 367.9], [-309.4, 479.1], [-263, 466.6], [-289.1, 544.6], [-315.5, 567.9], [-298.6, 625.4], [-391.3, 726.9], [-443.6, 697], [-468.6, 733.8], [-519, 714.9], [-564.9, 732.8], [-605.1, 680.3], [-673.9, 684.1]] },
    "Orange": { icon: "resource/orange.png", positions: [[-650.1, 370.9], [-639.5, 372], [-607.3, 351.4], [-602.9, 343.5], [-588.6, 336.6], [-559.6, 329.5], [-542.1, 324.8], [-515, 319.5], [-470.5, 321], [-461.4, 271.5], [-410.8, 314], [-397.3, 310.1], [-310.9, 339.3], [-327.6, 373.9], [-324.9, 391.9], [-295.4, 411.1], [-330.4, 420.9], [-333.8, 452.9]] },
    "Cèpe de Bordeaux": { 
        icon: "resource/cépes de bordeaux.png", 
        positions: [
            [-615, 796.9], [-620, 778.1], [-610.6, 759.9], [-634.9, 745.5], 
            [-650, 773.5], [-639, 800.6], [-543.5, 776.3], [-523.6, 777], 
            [-524.3, 818.9], [-479.9, 780.8], [-464.3, 775.6], [-472.1, 801], 
            [-477.3, 825.8], [-438.4, 789.3], [-410.5, 776.8], [-404.1, 794.1], 
            [-415.8, 799.1]
        ] 
    },
    "Truffe Noire": { 
        icon: "resource/truffes noires.png", 
        positions: [
            [-358.1, 911.1], [-357.4, 926.1], [-340.4, 913.6], [-325.8, 920], 
            [-342.1, 956.5], [-363.3, 961.8]
        ] 
    },
    "Lentins du Chêne": { 
        icon: "resource/Lentins du chene.png", 
        positions: [
            [-772.3, 411.8], [-763.5, 397], [-736.8, 426.1], [-717.3, 446.8], 
            [-705.8, 432.1], [-667.1, 462.5], [-666.6, 482.5], [-698.5, 491.8], 
            [-698.3, 520.5], [-690.3, 542.6], [-686.4, 553.1], [-719.8, 546.6], 
            [-724.8, 555.3], [-707.5, 575.9], [-714.9, 596.3]
        ] 
    },
    "Mousseron": { 
        icon: "resource/mousseron.png", 
        positions: [
            [-676.3, 271.5], [-667.8, 264], [-686.3, 260.8], [-706.3, 253.5], 
            [-632.8, 247.3], [-601.3, 229.5], [-577.5, 242.8], [-553.5, 237.3], 
            [-491.8, 177.8], [-480.5, 192.5], [-459.8, 225.8], [-440.3, 230.3], 
            [-420.3, 202.8], [-408.3, 178.8]
        ] 
    },
    "Pleurote": { 
        icon: "resource/pleurote.png", 
        positions: [
            [-220.5, 355.3], [-207.5, 352.6], [-145.3, 303], [-162.5, 296], 
            [-190.5, 294.3], [-210.3, 301.8], [-221.3, 310], [-214, 421.1], 
            [-196.1, 428.4], [-174.4, 399.8], [-212.6, 470.8], [-232.5, 522.3], 
            [-205.8, 512.4], [-194.9, 526.1], [-169, 510.6], [-167.9, 533.9], 
            [-186, 547.6], [-189.3, 583.9]
        ] 
    }
};

// 8. POISSONS
const fishList = [
    {name:"Ablette", bg:"condition/ablette_lieu.png", cond:"condition/ablette_meteo.png", heure:"condition/ablette_heure.png"},
    {name:"Acantharchus pomotis", bg:"condition/acantharchus_pomotis_lieu.png", cond:"condition/acantharchus_pomotis_meteo.png", heure:"condition/acantharchus_pomotis_heure.png"},
    {name:"Anguille européenne", bg:"condition/anguille_europeenne_lieu.png", cond:"condition/anguille_europeenne_meteo.png", heure:"condition/anguille_europeenne_heure.png"},
    {name:"Aphyosemion striatum", bg:"condition/aphyosemion_striatum_lieu.png", cond:"condition/aphyosemion_striatum_meteo.png", heure:"condition/aphyosemion_striatum_heure.png"},
    {name:"Barbeau", bg:"condition/barbeau_lieu.png", cond:"condition/barbeau_meteo.png", heure:"condition/barbeau_heure.png"},
    {name:"Barbillon", bg:"condition/barbillon_lieu.png", cond:"condition/barbillon_meteo.png", heure:"condition/barbillon_heure.png"},
    {name:"Baudroie", bg:"condition/baudroie_lieu.png", cond:"condition/baudroie_meteo.png", heure:"condition/baudroie_heure.png"},
    {name:"Bernard-l'ermite", bg:"condition/bernard_lhermite_lieu.png", cond:"condition/bernard_lhermite_meteo.png", heure:"condition/bernard_lhermite_heure.png"},
    {name:"Blennie de rivière", bg:"condition/blennie_de_riviere_lieu.png", cond:"condition/blennie_de_riviere_meteo.png", heure:"condition/blennie_de_riviere_heure.png"},
    {name:"Bonite", bg:"condition/bonite_lieu.png", cond:"condition/bonite_meteo.png", heure:"condition/bonite_heure.png"},
    {name:"Brochet tacheté", bg:"condition/brochet_tachete_lieu.png", cond:"condition/brochet_tachete_meteo.png", heure:"condition/brochet_tachete_heure.png"},
    {name:"Carpe argentée", bg:"condition/carpe_argente_lieu.png", cond:"condition/carpe_argente_meteo.png", heure:"condition/carpe_argente_heure.png"},
    {name:"Carpe européenne", bg:"condition/carpe_europeenne_lieu.png", cond:"condition/carpe_europeenne_meteo.png", heure:"condition/carpe_europeenne_heure.png"},
    {name:"Carpe papillon", bg:"condition/carpe_papillon_lieu.png", cond:"condition/carpe_papillon_meteo.png", heure:"condition/carpe_papillon_heure.png"},
    {name:"Carpe noire", bg:"condition/carpe_noire_lieu.png", cond:"condition/carpe_noire_meteo.png", heure:"condition/carpe_noire_heure.png"},
    {name:"Chabot", bg:"condition/chabot_lieu.png", cond:"condition/chabot_meteo.png", heure:"condition/chabot_heure.png"},
    {name:"Chimère argentée", bg:"condition/chimere_argentee_lieu.png", cond:"condition/chimere_argentee_meteo.png", heure:"condition/chimere_argentee_heure.png"},
    {name:"Comète coussut", bg:"condition/comete_coussut_lieu.png", cond:"condition/comete_coussut_meteo.png", heure:"condition/comete_coussut_heure.png"},
    {name:"Crabe de ruisseau", bg:"condition/crabe_de_ruisseau_lieu.png", cond:"condition/crabe_de_ruisseau_meteo.png", heure:"condition/crabe_de_ruisseau_heure.png"},
    {name:"Crevette de la mer", bg:"condition/crevette_de_la_mer_lieu.png", cond:"condition/crevette_de_la_mer_meteo.png", heure:"condition/crevette_de_la_mer_heure.png"},
    {name:"Crevette verte", bg:"condition/crevette_verte_lieu.png", cond:"condition/crevette_verte_meteo.png", heure:"condition/crevette_verte_heure.png"},
    {name:"Écrevisse noble", bg:"condition/ecrevisse_noble_lieu.png", cond:"condition/ecrevisse_noble_meteo.png", heure:"condition/ecrevisse_noble_heure.png"},
    {name:"Écrevisse noble bleue", bg:"condition/ecrevisse_noble_bleue_lieu.png", cond:"condition/ecrevisse_noble_bleue_meteo.png", heure:"condition/ecrevisse_noble_bleue_heure.png"},
    {name:"Églefin", bg:"condition/eglefin_lieu.png", cond:"condition/eglefin_meteo.png", heure:"condition/eglefin_heure.png"},
    {name:"Éperlan", bg:"condition/eperlan_lieu.png", cond:"condition/eperlan_meteo.png", heure:"condition/eperlan_heure.png"},
    {name:"Féra", bg:"condition/fera_lieu.png", cond:"condition/fera_meteo.png", heure:"condition/fera_heure.png"},
    {name:"Grand black-bass", bg:"condition/grand_blackbasse_lieu.png", cond:"condition/grand_blackbasse_meteo.png", heure:"condition/grand_blackbasse_heure.png"},
    {name:"Grenouille européenne", bg:"condition/grenouille_europeenne_lieu.png", cond:"condition/grenouille_europeenne_meteo.png", heure:"condition/grenouille_europeenne_heure.png"},
    {name:"Gobie", bg:"condition/gobie_lieu.png", cond:"condition/gobie_meteo.png", heure:"condition/gobie_heure.png"},
    {name:"Grondin perlon", bg:"condition/grondin_perlon_lieu.png", cond:"condition/grondin_perlon_meteo.png", heure:"condition/grondin_perlon_heure.png"},
    {name:"Hippocampe", bg:"condition/hippocampe_lieu.png", cond:"condition/hippocampe_meteo.png", heure:"condition/hippocampe_heure.png"},
    {name:"Huchon", bg:"condition/huchon_lieu.png", cond:"condition/huchon_meteo.png", heure:"condition/huchon_heure.png"},
    {name:"Langouste européenne", bg:"condition/langouste_europeenne_lieu.png", cond:"condition/langouste_europeenne_meteo.png", heure:"condition/langouste_europeenne_heure.png"},
    {name:"Loche des fleurs", bg:"condition/loche_des_fleurs_lieu.png", cond:"condition/loche_des_fleurs_meteo.png", heure:"condition/loche_des_fleurs_heure.png"},
    {name:"Loche des rochers", bg:"condition/loche_des_rochers_lieu.png", cond:"condition/loche_des_rochers_meteo.png", heure:"condition/loche_des_rochers_heure.png"},
    {name:"Lotte", bg:"condition/lotte_lieu.png", cond:"condition/lotte_meteo.png", heure:"condition/lotte_heure.png"},
    {name:"Maquereau atlantique", bg:"condition/maquereau_atlantique_lieu.png", cond:"condition/maquereau_atlantique_meteo.png", heure:"condition/maquereau_atlantique_heure.png"},
    {name:"Moule", bg:"condition/moule_lieu.png", cond:"condition/moule_meteo.png", heure:"condition/moule_heure.png"},
    {name:"Omble chevalier", bg:"condition/omble_chevalier_lieu.png", cond:"condition/omble_chevalier_meteo.png", heure:"condition/omble_chevalier_heure.png"},
    {name:"Ombrine", bg:"condition/ombrine_lieu.png", cond:"condition/ombrine_meteo.png", heure:"condition/ombrine_heure.png"},
    {name:"Pagellus bogaraveo", bg:"condition/pagellus_bogaraveo_lieu.png", cond:"condition/pagellus_bogaraveo_meteo.png", heure:"condition/pagellus_bogaraveo_heure.png"},
    {name:"Perche de mer", bg:"condition/perche_de_mer_lieu.png", cond:"condition/perche_de_mer_meteo.png", heure:"condition/perche_de_mer_heure.png"},
    {name:"Perche de prunier", bg:"condition/perche_de_prunier_lieu.png", cond:"condition/perche_de_prunier_meteo.png", heure:"condition/perche_de_prunier_heure.png"},
    {name:"Perche de rivière", bg:"condition/perche_de_riviere_lieu.png", cond:"condition/perche_de_riviere_meteo.png", heure:"condition/perche_de_riviere_heure.png"},
    {name:"Pieuvre", bg:"condition/pieuvre_lieu.png", cond:"condition/pieuvre_meteo.png", heure:"condition/pieuvre_heure.png"},
    {name:"Pieuvre naine", bg:"condition/pieuvre_naine_atlantique_lieu.png", cond:"condition/pieuvre_naine_atlantique_meteo.png", heure:"condition/pieuvre_naine_atlantique_heure.png"},
    {name:"Poisson-tigre", bg:"condition/poissontigre_a_ventre_rouge_lieu.png", cond:"condition/poissontigre_a_ventre_rouge_meteo.png", heure:"condition/poissontigre_a_ventre_rouge_heure.png"},
    {name:"Plie européenne", bg:"condition/plie_europeenne_lieu.png", cond:"condition/plie_europeenne_meteo.png", heure:"condition/plie_europeenne_heure.png"},
    {name:"Poisson-clown", bg:"condition/poissonclown_lieu.png", cond:"condition/poissonclown_meteo.png", heure:"condition/poissonclown_heure.png"},
    {name:"Poisson épineux", bg:"condition/poisson_epineux_lieu.png", cond:"condition/poisson_epineux_meteo.png", heure:"condition/poisson_epineux_heure.png"},
    {name:"Poisson-globe de rivière", bg:"condition/poissonglobe_de_riviere_lieu.png", cond:"condition/poissonglobe_de_riviere_meteo.png", heure:"condition/poissonglobe_de_riviere_heure.png"},
    {name:"Poisson rouge", bg:"condition/poisson_rouge_lieu.png", cond:"condition/poisson_rouge_meteo.png", heure:"condition/poisson_rouge_heure.png"},
    {name:"Poisson-ruban", bg:"condition/poisson_ruban_lieu.png", cond:"condition/poisson_ruban_meteo.png", heure:"condition/poisson_ruban_heure.png"},
    {name:"Poisson aux yeux rouges", bg:"condition/poisson_a_yeux_rouges_lieu.png", cond:"condition/poisson_a_yeux_rouges_meteo.png", heure:"condition/poisson_a_yeux_rouges_heure.png"},
    {name:"Régalec", bg:"condition/regalec_lieu.png", cond:"condition/regalec_meteo.png", heure:"condition/regalec_heure.png"},
    {name:"Rouget barbet", bg:"condition/rouget_barbet_lieu.png", cond:"condition/rouget_barbet_meteo.png", heure:"condition/rouget_barbet_heure.png"},
    {name:"Roussette", bg:"condition/roussette_lieu.png", cond:"condition/roussette_meteo.png", heure:"condition/roussette_heure.png"},
    {name:"Sandre blanc", bg:"condition/sandre_blanc_lieu.png", cond:"condition/sandre_blanc_meteo.png", heure:"condition/sandre_blanc_heure.png"},
    {name:"Saumon atlantique", bg:"condition/saumon_atlantique_lieu.png", cond:"condition/saumon_atlantique_meteo.png", heure:"condition/saumon_atlantique_heure.png"},
    {name:"Saumon keta", bg:"condition/saumon_keta_lieu.png", cond:"condition/saumon_keta_meteo.png", heure:"condition/saumon_keta_heure.png"},
    {name:"Saurel", bg:"condition/saurel_lieu.png", cond:"condition/saurel_meteo.png", heure:"condition/saurel_heure.png"},
    {name:"Sardine", bg:"condition/sardine_lieu.png", cond:"condition/sardine_meteo.png", heure:"condition/sardine_heure.png"},
    {name:"Seiche européenne", bg:"condition/seiche_europeenne_lieu.png", cond:"condition/seiche_europeenne_meteo.png", heure:"condition/seiche_europeenne_heure.png"},
    {name:"Silure européen", bg:"condition/silure_europeen_lieu.png", cond:"condition/silure_europeen_meteo.png", heure:"condition/silure_europeen_heure.png"},
    {name:"Tanche dorée", bg:"condition/tanche_doree_lieu.png", cond:"condition/tanche_doree_meteo.png", heure:"condition/tanche_doree_heure.png"},
    {name:"Têtard", bg:"condition/tetard_lieu.png", cond:"condition/tetard_meteo.png", heure:"condition/tetard_heure.png"},
    {name:"Tilapia", bg:"condition/tilapia_lieu.png", cond:"condition/tilapia_meteo.png", heure:"condition/tilapia_heure.png"},
    {name:"Turbot", bg:"condition/turbot_lieu.png", cond:"condition/turbot_meteo.png", heure:"condition/turbot_heure.png"},
    {name:"Vairon", bg:"condition/vairon_lieu.png", cond:"condition/vairon_meteo.png", heure:"condition/vairon_heure.png"},
    {name:"Zingel streber", bg:"condition/zingel_streber_lieu.png", cond:"condition/zingel_streber_meteo.png", heure:"condition/zingel_streber_heure.png"}
];

// 9. INSECTES
const bugList = [
    {name:"Abeille à queue blanche", bg:"condition/abeille_a_queue_blanche_lieu.png", cond:"condition/abeille_a_queue_blanche_meteo.png", heure:"condition/abeille_a_queue_blanche_heure.png"},
    {name:"Abeille charpentière bleue", bg:"condition/Abeille_charpentière_bleue_lieu.png", cond:"condition/Abeille_charpentière_bleue_meteo.png", heure:"condition/Abeille_charpentière_bleue_heure.png"},
    {name:"Abeille charpentière violette", bg:"condition/abeille_charpentiere_violette_lieu.png", cond:"condition/abeille_charpentiere_violette_meteo.png", heure:"condition/abeille_charpentiere_violette_heure.png"},
    {name:"Actias neidhoederi", bg:"condition/actias_neidhoederi_lieu.png", cond:"condition/actias_neidhoederi_meteo.png", heure:"condition/actias_neidhoederi_heure.png"},
    {name:"Azuré des nerpruns", bg:"condition/azure_de_porcelaine_lieu.png", cond:"condition/azure_de_porcelaine_meteo.png", heure:"condition/azure_de_porcelaine_heure.png"},
    {name:"Bourdon", bg:"condition/bourdon_lieu.png", cond:"condition/bourdon_meteo.png", heure:"condition/bourdon_heure.png"},
    {name:"Capricorne tigre", bg:"condition/capricorne_tigre_lieu.png", cond:"condition/capricorne_tigre_meteo.png", heure:"condition/capricorne_tigre_heure.png"},
    {name:"Cétoine étoile bleue", bg:"condition/cetoine_etoilee_bleue_lieu.png", cond:"condition/cetoine_etoilee_bleue_meteo.png", heure:"condition/cetoine_etoilee_bleue_heure.png"},
    {name:"Cicindèle verte", bg:"condition/cicindele_verte_lieu.png", cond:"condition/cicindele_verte_meteo.png", heure:"condition/cicindele_verte_heure.png"},
    {name:"Cigale", bg:"condition/cigale_lieu.png", cond:"condition/cigale_meteo.png", heure:"condition/cigale_heure.png"},
    {name:"Citron aspasia", bg:"condition/citron_aspasia_lieu.png", cond:"condition/citron_aspasia_meteo.png", heure:"condition/citron_aspasia_heure.png"},
    {name:"Coccinelle à 7 points", bg:"condition/coccinelle_a_sept_points_lieu.png", cond:"condition/coccinelle_a_sept_points_meteo.png", heure:"condition/coccinelle_a_sept_points_heure.png"},
    {name:"Coccinelle asiatique", bg:"condition/coccinelle_asiatique_lieu.png", cond:"condition/coccinelle_asiatique_meteo.png", heure:"condition/coccinelle_asiatique_heure.png"},
    {name:"Criocère de l'asperge", bg:"condition/criocere_de_lasperge_lieu.png", cond:"condition/criocere_de_lasperge_meteo.png", heure:"condition/criocere_de_lasperge_heure.png"},
    {name:"Criquet à ailes réticulées", bg:"condition/criquet_a_ailes_reticulees_lieu.png", cond:"condition/criquet_a_ailes_reticulees_meteo.png", heure:"condition/criquet_a_ailes_reticulees_heure.png"},
    {name:"Criquet aux pattes massives", bg:"condition/criquet_aux_pattes_massives_lieu.png", cond:"condition/criquet_aux_pattes_massives_meteo.png", heure:"condition/criquet_aux_pattes_massives_heure.png"},
    {name:"Fourmi", bg:"condition/fourmi_lieu.png", cond:"condition/fourmi_meteo.png", heure:"condition/fourmi_heure.png"},
    {name:"Grand agrion", bg:"condition/grand_agrion_lieu.png", cond:"condition/grand_agrion_meteo.png", heure:"condition/grand_agrion_heure.png"},
    {name:"Grillon", bg:"condition/grillon_lieu.png", cond:"condition/grillon_meteo.png", heure:"condition/grillon_heure.png"},
    {name:"Libellule à queue blanche", bg:"condition/libellule_a_queue_blanche_lieu.png", cond:"condition/libellule_a_queue_blanche_meteo.png", heure:"condition/libellule_a_queue_blanche_heure.png"},
    {name:"Libellule tachetée", bg:"condition/libellule_tachetee_lieu.png", cond:"condition/libellule_tachetee_meteo.png", heure:"condition/libellule_tachetee_heure.png"},
    {name:"Mante arc-en-ciel", bg:"condition/mante_arcenciel_lieu.png", cond:"condition/mante_arcenciel_meteo.png", heure:"condition/mante_arcenciel_heure.png"},
    {name:"Mante papoue", bg:"condition/mante_papoue_lieu.png", cond:"condition/mante_papoue_meteo.png", heure:"condition/mante_papoue_heure.png"},
    {name:"Mélitée léopard", bg:"condition/melitee_leopard_lieu.png", cond:"condition/melitee_leopard_meteo.png", heure:"condition/melitee_leopard_heure.png"},
    {name:"Paon-du-jour", bg:"condition/paondujour_lieu.png", cond:"condition/paondujour_meteo.png", heure:"condition/paondujour_heure.png"},
    {name:"Papillon à anneaux rouges", bg:"condition/papillon_a_anneaux_rouges_lieu.png", cond:"condition/papillon_a_anneaux_rouges_meteo.png", heure:"condition/papillon_a_anneaux_rouges_heure.png"},
    {name:"Papillon à col rouge", bg:"condition/papillon_a_col_rouge_lieu.png", cond:"condition/papillon_a_col_rouge_meteo.png", heure:"condition/papillon_a_col_rouge_heure.png"},
    {name:"Papillon blanc", bg:"condition/papillon_blanc_lieu.png", cond:"condition/papillon_blanc_meteo.png", heure:"condition/papillon_blanc_heure.png"},
    {name:"Papillon doré", bg:"condition/papillon_dore_lieu.png", cond:"condition/papillon_dore_meteo.png", heure:"condition/papillon_dore_heure.png"},
    {name:"Papillon sorcière blanche", bg:"condition/Papillon_sorcière_blanche_lieu.png", cond:"condition/Papillon_sorcière_blanche_meteo.png", heure:"condition/Papillon_sorcière_blanche_heure.png"},
    {name:"Parnassien", bg:"condition/parnassien_lieu.png", cond:"condition/parnassien_meteo.png", heure:"condition/parnassien_heure.png"},
    {name:"Piéride du cresson", bg:"condition/pieride_du_cresson_lieu.png", cond:"condition/pieride_du_cresson_meteo.png", heure:"condition/pieride_du_cresson_heure.png"},
    {name:"Punaise Picasso", bg:"condition/punaise_picasso_lieu.png", cond:"condition/punaise_picasso_meteo.png", heure:"condition/punaise_picasso_heure.png"},
    {name:"Pyrochroa", bg:"condition/pyrochroa_lieu.png", cond:"condition/pyrochroa_meteo.png", heure:"condition/pyrochroa_heure.png"},
    {name:"Pyrrhocore", bg:"condition/pyrrhocoris_apterus_lieu.png", cond:"condition/pyrrhocoris_apterus_meteo.png", heure:"condition/pyrrhocoris_apterus_heure.png"},
    {name:"Sauterelle de l'oasis", bg:"condition/sauterelle_de_loasis_lieu.png", cond:"condition/sauterelle_de_loasis_meteo.png", heure:"condition/sauterelle_de_loasis_heure.png"},
    {name:"Sauterelle rose", bg:"condition/sauterelle_rose_lieu.png", cond:"condition/sauterelle_rose_meteo.png", heure:"condition/sauterelle_rose_heure.png"},
    {name:"Scarabée licorne", bg:"condition/scarabee_unicorne_lieu.png", cond:"condition/scarabee_unicorne_meteo.png", heure:"condition/scarabee_unicorne_heure.png"},
    {name:"Vanesse violette", bg:"condition/Vanesse_violette_lieu.png", cond:"condition/Vanesse_violette_meteo.png", heure:"condition/Vanesse_violette_heure.png"}
];

// 10. OISEAUX
const birdList = [
    {name:"Ara bleu et jaune", bg:"condition/ara_bleu_et_jaune_lieu.png", cond:"condition/ara_bleu_et_jaune_meteo.png", heure:"condition/ara_bleu_et_jaune_heure.png"},
    {name:"Ara rouge et vert", bg:"condition/ara_rouge_et_vert_lieu.png", cond:"condition/ara_rouge_et_vert_meteo.png", heure:"condition/ara_rouge_et_vert_heure.png"},
    {name:"Ara indigo", bg:"condition/ara_indigo_lieu.png", cond:"condition/ara_indigo_meteo.png", heure:"condition/ara_indigo_heure.png"},
    {name:"Bergeronnette grise", bg:"condition/bergeronnette_grise_lieu.png", cond:"condition/bergeronnette_grise_meteo.png", heure:"condition/bergeronnette_grise_heure.png"},
    {name:"Bouvreuil", bg:"condition/bouvreuil_lieu.png", cond:"condition/bouvreuil_meteo.png", heure:"condition/bouvreuil_heure.png"},
    {name:"Bouvreuil à ventre rouge", bg:"condition/bouvreuil_a_ventre_rouge_lieu.png", cond:"condition/bouvreuil_a_ventre_rouge_meteo.png", heure:"condition/bouvreuil_a_ventre_rouge_heure.png"},
    {name:"Calliste septicolore", bg:"condition/calliste_septicolore_lieu.png", cond:"condition/calliste_septicolore_meteo.png", heure:"condition/calliste_septicolore_heure.png"},
    {name:"Canard à tête blanche", bg:"condition/canard_a_tete_blanche_lieu.png", cond:"condition/canard_a_tete_blanche_meteo.png", heure:"condition/canard_a_tete_blanche_heure.png"},
    {name:"Canard colvert", bg:"condition/canard_colvert_lieu.png", cond:"condition/canard_colvert_meteo.png", heure:"condition/canard_colvert_heure.png"},
    {name:"Canard siffleur", bg:"condition/canard_siffleur_lieu.png", cond:"condition/canard_siffleur_meteo.png", heure:"condition/canard_siffleur_heure.png"},
    {name:"Cardinal à couronne grise", bg:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_lieu.png", cond:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_meteo.png", heure:"condition/cardinal_a_couronne_grisecolombar_a_cou_rose_heure.png"},
    {name:"Colombe jambu", bg:"condition/colombe_jambu_lieu.png", cond:"condition/colombe_jambu_meteo.png", heure:"condition/colombe_jambu_heure.png"},
    {name:"Diamant mandarin", bg:"condition/diamant_mandarin_lieu.png", cond:"condition/diamant_mandarin_meteo.png", heure:"condition/diamant_mandarin_heure.png"},
    {name:"Eider royal", bg:"condition/eider_royal_lieu.png", cond:"condition/eider_royal_meteo.png", heure:"condition/eider_royal_heure.png"},
    {name:"Faisan à ventre blanc", bg:"condition/faisan_a_ventre_blanc_lieu.png", cond:"condition/faisan_a_ventre_blanc_meteo.png", heure:"condition/faisan_a_ventre_blanc_heure.png"},
    {name:"Faucon à pattes rouges", bg:"condition/faucon_a_pattes_rouges_lieu.png", cond:"condition/faucon_a_pattes_rouges_meteo.png", heure:"condition/faucon_a_pattes_rouges_heure.png"},
    {name:"Faucon pèlerin", bg:"condition/faucon_pelerin_lieu.png", cond:"condition/faucon_pelerin_meteo.png", heure:"condition/faucon_pelerin_heure.png"},
    {name:"Faucon rouge", bg:"condition/faucon_rouge_lieu.png", cond:"condition/faucon_rouge_meteo.png", heure:"condition/faucon_rouge_heure.png"},
    {name:"Flamant rose américain", bg:"condition/flamant_rose_americain_lieu.png", cond:"condition/flamant_rose_americain_meteo.png", heure:"condition/flamant_rose_americain_heure.png"},
    {name:"Pinson des arbres", bg:"condition/fringilla_coelebs_lieu.png", cond:"condition/fringilla_coelebs_meteo.png", heure:"condition/fringilla_coelebs_heure.png"},
    {name:"Gobemouche vert-de-gris", bg:"condition/gobemouche_vertdegris_lieu.png", cond:"condition/gobemouche_vertdegris_meteo.png", heure:"condition/gobemouche_vertdegris_heure.png"},
    {name:"Goéland", bg:"condition/goeland_lieu.png", cond:"condition/goeland_meteo.png", heure:"condition/goeland_heure.png"},
    {name:"Loriot d'Europe", bg:"condition/golden_oriole_lieu.png", cond:"condition/golden_oriole_meteo.png", heure:"condition/golden_oriole_heure.png"},
    {name:"Grand-duc d'Europe", bg:"condition/grand_duc_deurope_lieu.png", cond:"condition/grand_duc_deurope_meteo.png", heure:"condition/grand_duc_deurope_heure.png"},
    {name:"Grand flamant", bg:"condition/grand_flamant_lieu.png", cond:"condition/grand_flamant_meteo.png", heure:"condition/grand_flamant_heure.png"},
    {name:"Grand pic", bg:"condition/grand_pic_lieu.png", cond:"condition/grand_pic_meteo.png", heure:"condition/grand_pic_heure.png"},
    {name:"Gros-bec", bg:"condition/grosbec_lieu.png", cond:"condition/grosbec_meteo.png", heure:"condition/grosbec_heure.png"},
    {name:"Guêpier d'Europe", bg:"condition/guepier_deurope_lieu.png", cond:"condition/guepier_deurope_meteo.png", heure:"condition/guepier_deurope_heure.png"},
    {name:"Harle piette", bg:"condition/harle_piette_lieu.png", cond:"condition/harle_piette_meteo.png", heure:"condition/harle_piette_heure.png"},
    {name:"Hibou moyen-duc", bg:"condition/hibou_moyen_duc_lieu.png", cond:"condition/hibou_moyen_duc_meteo.png", heure:"condition/hibou_moyen_duc_heure.png"},
    {name:"Jardinier à tête jaune", bg:"condition/jardinier_a_tete_jaune_lieu.png", cond:"condition/jardinier_a_tete_jaune_meteo.png", heure:"condition/jardinier_a_tete_jaune_heure.png"},
    {name:"Linotte à dos blanc", bg:"condition/linotte_a_dos_blanc_lieu.png", cond:"condition/linotte_a_dos_blanc_meteo.png", heure:"condition/linotte_a_dos_blanc_heure.png"},
    {name:"Merle bleu de l'Est", bg:"condition/merle_bleu_de_lest_lieu.png", cond:"condition/merle_bleu_de_lest_meteo.png", heure:"condition/merle_bleu_de_lest_heure.png"},
    {name:"Mésange à menton argent", bg:"condition/mesange_a_menton_argent_lieu.png", cond:"condition/mesange_a_menton_argent_meteo.png", heure:"condition/mesange_a_menton_argent_heure.png"},
    {name:"Mésange bleue", bg:"condition/mesange_bleue_lieu.png", cond:"condition/mesange_bleue_meteo.png", heure:"condition/mesange_bleue_heure.png"},
    {name:"Moucherolle à ventre jaune", bg:"condition/moucherolle_a_ventre_jaune_lieu.png", cond:"condition/moucherolle_a_ventre_jaune_meteo.png", heure:"condition/moucherolle_a_ventre_jaune_heure.png"},
    {name:"Mouette", bg:"condition/mouette_lieu.png", cond:"condition/mouette_meteo.png", heure:"condition/mouette_heure.png"},
    {name:"Panure à moustaches", bg:"condition/panure_a_moustache_lieu.png", cond:"condition/panure_a_moustache_meteo.png", heure:"condition/panure_a_moustache_heure.png"},
    {name:"Paon blanc", bg:"condition/paon_blanc_lieu.png", cond:"condition/paon_blanc_meteo.png", heure:"condition/paon_blanc_heure.png"},
    {name:"Paon bleu", bg:"condition/paon_bleu_lieu.png", cond:"condition/paon_bleu_meteo.png", heure:"condition/paon_bleu_heure.png"},
    {name:"Paon noir", bg:"condition/paon_noir_lieu.png", cond:"condition/paon_noir_meteo.png", heure:"condition/paon_noir_heure.png"},
    {name:"Paon vert", bg:"condition/paon_vert_lieu.png", cond:"condition/paon_vert_meteo.png", heure:"condition/paon_vert_heure.png"},
    {name:"Petit flamant", bg:"condition/petit_flamant_lieu.png", cond:"condition/petit_flamant_meteo.png", heure:"condition/petit_flamant_heure.png"},
    {name:"Pie-grièche à tête rousse", bg:"condition/piegrieche_a_tete_rousse_lieu.png", cond:"condition/piegrieche_a_tete_rousse_meteo.png", heure:"condition/piegrieche_a_tete_rousse_heure.png"},
    {name:"Pigeon aux fruits d'or", bg:"condition/pigeon_aux_fruits_dor_lieu.png", cond:"condition/pigeon_aux_fruits_dor_meteo.png", heure:"condition/pigeon_aux_fruits_dor_heure.png"},
    {name:"Pigeon aux yeux jaunes", bg:"condition/pigeon_aux_yeux_jaunes_lieu.png", cond:"condition/pigeon_aux_yeux_jaunes_meteo.png", heure:"condition/pigeon_aux_yeux_jaunes_heure.png"},
    {name:"Pigeon colombin", bg:"condition/pigeon_colombin_lieu.png", cond:"condition/pigeon_colombin_meteo.png", heure:"condition/pigeon_colombin_heure.png"},
    {name:"Pigeon de Wonga", bg:"condition/pigeon_de_wonga_lieu.png", cond:"condition/pigeon_de_wonga_meteo.png", heure:"condition/pigeon_de_wonga_heure.png"},
    {name:"Pigeon rose", bg:"condition/pigeon_rose_lieu.png", cond:"condition/pigeon_rose_meteo.png", heure:"condition/pigeon_rose_heure.png"},
    {name:"Pinson", bg:"condition/pinson_lieu.png", cond:"condition/pinson_meteo.png", heure:"condition/pinson_heure.png"},
    {name:"Rougegorge", bg:"condition/rougegorge_lieu.png", cond:"condition/rougegorge_meteo.png", heure:"condition/rougegorge_heure.png"},
    {name:"Sittelle", bg:"condition/sittelle_lieu.png", cond:"condition/sittelle_meteo.png", heure:"condition/sittelle_heure.png"},
    {name:"Sterne", bg:"condition/sterne_lieu.png", cond:"condition/sterne_meteo.png", heure:"condition/sterne_heure.png"},
    {name:"Sterne blanche", bg:"condition/sterne_blanche_lieu.png", cond:"condition/sterne_blanche_meteo.png", heure:"condition/sterne_blanche_heure.png"},
    {name:"Tadorne casarca", bg:"condition/tadorne_casarca_lieu.png", cond:"condition/tadorne_casarca_meteo.png", heure:"condition/tadorne_casarca_heure.png"},
    {name:"Tourterelle à tête grise", bg:"condition/tourterelle_a_tete_grise_lieu.png", cond:"condition/tourterelle_a_tete_grise_meteo.png", heure:"condition/tourterelle_a_tete_grise_heure.png"},
    {name:"Tourterelle grise", bg:"condition/tourterelle_grise_lieu.png", cond:"condition/tourterelle_grise_meteo.png", heure:"condition/tourterelle_grise_heure.png"},
    {name:"Tourterelle tigrine", bg:"condition/tourterelle_tigrine_lieu.png", cond:"condition/tourterelle_tigrine_meteo.png", heure:"condition/tourterelle_tigrine_heure.png"},
    {name:"Troglodyte", bg:"condition/troglodyte_lieu.png", cond:"condition/troglodyte_meteo.png", heure:"condition/troglodyte_heure.png"}
];

// 11. QUIZ (Renommé QUIZ_DATA pour être cohérent avec app.js)
const QUIZ_DATA = [
    { q: "Qui est l'acheteur du village ?", o: ["Albert Jr.", "ka ching", "Eric"], a: 0 },
    { q: "Où trouve-t-on l'Acantharchus pomotis ?", o: ["Mer Calme", "Lac de la Forêt", "Rivière Aurore"], a: 0 },
    { q: "Quel PNJ gère les trouvailles ?", o: ["Le Collectionneur", "Bob", "Massimo"], a: 0 },
    { q: "Quelle météo crée l'arc-en-ciel ?", o: ["Orage", "Brume", "Soleil après pluie"], a: 2 },
    { q: "Où est le Village Pêcheurs ?", o: ["Nord-Est", "Sud-Ouest", "Est"], a: 1 },
    { q: "L'Actias neidhoederi est :", o: ["Matinal", "Diurne", "Nocturne"], a: 2 },
    { q: "Où vit le Capybara ?", o: ["Les Ruines", "Le Plongeoir", "La Plage"], a: 0 },
    { q: "Qui vend les animaux (chiens) ?", o: ["Vernie", "Joan", "Andrew"], a: 1 },
    { q: "Où pêcher le Régalec ?", o: ["Rivières", "Lacs", "Océan"], a: 2 },
    { q: "Où est la zone thermale ?", o: ["Au Nord", "Au Sud", "À l'Ouest"], a: 0 },
    { q: "Le Scarabée licorne vit :", o: ["Quai Oriental", "Champs", "Forêt"], a: 0 },
    { q: "L'Ara indigo est un :", o: ["Poisson", "Insecte", "Oiseau"], a: 2 },
    { q: "La Carpe Papillon vit :", o: ["Eau douce", "Eau salée", "Lac Prairie"], a: 2 },
    { q: "Où se trouve le PNJ Will ?", o: ["Près de la mer", "En montagne", "En forêt"], a: 0 },
    { q: "Couleur du bouton POISSONS ?", o: ["Vert", "Bleu", "Orange"], a: 1 },
    { q: "Le Bourdon vit :", o: ["Lacs", "Champs de fleurs", "Grottes"], a: 1 },
    { q: "La Loutre se trouve :", o: ["Phare", "Village Pêcheurs", "Ruines"], a: 1 },
    { q: "Le Panda vit près de :", o: ["Plongeoir", "Village", "Quai"], a: 0 },
    { q: "L'Éperlan vit :", o: ["Lac Prairie", "Haut Lac", "Océan"], a: 0 },
    { q: "Annie se trouve :", o: ["Place Centrale", "Plage", "Forêt"], a: 0 },
    { q: "Le Lama vit :", o: ["Plage Violette", "Montagne", "Rivière"], a: 0 },
    { q: "Note sur 20 pour la carte ?", o: ["5", "0", "20"], a: 2 },
    { q: "L'Écrevisse bleue vit :", o: ["Lac Forêt", "Océan", "Mer Calme"], a: 0 },
    { q: "La Montagne Baleine est au :", o: ["Sud", "Nord", "Ouest"], a: 2 },
    { q: "Maptopia sert à :", o: ["Vendre des items", "Localiser les ressources", "Remplacer le jeu"], a: 1 },
    { q: "La Bergeronnette est un :", o: ["Oiseau", "Poisson", "Habitant"], a: 1 },
    { q: "Le Cerf vit :", o: ["Plage", "Forêt Chênes", "Ville"], a: 1 },
    { q: "Le Citron aspasia est un :", o: ["Fruit", "Insecte", "Poisson"], a: 1 },
    { q: "Le Quai Oriental est au :", o: ["Nord", "Est", "Sud"], a: 1 },
    { q: "Bob est un :", o: ["Animal", "PNJ", "Lieu"], a: 1 }
];
