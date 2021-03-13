



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

function topScroll() {

const logo = document.getElementById('logo_parallax');
const welcome = document.getElementById('welcome_parallax');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    
    logo.style.top = value * 0.6 + 'px';
    welcome.style.top = value * 0.7 + 'px';
});
}
topScroll();

