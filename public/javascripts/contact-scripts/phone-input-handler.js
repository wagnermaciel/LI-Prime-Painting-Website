function preventInvalidPhoneInputs() {
    const input = document.getElementById('phone-input');
    input.addEventListener('keypress', preventInvalidKeypress);
    input.addEventListener('paste', preventInvalidPaste);
}
function preventInvalidKeypress (event) {
    const ascii = event.which;
    const data = event.target.value + event.key;
    const length = data.length;
    if (!isValidChar(ascii) || !isValidLength(length)) {
        event.preventDefault();
    }
}
function preventInvalidPaste (event) {
    const data = event.clipboardData.getData('text');
    const length = data.length;
    if (!isValidLength(length) || !isValidString(data)) {
        event.preventDefault();
    }
}



function isValidChar (ascii) {
    if (ascii >= 48 && ascii <= 57) {
        return true;
    }
}
function isValidLength (length) {
    if (length <= 10) {
        return true;
    }
}
function isValidString (data) {
    for (let i = 0; i < data.length; i++) {
        const ascii = data.charCodeAt(i);
        if (!isValidChar(ascii)) {
            return false;
        }
    }
    return true;
}
document.addEventListener('DOMContentLoaded', preventInvalidPhoneInputs);