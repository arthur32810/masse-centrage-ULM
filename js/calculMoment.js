//Sélection des inputs
const inputMasseAppareil = document.getElementById('masseAppareil');
const inputMassePilote = document.getElementById('massePilote');
const inputMassePassager = document.getElementById('massePassager');
const inputMasseCarburant = document.getElementById('masseCarburant');
const inputMasseBagages = document.getElementById('masseBagages');

//Ajout des événements 
inputMasseAppareil.addEventListener('input', function () {
    checkVerif('Appareil');
});
inputMassePilote.addEventListener('input', function () {
    checkVerif('Pilote');
});
inputMassePassager.addEventListener('input', function () {
    checkVerif('Passager');
});
inputMasseCarburant.addEventListener('input', function () {
    checkVerif('Carburant');
});
inputMasseBagages.addEventListener('input', function () {
    checkVerif('Bagages');
});

function checkVerif(item) {
    calculMoment(item);
    totauxTableaux();
    verifMasse();
    verifLevier();
}

//Calcul Moment 
function calculMoment(nameItem) {
    const masse = document.getElementById('masse' + nameItem).value;

    const levier = parseFloat(document.getElementById('levierMasse' + nameItem).textContent);

    document.getElementById('resultMoment' + nameItem).innerHTML = (masse * levier).toFixed(3);

}