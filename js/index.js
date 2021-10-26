//Sélection des inputs
const inputMasseAppareil = document.getElementById('masseAppareil');
const inputMassePilote = document.getElementById('massePilote');
const inputMassePassager = document.getElementById('massePassager');
const inputMasseCarburant = document.getElementById('masseCarburant');
const inputMasseBagages = document.getElementById('masseBagages');

//Ajout des événements 
inputMasseAppareil.addEventListener('input', function () {
    calculMoment('Appareil');
});
inputMassePilote.addEventListener('input', function () {
    calculMoment('Pilote')
});
inputMassePassager.addEventListener('input', function () {
    calculMoment('Passager');
});
inputMasseCarburant.addEventListener('input', function () {
    calculMoment('Carburant');
});
inputMasseBagages.addEventListener('input', function () {
    calculMoment('Bagages');
});

