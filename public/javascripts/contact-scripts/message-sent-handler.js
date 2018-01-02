function showMessageSent() {
    const msgBox = document.getElementById('message-sent-box');
    msgBox.style.display = 'block';
    msgBox.style.opacity = '1.0';
    setTimeout(hideMessage.bind(this, msgBox), 9000);
    document.addEventListener('click', hideMessage.bind(this, msgBox));
    window.onscroll = hideMessage.bind(this, msgBox);
}
function hideMessage (msgBox) {
    decrOpacity(msgBox, 400);
}
function decrOpacity(msgBox, speed) {
    const opacity = msgBox.style.opacity;
    if (opacity === '1') {
        msgBox.style.opacity = '0.9';
        setTimeout(decrOpacity.bind(this, msgBox), speed);
    }
    else if (opacity === '0') {
        msgBox.style.opacity = '0.0';
    }
    else {
        const decimalIndex = opacity.indexOf('.');
        const tens = opacity.substring(decimalIndex + 1, decimalIndex + 2);
        const num = parseInt(tens) - 1;
        msgBox.style.opacity = `0.${num}`;
        setTimeout(decrOpacity.bind(this, msgBox), speed);
    }
}