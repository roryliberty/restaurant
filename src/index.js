import loadPage from './load-page';
import showAbout from './about-page';

init();

function switchPage() {
    const homeBtn = document.getElementById('home');
    const aboutBtn = document.getElementById('about');
    const menuBtn = document.getElementById('menu');

    homeBtn.addEventListener('click', loadPage);
    aboutBtn.addEventListener('click', showAbout);
}

function init() {
    loadPage();
    switchPage();
}