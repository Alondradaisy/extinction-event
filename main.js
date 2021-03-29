const ordered = document.querySelectorAll('ol li');
const unordered = document.querySelectorAll('ul li');
const dinoImgs = document.querySelectorAll('img');
const meteorButton = document.querySelector('#destroy-all');

function strikeThrough() {
strikeThrough.target.style.textDecoration = 'line-through';
}
for(let i = 0; i < ordered.length; i++) {
    ordered[i].addEventListener('click', lineThrough)
}

function fade () {
    fade.target.style.opacity = '0';
}
for (let i = 0; i < unordered.length; i++) {
    unordered[i].addEventListener('click', fade)
}

function goAway() {
    goAway.target.style.width = '0px';
}
for (let i = 0; i < ordered.length; i++) {
    unordered[i].addEventListener('click', goAway)
}

function destroy() {
    for(let i = 0; i < dinoImgs.length; i++) {
        dinoImgs[i].style.width = '0px';
    }
    for (let i = 0; i < unordered.length; i++) {
        unordered[i].style.opacity = '0'
    }
    for (let i = 0; i < ordered.length; i++) {
        ordered[i].style.textDecoration = 'line-through'
    }
    meteorButton.addEventListener('click', destroy);
}


