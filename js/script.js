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

// Отправка комментариев с приоритетом

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let priority = document.querySelector('.todo-priority');

// Описываю как работает кнопка с приоритетом

priority.onclick = function () {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
        priority.textContent = 'Важная задача!';
    }
        else {
            priority.textContent = 'Обычная задача';
        }
}

// Попадание задачи в список и ее добавление в случае если она важная

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    
    let newComment = document.createElement('li');
    
    if (priority.classList.contains('is-important')) {
        newComment.classList.add('is-important');
    }
    newComment.textContent = commentField.value;
    commentList.append(newComment);
    commentField.value = '';
  };


