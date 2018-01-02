/**
 * Checks all of the inputs in the dom for errors.
 * 
 * Calls checkInput on each of the inputs and their corresponding
 * error h3 elements.
 * 
 * @returns true if any of the inputs are valid and false otherwise
 */
function validateInputs () {
    let hasInvalidInput = false;
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const error = errors[i];
        if (!isValidInput(input, error)) {
            hasInvalidInput = true;
        }
    }
    return !hasInvalidInput;
}
/**
 * Checks if an input is valid and displays an error message if it
 * is not.
 * 
 * Uses the isValid function to retrieve an error message. If there
 * is an error message, it displays the error message using the
 * error element given. Otherwise, if there is no error message,
 * sets the error element to an empty string.
 * 
 * @param {input} input The element to be validated
 * @param {h3} error The text element to display the error message
 * 
 * @returns true if and only if the inputs data was invalid
 */
function isValidInput (input, error) {
    const errMsg = isValid(input);
    if (!errMsg) {
        error.textContent = '';
        return true;
    }
    error.textContent = errMsg;
}
/**
 * Validates the given HTML input element based on its id and value
 * 
 * @param {input} input The element to be validated
 * @returns a String error message if and only if the input's text
 *          content was not valid
 */
function isValid (input) {
    if (input.id === 'first-name-input') {
        return isValidFirstName(input.value);
    }
    else if (input.id === 'last-name-input') {
        return isValidLastName(input.value);
    }
    else if (input.id === 'email-input') {
        return isValidEmailAddress(input.value);
    }
    else if (input.id === 'phone-input') {
        return isValidPhoneNumber(input.value);
    }
}



function isValidFirstName (data) {
    return isEmpty (data);
}
function isValidLastName (data) {
    return isEmpty (data);
}
function isValidEmailAddress (data) {

    // check if the data is empty
    const empty = isEmpty(data);
    if (empty) {
        return empty;
    }

    // check if the data is in a valid email address format
    const invalidFormat = isValidEmailAddressFormat(data);
    if (invalidFormat) {
        return invalidFormat;
    }
}
function isValidPhoneNumber (data) {
    return isEmpty(data) || isValidPhoneNumberFormat(data);
}



function isValidEmailAddressFormat (data) {
    // if the data does not match the format of the regular
    // expression, return an error message.
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if  (!regExp.test(data.toLowerCase())) {
        return 'Invalid email address.';
    }
}
function isValidPhoneNumberFormat (data) {
    // if the data does not have a length of 10, return an error message
    if (data.length !== 10) {
        return "Invalid phone number.";
    }
}
function isEmpty (data) {
    // if the data is empty, return an error message
    if (data.length === 0) {
        return "You can't leave this empty.";
    }
}