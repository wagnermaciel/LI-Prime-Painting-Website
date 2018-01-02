function autoScroll () {
    if (window.location.hash === '#free-estimate') {
        window.scroll({
            top: 300,
            behavior: 'smooth'
        });
    }
}
document.addEventListener('DOMContentLoaded', autoScroll);