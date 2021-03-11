function createAbout() {


    const about = document.createElement('div');
    about.id = 'about';
    about.classList.add('active');

    const words = document.createElement('h2');
    words.innerText = 'This is the About page.';
    about.appendChild(words);

    return about;
}

function showAbout() {
    const content = document.getElementById('content');
    const about = createAbout();

    content.appendChild(about);
}

export default showAbout;