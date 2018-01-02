function nextButtonHandler () {
    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', validateAndSend);
}
function validateAndSend () {
    const isValid = validateInputs();
    if (isValid) {
        send();
    }
}
document.addEventListener('DOMContentLoaded', nextButtonHandler);