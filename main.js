function createDot() {
    const dot = document.createElement('div');

    dot.classList.add('dot');

    dot.style.left = Math.random() * 100 + 'vw';

    dot.style.animationDuration = Math.random() * 2 + 3 + 's';
 
       dot.innerText = '.'; 

    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 5000);
}

setInterval(createDot, 1000);