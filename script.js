let timerInterval;
let tempsEcoule = 0;
let chronometreEnMarche = false;

function calculerMots() {
    const texte = document.getElementById('textInput').value;
    const mots = texte.trim().split(/\s+/).filter(word => word !== '').length;
    document.getElementById('resultatMots').innerText = `Nombre de mots : ${mots}`;

    const nbFautes = parseInt(document.getElementById('nbFautes').value);
    document.getElementById('resultatFautes').innerText = `Nombre de fautes : ${nbFautes}`;

    const motsCorrects = mots - nbFautes;
    document.getElementById('resultatMotsCorrects').innerText = `Mots corrects : ${motsCorrects}`;

    const vitesse = motsCorrects / tempsEcoule * 60;
    document.getElementById('resultatVitesse').innerText = `Vitesse de lecture : ${vitesse.toFixed(2)} mots/min`;
}

function demarrerChronometre() {
    if (!chronometreEnMarche) {
        timerInterval = setInterval(function() {
            tempsEcoule++;
            document.getElementById('temps').innerText = tempsEcoule + 's';
        }, 1000);
        chronometreEnMarche = true;
    }
}

function arreterChronometre() {
    clearInterval(timerInterval);
    chronometreEnMarche = false;
}
