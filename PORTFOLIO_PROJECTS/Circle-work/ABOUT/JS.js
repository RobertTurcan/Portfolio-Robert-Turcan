



/* NAVMENU */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

/* PORTFOLIO IMAGE GALLERY */

function galleryCarousel() {


    const images = document.querySelector('.gallery-items').children;
    const nextImage = document.querySelector('.slide-right');
    const prevImage = document.querySelector('.slide-left');
    const imagesTotal = images.length;
    let index = 0;
    nextImage.onclick = () => {
        next('next');
    };
    prevImage.onclick = () => {
        next('prev');
    };
    function next(direction) {
        if (direction === 'next') {
            index++;
            if (index === imagesTotal) {
                index = 0;
            }
        } else {
            if (index === 0) {
                index = imagesTotal - 1;
            } else {
                index--;
            }
        }
        for (i = 0; i < imagesTotal; i++) {
            images[i].classList.remove('active');
        }
        images[index].classList.add('active');
    }
}
;
galleryCarousel();