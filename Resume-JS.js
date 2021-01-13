



/*NAVMENU HOVER*/
const stylesForNav =
            `
transition: all 0.4s ease;
border-radius: 50px;
    text-align: center;
    animation: navZoom 0.45s ease;
    background-image: url(icons/lens_icon.svg);
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: center;
             `;

function homeHover() {

    const x = document.querySelector('.home-lens');
    x.addEventListener('mouseover', () => {
        x.style = stylesForNav;
    });
    x.addEventListener('mouseleave', () => {
        x.style = 'inherit';
    });
}
homeHover();

function goalsHover() {

    const x = document.querySelector('.goals-lens');
    x.addEventListener('mouseover', () => {
        x.style = stylesForNav;
    });
    x.addEventListener('mouseleave', () => {
        x.style = 'inherit';
    });
}
goalsHover();

function portfolioHover() {

    const x = document.querySelector('.portfolio-lens');
    x.addEventListener('mouseover', () => {
        x.style = stylesForNav;
    });
    x.addEventListener('mouseleave', () => {
        x.style = 'inherit';
    });
}
portfolioHover();

function contactHover() {

    const x = document.querySelector('.contact-lens');
    x.addEventListener('mouseover', () => {
        x.style = stylesForNav;
    });
    x.addEventListener('mouseleave', () => {
        x.style = 'inherit';
    });
}
contactHover();

/* HIDE ICONS HOVER */

function spaghettiHover() {

    let spaghetti = document.querySelector('.spaghetti');
    spaghetti.addEventListener('mouseover', () => {
        spaghetti.classList.add('spaghetti-icon');
    });
    spaghetti.addEventListener('mouseleave', () => {
        spaghetti.classList.remove('spaghetti-icon');
    });
}
;
spaghettiHover();
function languagesHover() {

    let languages = document.querySelector('.languages');
    languages.addEventListener('mouseover', () => {
        document.querySelector('.hidden-h2').style.display = 'inherit';
        document.querySelector('.eighth-float').style.display = 'none';
    });
    languages.addEventListener('mouseleave', () => {
        document.querySelector('.hidden-h2').style.display = 'none';
        document.querySelector('.eighth-float').style.display = 'inherit';
    });
}
;
languagesHover();

function calendarHover() {

    let calendar = document.querySelector('#weekday');
    calendar.addEventListener('mouseover', () => {
        document.querySelector('.calendar').style.visibility = 'inherit';
    });
    calendar.addEventListener('mouseleave', () => {
        document.querySelector('.calendar').style.visibility = 'hidden';
    });
}
;
calendarHover();


/*FLOATING TEXT*/

function floatingText() {

    const floatZero = document.querySelector('.zero-float');
    const floatFirst = document.querySelector('.first-float');
    const floatSecond = document.querySelector('.second-float');
    const floatThird = document.querySelector('.third-float');
    const floatFifth = document.querySelector('.fifth-float');
    const floatSixth = document.querySelector('.sixth-float');
    const floatSeventh = document.querySelector('.seventh-float');
    const floatEighth = document.querySelector('.eighth-float');
    window.addEventListener('scroll', () => {
        const scrollFirst = window.pageYOffset;
        const val = scrollFirst * 0.3;
        floatZero.style.transform = `translateX(${ -2.3 * val}%)`;
        floatFirst.style.transform = `translateX(${0.20 * val}%)`;
        floatSecond.style.transform = `translateX(${ -0.55 * val}%)`;
        floatThird.style.transform = `translateX(${0.80 * val}%)`;
    });
    window.addEventListener('scroll', () => {
        const scrollDelay = window.pageYOffset;
        const val = scrollDelay * 0.08;
        floatFifth.style.transform = `translateX(${0.15 * val}%)`;
        floatSixth.style.transform = `translateX(${ -0.18 * val}%)`;
        floatSeventh.style.transform = `translateX(${0.16 * val}%)`;
        floatEighth.style.transform = `translateX(${ -0.20 * val}%)`;
    });
}
floatingText();
function floatPort() {

    const floatPortfolio = document.querySelector('.portfolio-float');
    window.addEventListener('scroll', () => {
        const scrollDelay = window.pageYOffset;
        const val = scrollDelay * 0.11;
        floatPortfolio.style.transform = `translateX(${0.1 * val}%)`;
    });
}
;
floatPort();

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

/* DAY OF WEEK */

function weekday() {
    const date = new Date();
    const weekday = new Array(7);
    weekday[0] = 'sunday';
    weekday[1] = 'monday';
    weekday[2] = 'tuesday';
    weekday[3] = 'wednesday';
    weekday[4] = 'thursday';
    weekday[5] = 'friday';
    weekday[6] = 'saturday';

    const getWeekDay = weekday[date.getDay()];
    document.getElementById('weekday').innerHTML = getWeekDay.toUpperCase();
}
;
weekday();