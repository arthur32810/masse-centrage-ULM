//Récupération champ poid total
const masseMaxInput = document.getElementById('masseMaxUlm');

masseMaxInput.addEventListener('input', function (event) {
    verifMasse();

});

function verifMasse() {

    //Récup masse max appareil
    const masseMax = masseMaxInput.value;

    //Récup total masse calculé
    const totalMasse = parseFloat(document.getElementById('totalMasse').innerHTML);


    //Création texte réponse
    const h3 = document.getElementById('responseMasseAppareil');
    if (totalMasse < masseMax) {
        h3.style.color = 'green';
        h3.textContent = 'La masse maximale de l\'appareil est respectée !';
    } else {
        h3.style.color = 'red';
        h3.textContent = 'La masse maximale de l\'appareil n\'est pas respectée !'
    }

}