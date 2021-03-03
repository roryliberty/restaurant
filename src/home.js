let home = () => {
    let content = document.getElementById('content');
    let title = document.createElement('h1');
    title.innerHTML = 'One Guy\'s Fungi';
    title.style.fontSize = '80px';
    title.style.color = '#faa803';
    content.appendChild('title');
}

export default home
