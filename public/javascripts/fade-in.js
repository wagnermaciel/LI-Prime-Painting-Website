function fade () {
    const elements = document.querySelectorAll('.fade-in');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.opacity = 0.0;
        fadeIn(element);
    }
}

function fadeIn (element) {
    if (element.style.opacity !== "1") {
        substantiate(element);
        setTimeout(fadeIn.bind(this, element), 10);
    }
}

function substantiate (element) {
    const opacity = element.style.opacity;
    let num = new Number(opacity);
    num += 0.01;
    element.style.opacity = num;
    console.log(opacity);
}
document.addEventListener('DOMContentLoaded', fade);