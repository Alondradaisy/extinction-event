const beginningListItems = document.querySelectorAll('ol li');

const addStrikethrough = function(event) {
event.target.style.textDecoration = 'line-through';
}

for (const listItem of beginningListItems) {
listItem.addEventListener('click', addStrikethrough);
}

const secondListItems = document.querySelectorAll('ul li');

const fade = function(event) {
event.target.style.opacity = 0;
}

for (const listItem of secondListItems) {
listItem.addEventListener('click', fade);
}

const photos = document.querySelectorAll('#row img');

const collapse = function(event) {
event.target.style.width = '0px';
}

for (const photo of photos) {
picture.addEventListener('click', collapse);
}

const meteor = document.querySelector('#destroy-all');

const destroyEverything = function() {
    for (const listItem of firstListItems) {
    listItem.style.textDecoration = 'line-through';
}
    for (const listItem of secondListItems) {
    listItem.style.opacity = 0;
}
    for (const picture of pictures) {
    picture.style.width = '0px';
}
}

meteor.addEventListener('click', destroyEverything);
