// send the info to the server
function send () {
    const url = generateURL();
    const xml = new XMLHttpRequest();
    xml.open('POST', url);
    xml.send();
    onLoad(xml);
}
// server response handler
function onLoad (xml) {
    xml.addEventListener('load', function () {
        const status = xml.status;
        if (status >= 200 && status < 400) {
            showMessageSent();
            clearInputs();
        }
    });
}
// url for xml http request
function generateURL() {
    const base = 'http://localhost:3000/api/contact';
    const query = generateQuery();
    const url = base + query;
    return url;
}
// generate query string from dom info
function generateQuery () {

    // get info from the dom

    const first = document.getElementById('first-name-input').value;
    const last = document.getElementById('last-name-input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;
    const msg = document.getElementById('job-description-input').value;

    // format info into a query string

    const data = JSON.stringify({
        subject: formatSubject(first, last),
        body: formatBody(first, last, email, phone, msg)
    });
    const query = `?data=${data}`;

    return query;
}
function formatSubject (first, last) {
    return `New message from liprimepainting.com`;
}
function formatBody (first, last, email, phone, msg) {
    let body = '';
    body += `Name: ${first} ${last}\r\n\r\n`;
    body += `Email Address: ${email}\r\n\r\n`;
    body += `Phone Number: ${phone}`;

    if (msg) {
        body += `\r\n\r\nMessage: ${msg}`;
    }

    return body;
}
function clearInputs () {
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    textArea = document.querySelector('textArea').value = '';
}