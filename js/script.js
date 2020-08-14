// Скрипт изменят фон div с текстом

// Обявляю переменные и нахожу нужный селектор в HTML
let button = document.querySelector('button');
let background = document.querySelector('.text');
let number = document.querySelector('.number');

// Вешаю на кнопку обработчик событий
button.onclick = function() {
    if (button.classList.contains('added')) {
        number.textContent--;}
        else { number.textContent++; }
button.classList.toggle('added');

    console.log(number);
    background.classList.toggle('background2');
}

// Отправка комментариев
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('new-comment');
    newComment.textContent = commentField.value;
    commentList.append(newComment);
    commentField.value = '';
  };


