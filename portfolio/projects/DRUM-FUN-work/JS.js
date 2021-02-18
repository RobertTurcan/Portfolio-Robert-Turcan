



const playSound = () => {
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    });
    window.addEventListener('keyup', function (e) {
        document.querySelector(`.key[data-key='${e.keyCode}']`).classList.remove('playing');
    });
};
playSound();