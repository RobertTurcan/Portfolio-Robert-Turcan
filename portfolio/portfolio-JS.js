



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


