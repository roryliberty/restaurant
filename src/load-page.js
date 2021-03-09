function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const homeBtn = createBtn('home', 'Home');
    header.appendChild(homeBtn);

    const aboutBtn = createBtn('about', 'About');
    header.appendChild(aboutBtn);

    const menuBtn = createBtn('menu', 'Menu');
    header.appendChild(menuBtn);

    return header;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = 'tab';

    const span = document.createElement('span');
    span.textContent = text;

    btn.appendChild(span);

    return btn;
}

function createMain() {
    const main = document.createElement('div');
    main.id = 'main';

    const name = document.createElement('h1');
    name.innerText = 'One Guy\'s Fungi';
    main.appendChild(name);

    const tagline = document.createElement('h2');
    tagline.innerText = 'Where Time Travel is Tasty';
    main.appendChild(tagline);

    return main;
}

function loadPage() {
    const content = document.getElementById('content');

    const header = createHeader();
    content.appendChild(header);

    const main = createMain();
    content.appendChild(main);
}

export default loadPage;