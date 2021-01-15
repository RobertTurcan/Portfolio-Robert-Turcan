



const stylesForNav =
            `
transition: all 0.4s ease;
border-radius: 50px;
    text-align: center;
    animation: navZoom 0.45s ease;
    background-image: url(../icons/lens_icon.svg);
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

function floatPort() {

    const floatFirstProject = document.querySelector('.first-about-float');
    const floatFirstImage = document.querySelector('.first-image-float');
    const floatSecondProject = document.querySelector('.second-about-float');
    const floatSecondImage = document.querySelector('.second-image-float');
    
    window.addEventListener('scroll', () => {
        const scrollDelay = window.pageYOffset;
        const val = scrollDelay * 0.10;
        floatFirstProject.style.transform = `translateX(${-0.10 * val}%)`;
        floatFirstImage.style.transform = `translateX(${0.10 * val}%)`;
        floatSecondProject.style.transform = `translateX(${-0.03 * val}%)`;
        floatSecondImage.style.transform = `translateX(${0.03 * val}%)`;
    });
}
;
floatPort();