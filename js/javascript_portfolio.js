

// NAV MENU TOGGLE

(function () {
    const burgerIcon = $('.burger');
    const navMenu = $('nav').hide();
    const navMenuLinks = $('nav').find('li');

    $('.burger, .close-menu').on('click', function () {

        navMenu.slideToggle();
        navMenuLinks.toggleClass('fade-nav-li');
        burgerIcon.toggleClass('toggle');

    });


})();


// SCROLL TO TOP BUTTON


(function () {

    const backToTop = $('.animated-scroll-mouse').hide();

    backToTop.on('click', function () {
        $('html').animate({scrollTop: 0}, 2000);
    });

    var win = $(window);
    win.on('scroll', function () {
        if (win.scrollTop() > 00) {
            backToTop.fadeIn(1600);
        } else {
            backToTop.fadeOut();
        }
    });

}());


// CUSTOM MOUSE CURSOR

(function () {

    const cursor = document.getElementById('cursor');
    const links = document.querySelectorAll('body a');
    const others = document.querySelectorAll('.burger, .animated-scroll-mouse, .gallery div h2');

    window.addEventListener('mousemove', function (event) {

        cursor.style.top = event.pageY + 'px';
        cursor.style.left = event.pageX + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('link-scale');
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.style.border = 'none';
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-scale');
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.border = '2px solid #F26D3D';
        });
    });

    others.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.style.border = 'none'
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.border = '2px solid #F26D3D'
        });
    });

})();


// GALLERY IMAGES TILT ANIMATION

(function () {

    $('.tilt').tilt({
        maxTilt: 4,
        speed: 700,
    });

})();


// PAGE TRANSITION


window.onload = () => {

    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelector('.transition-link');
    const content = document.querySelectorAll('.content-transition');
    const outsideMain_el = document.querySelectorAll('.outside-main-element');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
        content.forEach(element => {
            element.classList.add('is-content-active');
        });
        outsideMain_el.forEach(element => {
            element.classList.add('is-outside-active');
        });
    }, 1100);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');
            content.classList.remove('is-content-active');
            content.forEach(element => {
                element.classList.remove('is-content-active');
            });
            outsideMain_el.forEach(element => {
            element.classList.remove('is-outside-active');
        });

            setTimeout(() => {
                window.location.href = target;
            }, 1100);
        });
    }
};



