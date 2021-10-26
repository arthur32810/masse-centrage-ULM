//Récupération litre
const litreCaburant = document.getElementById('litreCarburant');
const densiteCarburant = document.getElementById('densiteCarburant');

//Ajout des événements
litreCaburant.addEventListener('input', function () {
    calculMasseCarburant(litreCaburant.value, densiteCarburant.value);
    calculMoment('Carburant');
    totauxTableaux();
    verifLevier();
    verifMasse();
});

densiteCarburant.addEventListener('input', function () {
    calculMasseCarburant(litreCaburant.value, densiteCarburant.value);
})

//Fonction calcul
function calculMasseCarburant(litre, densite) {
    const resultMasseCarburant = litre * densite;

    document.getElementById('resultMasseCarburant').innerHTML = resultMasseCarburant;

    document.getElementById('masseCarburant').value = resultMasseCarburant;
}
