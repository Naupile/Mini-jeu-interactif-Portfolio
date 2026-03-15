  const backgroundNoise = document.getElementById("backgroundNoise");
  backgroundNoise.currentTime = 0;
  backgroundNoise.play();

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

document.getElementById("story").textContent =
"La campagne TikTok explose mais le client demande maintenant une vraie stratégie.";

document.getElementById("choices").innerHTML =

`<button onclick="strategie()">Construire une stratégie de contenu</button>

<button onclick="viral()">Continuer la viralité</button>`

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
🚀 La marque devient une référence EdTech.`;

showEnd()

}

function viral(){

setProgress(100)

document.getElementById("story").innerHTML =
`La marque devient célèbre… mais personne ne comprend ce qu'elle vend.
<br><br>
😬 La viralité sans stratégie peut être dangereuse.`;

showEnd()

}

function showEnd(){

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

}
