



/* NAV MENU */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

/* DROPDOWN */

function one() {
document.querySelector('#btnOne').onclick = function() {myFunc()};
function myFunc() {
    document.querySelector('#myDropdownOne').classList.toggle('show');
}
} one();

function two() {
document.querySelector('#btnTwo').onclick = function() {myFunc()};
function myFunc() {
    document.querySelector('#myDropdownTwo').classList.toggle('show');
}
} two();

function three() {
document.querySelector('#btnThree').onclick = function() {myFunc()};
function myFunc() {
    document.querySelector('#myDropdownThree').classList.toggle('show');
}
} three();

function four() {
document.querySelector('#btnFour').onclick = function() {myFunc()};
function myFunc() {
    document.querySelector('#myDropdownFour').classList.toggle('show');
}
} four();