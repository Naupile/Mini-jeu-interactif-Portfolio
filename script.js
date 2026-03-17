const backgroundNoise = document.getElementById("backgroundNoise");
  backgroundNoise.currentTime = 0;
  backgroundNoise.play();
  backgroundNoise.loop = true;

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

<button onclick="crise()">⚠️ Déclencher le module crise RP</button>`

}

function crise(){

setProgress(75)

document.body.classList.add("crisis-mode")

document.getElementById("story").innerHTML =
`🚨 Alerte crise RP : un post est <strong>mal interprété</strong> et les commentaires <strong>s'embrasent</strong>.
<br><br>
Le canal #marketing passe en mode urgence : il faut <strong>répondre vite et rester clair</strong>.`;

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
🚀 La marque devient une référence EdTech.`;

showEnd()

}

function oups(){

setProgress(100)

document.getElementById("story").innerHTML =
`Le client se fait blacklister, vous pouvez faire mieux !
<br><br>
😡​ Une com' de crise soignée, c'est une entreprise en bonne santé.`;

showEnd()

}


function viral(){

setProgress(100)

document.getElementById("story").innerHTML =
`La structure du client devient célèbre… mais personne ne comprend ce qu'il vend.
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

