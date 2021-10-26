//Récupération des div
const levierAppareil = document.getElementById('levierAppareil');
const levierPilote = document.getElementById('levierPilote');
const levierCarburant = document.getElementById('levierCarburant');
const levierBagages = document.getElementById('levierBagages');

//Function set levier
function setLevier(nameItem, target) {
    const levier = target.value ? target.value : 0.282;

    document.getElementById('levierMasse' + nameItem).innerHTML = levier;
}

//Mise en place des événements
levierAppareil.addEventListener('input', function (event) {
    setLevier('Appareil', event.target);
});

levierPilote.addEventListener('input', function (event) {
    setLevier('Pilote', event.target);
    setLevier('Passager', event.target);
});

levierCarburant.addEventListener('input', function (event) {
    setLevier('Carburant', event.target);
});

levierBagages.addEventListener('input', function (event) {
    setLevier('Bagages', event.target);
})
