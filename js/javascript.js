

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


// WELCOME PAGE HEADING TOGGLE

(function () {

    const heading = $('.portfolio-div').find('a');

    $('.portfolio-div').find('h1').on('mouseenter mouseleave', function () {
        heading.toggle();
    });

})();


// GALLERY ANIMATION - IMAGE SLIDE

(function () {

    const galleryButton = $('.gallery').find('h2');

    galleryButton.on('click', function () {
        const galleryCover = $('.cover-container img');
        const galleryDiv = $('.cover-container');
        const imageUrl = $(this).attr('src');
        galleryCover.animate({opacity: '0'}, 200, function () {
            $(this).attr('src', imageUrl);
        }).animate({opacity: '1'}, 250);
    });

})();

// GALLERY IMAGES TILT ANIMATION

(function () {

    $('.tilt').tilt({
        maxTilt: 5,
        scale: 1.03,
        speed: 350
    });

})();

// ANCHOR SCROLL ANIMATION

(function () {
    const navMenu = $('nav'),
            links = navMenu.find('a');

    links.on('click', function (event) {

        $('html').animate({scrollTop: $(this.hash).offset().top}, 2000, function () {
            event.preventDefault();
        });


    });
}());

// SCROLL TO TOP BUTTON


(function () {

    const backToTop = $('.animated-scroll-mouse').hide();
    const scrollDown = $('#scrolldown-icon');

    backToTop.on('click', function () {
        $('html').animate({scrollTop: 0}, 2000);
    });

    var win = $(window);
    win.on('scroll', function () {
        if (win.scrollTop() > 800) {
            backToTop.fadeIn(1000);

        } else if (win.scrollTop() > 200) {
            scrollDown.fadeOut(500);
        } else {
            backToTop.fadeOut();
            scrollDown.fadeIn();
        }
    });

}());


// HEADING TRANSFORM ON SCROLL


(function () {

    const othersHeadings = $('.gallery, .about, .contact').find('h1');
    const firstHeadingWelcome = $('.hello-div').find('h1');
    const secondHeadingWelcome = $('.portfolio-div').find('h1');

    $(window).scroll(function () {
        othersHeadings.css({transform: 'skew(4deg,4deg)', transition: 'all 1.5s ease-out'});

        /*----media query function-----------*/

        function mediaQuery(x) {
            if (x.matches) {
                firstHeadingWelcome.css({transform: 'skewX(-7deg)', transition: 'all 2.5s ease-out'});
                secondHeadingWelcome.css({transform: 'skewX(7deg)', transition: 'all 2.5s ease-out'});
            } else {
                firstHeadingWelcome.css({transform: 'translateX(350px)', transition: 'all 2.5s ease-out'});
                secondHeadingWelcome.css({transform: 'translateX(-350px)', transition: 'all 2.5s ease-out'});
            }
        }

        const x = window.matchMedia("(max-width: 768px)");
        mediaQuery(x);
        x.addListener(mediaQuery);

        /*-----------------------------*/

        clearTimeout($.data(this, 'scrollCheck'));
        $.data(this, 'scrollCheck', setTimeout(function () {
            othersHeadings.css({transform: 'none'});
            firstHeadingWelcome.css({transform: 'none'});
            secondHeadingWelcome.css({transform: 'none'});
        }, 150));
    });

}());


// ABOUT ME - TOGGLE WORD EFFECT

(function typeEffect() {
    const text = ['friend!', 'stranger!', 'fellow!'];
    let typecount = 0;
    let index = 0;
    let selectedText = '';
    let letters = '';

    (function typeing() {

        if (typecount === text.length) {
            typecount = 0;
        }
        selectedText = text[typecount];
        letters = selectedText.slice(0, index++);

        document.querySelector('#toggle-word-effect').textContent = letters;

        if (letters.length === selectedText.length) {
            typecount++;
            index = 0;
            setTimeout(typeing, 2000);
            document.querySelector('#toggle-word-effect').style.color = '#35F287';
        } else {
            setTimeout(typeing, 400);
            document.querySelector('#toggle-word-effect').style.color = 'inherit';
        }
    }());

}());

// CUSTOM MOUSE CURSOR


(function () {

    const cursor = document.getElementById('cursor');
    const links = document.querySelectorAll('body a, .burger, .animated-scroll-mouse, .gallery div h2');
    const images = document.querySelector('.cover-container img');

    window.addEventListener('mousemove', function (event) {

        cursor.style.top = event.pageY + 'px';
        cursor.style.left = event.pageX + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('link-scale');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-scale');
        });
    });

    images.addEventListener('mouseover', () => {
        cursor.classList.add('image-hover');
        cursor.style.transform = 'scale(2)';
    });
    images.addEventListener('mouseleave', () => {
        cursor.classList.remove('image-hover');
        cursor.style.transform = 'translate(-50%,-50%)';
    });

})();



// CONTACT ICON HOVER - SPAN CLASS TOGGLE

(function () {

    const contactIcons = $('.contact-media-container').find('a');

    contactIcons.on('mouseenter mouseleave', function (event) {
        if (event.type === 'mouseenter') {
            $(this).find('span').css({opacity: 1});
        } else {
            $(this).find('span').css({opacity: 0});
        }
    });

})();


// PAGE TRANSITION


window.onload = () => {

    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelector('.transition-link');
    const content = document.querySelectorAll('.content-transition');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
        content.forEach(element => {
            element.classList.add('is-content-active');
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

            setTimeout(() => {
                window.location.href = target;
            }, 1100);
        });
    }
};
