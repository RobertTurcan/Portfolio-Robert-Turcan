



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
};
weekday();

