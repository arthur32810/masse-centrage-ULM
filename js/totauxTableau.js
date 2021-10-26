function totauxTableaux() {
    totauxMasses();
    totauxMoments();
    totalLevier();
}
function totauxMasses() {

    // Récupération de toutes les masses
    const masses = document.querySelectorAll('.saisieMasse');

    let totalMasse = 0;
    for (masse of masses) {
        parseFloat(masse.value) ? totalMasse += parseFloat(masse.value) : null;
    }

    //Affichage Total
    document.getElementById('totalMasse').innerHTML = totalMasse.toFixed(3);
}

function totauxMoments() {
    // Récupération de toutes les masses
    const moments = document.querySelectorAll('.resultMoment');

    let totalMoments = 0;

    for (moment of moments) {
        parseFloat(moment.innerHTML) ? totalMoments += parseFloat(moment.innerHTML) : null;
    }

    //Affichage Total
    document.getElementById('totalMoment').innerHTML = totalMoments.toFixed(3);
}

function totalLevier() {
    const totalMasse = parseFloat(document.getElementById('totalMasse').innerHTML);

    const totalMoments = parseFloat(document.getElementById('totalMoment').innerHTML);

    const calculLevier = totalMoments / totalMasse;
    const displayLevier = calculLevier ? calculLevier : 0;


    document.getElementById('totalLevier').innerHTML = displayLevier.toFixed(3);
}
