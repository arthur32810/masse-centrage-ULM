//Récupération bouton
const resetMasse = document.getElementById('buttonResetMasse');

resetMasse.addEventListener('click', function () {
    const saisieMasseInputs = document.querySelectorAll('.saisieMasse');

    for (saisieMasseInput of saisieMasseInputs) {
        saisieMasseInput.value = '';
    }
})