function isEmpty (str) {
    if (str.length > 0) {
        return true;
    }
}
function isValidEmailAddress (data) {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(data.toLowerCase());
}
function isValidPhoneNumber (data) {
    if (data.length === 10) {
        return true;
    }
}