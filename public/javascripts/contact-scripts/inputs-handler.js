function inputHandler () {
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const error = errors[i];
        input.addEventListener('blur', isValidInput.bind(this, input, error));
        input.addEventListener('focus', hideError.bind(this, error));
    }
}
function hideError (error) {
    error.textContent = '';
}
document.addEventListener('DOMContentLoaded', inputHandler);