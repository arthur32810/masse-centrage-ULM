//Récupération des div
const levierAppareil = document.getElementById('levierAppareil');
const levierPilote = document.getElementById('levierPilote');
const levierPassager = document.getElementById('levierPassager');
const levierCarburant = document.getElementById('levierCarburant');
const levierBagages = document.getElementById('levierBagages');

//Function set levier
function setLevier(nameItem, target, defaultLevier) {
    const levier = target.value ? target.value : defaultLevier;

    document.getElementById('levierMasse' + nameItem).innerHTML = levier;
}

//Mise en place des événements
levierAppareil.addEventListener('input', function (event) {
    setLevier('Appareil', event.target, 0.282);
});

levierPilote.addEventListener('input', function (event) {
    setLevier('Pilote', event.target, 0.52);
});

levierPassager.addEventListener('input', function (event) {
    setLevier('Passager', event.target, 0.52);
});

levierCarburant.addEventListener('input', function (event) {
    setLevier('Carburant', event.target, 0.3);
});

levierBagages.addEventListener('input', function (event) {
    setLevier('Bagages', event.target, 1.09);
})
