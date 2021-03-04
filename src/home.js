import { content } from './index';

function home() {
    const headline = document.createElement('h1');
    headline.innerHTML = 'One Guy\'s Fungi';
    content.appendChild(headline);

    const motto = document.createElement('h2');
    motto.innerHTML = 'Where Time Travel is Tasty!';
    content.appendChild(motto);
}

export default home
