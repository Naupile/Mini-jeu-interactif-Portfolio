/*document.addEventListener("click", () => {
  const audio = document.getElementById("backgroundNoise");
  audio.play();
}, { once: true });
let keepCrisisOnEnd = false;

function setProgress(value){

document.getElementById("progress").style.width = value + "%"

}

function analyse(){

setProgress(50)

document.getElementById("story").textContent =
"Vous analysez la cible et découvrez que les étudiants passent des heures sur leur téléphone.";

document.getElementById("choices").innerHTML =

`<button onclick="reels()">Créer des reels éducatifs</button>

<button onclick="podcast()">Lancer un podcast expert</button>`

}

function tiktok(){

setProgress(50)

document.getElementById("choices").innerHTML =

`<button onclick="strategie()">Construire une stratégie de contenu</button>

<button onclick="viral()">Continuer la viralité</button>

<button onclick="crise()">⚠️ Déclencher le mode crise RP</button>`

}

function crise(){

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

setProgress(100)

document.getElementById("story").innerHTML =
`Les reels deviennent viraux. Le client gagne 20k abonnés en une semaine.
<br><br>
🏆 Félicitations !  
Vous êtes une communicante <strong>créative et stratégique</strong>.`;

showEnd()

}

function podcast(){

setProgress(100)

document.getElementById("story").innerHTML =
`Le podcast est passionnant… mais les étudiants préfèrent regarder des vidéos de chats.
<br><br>
📊 Résultat mitigé.  
Parfois la stratégie doit aussi être <strong>fun</strong>.`;

showEnd()

}

function strategie(){

setProgress(100)

document.getElementById("story").innerHTML =
`Vous structurez la communication : contenus courts, storytelling et newsletter.
<br><br>
🚀 La marque devient une <strong>référence EdTech</strong>.`;

showEnd()

}

function oups(){

setProgress(100)

  keepCrisisOnEnd = true;

document.getElementById("story").innerHTML =
`🔥​ Mauvaise décision.
  <br> <br>
Ignorer une crise, c’est <strong>laisser la réputation brûler</strong>.`;

showEnd()

}


function viral(){

setProgress(100)

document.getElementById("story").innerHTML =
`La structure du client devient célèbre… mais personne ne comprend ce qu'il vend.
<br><br>
😬 La viralité <strong>sans stratégie</strong> peut être dangereuse.`;

showEnd()

}

function showEnd(){

  if (!keepCrisisOnEnd) {
document.body.classList.remove("crisis-mode")
}

document.getElementById("choices").innerHTML =

`<div class="profile">

<img src="jeuinteractifmoi.png" alt="Photo de Pauline" class="profile-pic">

<p>Merci d'avoir joué !<br>
Moi c'est Pauline, votre future communicante fan de violet ;).</p>

<br><br>

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

}*/

