/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

function scrollAppear() {
    function itemOne() {
        const textHide = document.querySelector('.hide_BO');
        const textPosition = textHide.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.9;

        if (textPosition < screenPosition) {
            textHide.classList.add('text_appear');
        }
    }
    itemOne();

    function itemTwo() {
        const textHide = document.querySelector('.hide_BG');
        const textPosition = textHide.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2.1;

        if (textPosition < screenPosition) {
            textHide.classList.add('text_appear');
        }
    }
    ;
    itemTwo();

    function itemThree() {
        const textHide = document.querySelector('.hide_X');
        const textPosition = textHide.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 2.3;

        if (textPosition < screenPosition) {
            textHide.classList.add('text_appear');
        }
    }
    ;
    itemThree();
}


window.addEventListener('scroll', scrollAppear);















//function scrollAppear() {
//    var textHide = document.querySelector('.hide_BO');
//    var textPosition = textHide.getBoundingClientRect().top;
//    var screenPosition = window.innerHeight / 1.9;
//    
//    if(textPosition < screenPosition) {
//        textHide.classList.add('text_appear');
//    }
//}
//window.addEventListener('scroll',scrollAppear);