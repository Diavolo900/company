const play = document.querySelector('.about__button-play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('about__play-hidden');
});
/*--------------------------------------------------------------*/
const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

burger.addEventListener('click', bugerHandler);

function bugerHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    menu.classList.toggle('display');
    renderPopup();
}
function renderPopup() {
    popup.appendChild(menu);
}