diff --git a/script.js b/script.js
index ed070a88c9ada2d1fcd871f33e0a34a1329b10c4..bc9b702ec1686630a0b9ff937c54f6f4e6114448 100644
--- a/script.js
+++ b/script.js
@@ -1,132 +1,196 @@
-const backgroundNoise = document.getElementById("backgroundNoise");
-  backgroundNoise.currentTime = 0;
-  backgroundNoise.play();
-  backgroundNoise.loop = true;
-
-function setProgress(value){
-
-document.getElementById("progress").style.width = value + "%"
-
-}
-
-function analyse(){
-
-setProgress(50)
-
-document.getElementById("story").textContent =
-"Vous analysez la cible et découvrez que les étudiants passent des heures sur leur téléphone.";
-
-document.getElementById("choices").innerHTML =
-
-`<button onclick="reels()">Créer des reels éducatifs</button>
-
-<button onclick="podcast()">Lancer un podcast expert</button>`
-
-}
-
-function tiktok(){
-
-setProgress(50)
-
-document.getElementById("story").textContent =
-"La campagne TikTok explose mais le client demande maintenant une vraie stratégie.";
-
-document.getElementById("choices").innerHTML =
-
-`<button onclick="strategie()">Construire une stratégie de contenu</button>
-
-<button onclick="viral()">Continuer la viralité</button>`
-
-}
-
-function reels(){
-
-setProgress(100)
-
-document.getElementById("story").innerHTML =
-`Les reels deviennent viraux. Le client gagne 20k abonnés en une semaine.
-<br><br>
-🏆 Félicitations !  
-Vous êtes une communicante <strong>créative et stratégique</strong>.`;
-
-showEnd()
-
-}
-
-function podcast(){
-
-setProgress(100)
-
-document.getElementById("story").innerHTML =
-`Le podcast est passionnant… mais les étudiants préfèrent regarder des vidéos de chats.
-<br><br>
-📊 Résultat mitigé.  
-Parfois la stratégie doit aussi être <strong>fun</strong>.`;
-
-showEnd()
-
-}
-
-function strategie(){
-
-setProgress(100)
-
-document.getElementById("story").innerHTML =
-`Vous structurez la communication : contenus courts, storytelling et newsletter.
-<br><br>
-🚀 La marque devient une référence EdTech.`;
-
-showEnd()
-
-}
-
-function viral(){
-
-setProgress(100)
-
-document.getElementById("story").innerHTML =
-`La marque devient célèbre… mais personne ne comprend ce qu'elle vend.
-<br><br>
-😬 La viralité sans stratégie peut être dangereuse.`;
-
-showEnd()
-
-}
-
-function showEnd(){
-
-document.getElementById("choices").innerHTML =
-
-`<div class="profile">
-
-<img src="jeuinteractifmoi.png" alt="Photo de Pauline" class="profile-pic">
-
-<p>Merci d'avoir joué !<br>
-Moi c'est Pauline, votre future communicante fan de violet ;).</p>
-
-<br><br>
-
-<a class="linkedin" href="https://www.linkedin.com/in/paulineaugereau/" target="_blank">
-Me contacter sur LinkedIn
-</a>
-
-<br><br>
-
-<button onclick="restart()">Rejouer</button>
-
-<p class="github-link">
-Voir le code du projet sur  
-<a href="https://github.com/Naupile/Mini-jeu-interactif-Portfolio" target="_blank">
-GitHub
-</a>
-</p>
-
-</div>`
-
-}
-
-function restart(){
-
-location.reload()
-
-}
+const backgroundNoise = document.getElementById("backgroundNoise");
+backgroundNoise.currentTime = 0;
+backgroundNoise.play();
+backgroundNoise.loop = true;
+
+let keepCrisisOnEnd = false;
+let currentEnding = null;
+
+const stats = {
+strategy: 0,
+buzz: 0,
+crisis: 0,
+};
+
+function setProgress(value){
+document.getElementById("progress").style.width = value + "%";
+}
+
+function updateStatsDisplay(){
+document.getElementById("stat-strategy").textContent = stats.strategy;
+document.getElementById("stat-buzz").textContent = stats.buzz;
+document.getElementById("stat-crisis").textContent = stats.crisis;
+}
+
+function applyStatChanges(changes){
+Object.entries(changes).forEach(([key, value]) => {
+stats[key] += value;
+});
+updateStatsDisplay();
+}
+
+function analyse(){
+applyStatChanges({ strategy: 2, buzz: 0, crisis: -1 });
+setProgress(50);
+
+document.getElementById("story").textContent =
+"Vous analysez la cible et découvrez que les étudiants passent des heures sur leur téléphone.";
+
+document.getElementById("choices").innerHTML =
+`<button onclick="reels()">Créer des reels éducatifs</button>
+
+<button onclick="podcast()">Lancer un podcast expert</button>`;
+}
+
+function tiktok(){
+applyStatChanges({ strategy: 0, buzz: 2, crisis: 1 });
+setProgress(50);
+
+document.getElementById("story").textContent =
+"La campagne TikTok explose mais le client demande maintenant une vraie stratégie.";
+
+document.getElementById("choices").innerHTML =
+`<button onclick="strategie()">Construire une stratégie de contenu</button>
+
+<button onclick="viral()">Continuer la viralité</button>
+
+<button onclick="crise()">⚠️ Déclencher le module crise RP</button>`;
+}
+
+function crise(){
+applyStatChanges({ strategy: 0, buzz: 1, crisis: 3 });
+setProgress(75);
+
+document.body.classList.add("crisis-mode");
+
+document.getElementById("story").innerHTML =
+`🚨 Alerte crise RP : un post est mal interprété et les commentaires s'embrasent.
+<br><br>
+Le canal #marketing passe en mode urgence : il faut répondre vite et rester clair.`;
+
+document.getElementById("choices").innerHTML =
+`<button onclick="strategie()">Publier une réponse officielle et cadrer le message</button>
+
+<button onclick="oups()">Laisser la viralité faire le tri toute seule</button>`;
+}
+
+function oups(){
+keepCrisisOnEnd = true;
+applyStatChanges({ strategy: -1, buzz: 2, crisis: 2 });
+viral();
+}
+
+function reels(){
+applyStatChanges({ strategy: 1, buzz: 2, crisis: -1 });
+currentEnding = "creative";
+setProgress(100);
+
+document.getElementById("story").innerHTML =
+`Les reels deviennent viraux. Le client gagne 20k abonnés en une semaine.
+<br><br>
+🏆 Félicitations !
+Vous êtes une communicante <strong>créative et stratégique</strong>.`;
+
+showEnd();
+}
+
+function podcast(){
+applyStatChanges({ strategy: 2, buzz: -1, crisis: 0 });
+currentEnding = "expert";
+setProgress(100);
+
+document.getElementById("story").innerHTML =
+`Le podcast est passionnant… mais les étudiants préfèrent regarder des vidéos de chats.
+<br><br>
+📊 Résultat mitigé.
+Parfois la stratégie doit aussi être fun.`;
+
+showEnd();
+}
+
+function strategie(){
+applyStatChanges({ strategy: 3, buzz: 0, crisis: -2 });
+currentEnding = "strategic";
+setProgress(100);
+
+document.getElementById("story").innerHTML =
+`Vous structurez la communication : contenus courts, storytelling et newsletter.
+<br><br>
+🚀 La marque devient une référence EdTech.`;
+
+showEnd();
+}
+
+function viral(){
+applyStatChanges({ strategy: -1, buzz: 3, crisis: 1 });
+currentEnding = "viral";
+setProgress(100);
+
+document.getElementById("story").innerHTML =
+`La marque devient célèbre… mais personne ne comprend ce qu'elle vend.
+<br><br>
+😬 La viralité sans stratégie peut être dangereuse.`;
+
+showEnd();
+}
+
+function getProfileLabel(){
+if (currentEnding === "creative") {
+return "Profil créatif : tu sais capter l'attention sans perdre le cap.";
+}
+
+if (currentEnding === "strategic") {
+return "Profil stratégique : tu poses un cadre solide, même sous pression.";
+}
+
+if (currentEnding === "expert") {
+return "Profil expert : tu privilégies le fond, avec une marge de fun à retrouver.";
+}
+
+return "Profil buzz : tu sais déclencher l'attention, mais la marque peut vaciller.";
+}
+
+function showEnd(){
+if (!keepCrisisOnEnd) {
+document.body.classList.remove("crisis-mode");
+}
+
+const summary = getProfileLabel();
+
+document.getElementById("choices").innerHTML =
+`<div class="profile">
+<img src="jeuinteractifmoi.png" alt="Photo de Pauline" class="profile-pic">
+
+<p>Merci d'avoir joué !<br>
+Moi c'est Pauline, votre future communicante fan de violet ;).</p>
+
+<div class="end-stats">
+<p><strong>${summary}</strong></p>
+<ul>
+<li>Stratégie : <strong>${stats.strategy}</strong></li>
+<li>Buzz : <strong>${stats.buzz}</strong></li>
+<li>Crise : <strong>${stats.crisis}</strong></li>
+</ul>
+</div>
+
+<a class="linkedin" href="https://www.linkedin.com/in/paulineaugereau/" target="_blank">
+Me contacter sur LinkedIn
+</a>
+
+<button onclick="restart()">Rejouer</button>
+
+<p class="github-link">
+Voir le code du projet sur
+<a href="https://github.com/Naupile/Mini-jeu-interactif-Portfolio" target="_blank">
+GitHub
+</a>
+</p>
+
+</div>`;
+}
+
+function restart(){
+location.reload();
+}
+
+updateStatsDisplay();

