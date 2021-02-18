


(function typeEffect() {
    const text = ['nadšencov', 'profíkov', 'kreatívcov', 'šialencov'];
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

        document.querySelector('.typeeffect').textContent = letters;

        if (letters.length === selectedText.length) {
            typecount++;
            index = 0;
            document.querySelector('.typeeffect').style.backgroundColor = '#f8f9fa';
            setTimeout(typeing, 1000);
        } else {
            document.querySelector('.typeeffect').style.backgroundColor = 'initial';
            setTimeout(typeing, 150);
        }
    }());

}());


(function navbarResize() {
    window.onscroll = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.querySelector('nav').classList.add('active-on-scroll-down');
        } else {
            document.querySelector('nav').classList.remove('active-on-scroll-down');
        }
    };
}());

(function toggleMenu() {
    document.querySelector('#burger-menu').onclick = function() {
        document.querySelector('#menu-content').classList.toggle('navmenu-show');
    };
}());

(function toggleContact() {
    document.querySelector('#btn').onclick = function() {
        document.querySelector('#superhide-contact').classList.toggle('show');
    }
}());


