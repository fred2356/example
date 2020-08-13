// Скрипт изменят фон div с текстом

let button = document.querySelector('button');
let background = document.querySelector('.text');

button.onclick = function() {
    console.log('Кнопка нажата!');
    background.classList.toggle('background2');
}