function freeEstimateHandler () {
    const estBtn = document.querySelector('button');
    estBtn.addEventListener('click', goToContactPage);
}
function goToContactPage () {
    window.location.href = './contact#free-estimate';
}
document.addEventListener('DOMContentLoaded', freeEstimateHandler);