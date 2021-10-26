function calculMoment(nameItem) {
    const masse = document.getElementById('masse' + nameItem).value;

    const levier = parseFloat(document.getElementById('levierMasse' + nameItem).textContent);

    document.getElementById('resultMoment' + nameItem).innerHTML = masse * levier;

}