document.addEventListener("click", () => {
  const audio = document.getElementById("backgroundNoise");
  audio.play();
}, { once: true });

let keepCrisisOnEnd = false;

const stats = {
  strategy: 0,
  buzz: 0,
  crisis: 0,
};

function setProgress(value){

document.getElementById("progress").style.width = value + "%"

}

function updateStatsDisplay(){
  document.getElementById("stat-strategy").textContent = stats.strategy;
  document.getElementById("stat-buzz").textContent = stats.buzz;
  document.getElementById("stat-crisis").textContent = stats.crisis;
}

function applyStatChanges(changes){
  Object.entries(changes).forEach(([key, value]) => {
    stats[key] += value;
  });

  updateStatsDisplay();
}

function analyse(){

applyStatChanges({ strategy: 2, buzz: 0, crisis: -1 })
setProgress(50)

document.getElementById("story").textContent =
"Vous analysez la cible et découvrez que les étudiants passent des heures sur leur téléphone.";

document.getElementById("choices").innerHTML =

`<button onclick="reels()">Créer des reels éducatifs</button>

<button onclick="podcast()">Lancer un podcast expert</button>`

}

function tiktok(){

applyStatChanges({ strategy: 0, buzz: 2, crisis: 1 })
setProgress(50)

document.getElementById("choices").innerHTML =

`<button onclick="strategie()">Construire une stratégie de contenu</button>

<button onclick="viral()">Continuer la viralité</button>

<button onclick="crise()">⚠️ Déclencher le mode crise RP</button>`

}

function crise(){

applyStatChanges({ strategy: 0, buzz: 1, crisis: 3 })
setProgress(75)

document.body.classList.add("crisis-mode")

document.getElementById("story").innerHTML =
`🚨 Alerte crise RP : un post est mal interprété et les commentaires s'embrasent.
<br><br>
Le canal #marketing passe en mode urgence : il faut répondre vite et rester clair.`;

document.getElementById("choices").innerHTML =
`<button onclick="strategie()">Publier une réponse officielle et cadrer le message</button>

<button onclick="oups()">Laisser la viralité faire le tri toute seule</button>`

}

function reels(){

applyStatChanges({ strategy: 1, buzz: 2, crisis: -1 })
setProgress(100)

document.getElementById("story").innerHTML =
`Les reels deviennent viraux. Le client gagne 20k abonnés en une semaine.
<br><br>
🏆 Félicitations !  
Vous êtes une communicante <strong>créative et stratégique</strong>.`;

showEnd()

}

function podcast(){

applyStatChanges({ strategy: 2, buzz: -1, crisis: 0 })
setProgress(100)

document.getElementById("story").innerHTML =
`Le podcast est passionnant… mais les étudiants préfèrent regarder des vidéos de chats.
<br><br>
📊 Résultat mitigé.  
Parfois la stratégie doit aussi être <strong>fun</strong>.`;

showEnd()

}

function strategie(){

applyStatChanges({ strategy: 3, buzz: 0, crisis: -2 })
setProgress(100)

document.getElementById("story").innerHTML =
`Vous structurez la communication : contenus courts, storytelling et newsletter.
<br><br>
🚀 La marque devient une <strong>référence EdTech</strong>.`;

showEnd()

}

function oups(){

applyStatChanges({ strategy: -1, buzz: 1, crisis: 2 })
setProgress(100)

keepCrisisOnEnd = true;

document.getElementById("story").innerHTML =
`🔥​ Mauvaise décision.
  <br> <br>
Ignorer une crise, c’est <strong>laisser la réputation brûler</strong>.`;

showEnd()

}


function viral(){

applyStatChanges({ strategy: -1, buzz: 3, crisis: 1 })
setProgress(100)

document.getElementById("story").innerHTML =
`La structure du client devient célèbre… mais personne ne comprend ce qu'il vend.
<br><br>
😬 La viralité <strong>sans stratégie</strong> peut être dangereuse.`;

showEnd()

}

function getProfileContent(){

if (stats.crisis >= stats.strategy && stats.crisis >= stats.buzz) {
return {
name: "Profil gestion de crise",
description: "Tu sais garder un cap clair quand la pression monte.",
skills: ["Gestion de crise", "Réactivité", "Cadrage du message"]
}
}

if (stats.buzz > stats.strategy) {
return {
name: "Profil créatif & acquisition",
description: "Tu sais capter l'attention et créer de l'impact rapidement.",
skills: ["Créativité", "Culture social media", "Storytelling"]
}
}

return {
name: "Profil stratégique",
description: "Tu privilégies les choix structurés pour construire une communication solide.",
skills: ["Analyse de cible", "Stratégie de contenu", "Vision éditoriale"]
}

}

function showEnd(){

  if (!keepCrisisOnEnd) {
document.body.classList.remove("crisis-mode")
}

const profile = getProfileContent()
const skillsMarkup = profile.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join("")

document.getElementById("choices").innerHTML =

`<div class="profile">

<img src="jeuinteractifmoi.png" alt="Photo de Pauline" class="profile-pic">

<p>Merci d'avoir joué !<br>
Moi c'est Pauline, votre future communicante fan de violet ;).</p>

<div class="end-stats">
<p class="profile-title"><strong>${profile.name}</strong></p>
<p>${profile.description}</p>
<div class="skills-list">${skillsMarkup}</div>
</div>

<a class="linkedin" href="https://www.linkedin.com/in/paulineaugereau/" target="_blank">
Me contacter sur LinkedIn
</a>

<br><br>

<button onclick="restart()">Rejouer</button>

<p class="github-link">
Voir le code du projet sur  
<a href="https://github.com/Naupile/Mini-jeu-interactif-Portfolio" target="_blank">
GitHub
</a>
</p>

</div>`

}

function restart(){

location.reload()

}

updateStatsDisplay()
