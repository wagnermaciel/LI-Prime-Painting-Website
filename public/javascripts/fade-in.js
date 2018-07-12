document.addEventListener('DOMContentLoaded', prettyLoad);

function prettyLoad () {
}

// Adjust margin bottom
function slideUp (element, current, end) {
  if (current > end) {
    current -= 0.6;
    element.style.marginTop = current + 'px';
    setTimeout(slideUp.bind(this, element, current, end), 20);
  }
}

function fadeIn (element, speed=0.003) {
  const opacity = Number(element.style.opacity);
  if (opacity < 1) {
    element.style.opacity = opacity + speed;
    setTimeout(fadeIn.bind(this, element, speed), 1);
  }
}
