//Récupération champs centrage limite
const centrageAvantInput = document.getElementById('centrageAvant');
const centrageArriereInput = document.getElementById("centrageArriere");

//Ajout événement 
centrageAvantInput.addEventListener('input', function () {
    verifLevier();
});

centrageArriereInput.addEventListener('input', function () {
    verifLevier();
});

//Création fonction
function verifLevier() {
    //Récup valuer limite
    const limiteCentrageAvant = centrageAvantInput.value;
    const limiteCentrageArriere = centrageArriereInput.value;

    //Récup levier total
    const levier = parseFloat(document.getElementById('totalLevier').innerHTML);

    //Création texte réponse 
    const h3 = document.getElementById('responseCentrage');

    if (limiteCentrageAvant < levier && levier < limiteCentrageArriere) {
        h3.style.color = 'green';
        h3.textContent = 'Le centrage est respecté !'
    }
    else {
        h3.style.color = 'red';
        h3.textContent = "Le centrage n'est pas respecté !";
    }

}
