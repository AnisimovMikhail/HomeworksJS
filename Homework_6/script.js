// Задание 1
// Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const elem = document.getElementById('super_link');
console.log(elem);


// Задание 2
// Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const textElm = document.querySelectorAll('.card-link');
for (let i = 0; i < textElm.length; i++) {
    textElm[i].textContent = 'Ссылка';

}


// Задание 3
// Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const searchElm = document.querySelectorAll('.card-body .card-link');
console.log(searchElm);


// Задание 4
// Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const datNumElm = document.querySelectorAll('[data-number="100"]');
console.log(datNumElm);


// Задание 5
// Выведите содержимое тега title в консоль.
const titleText = document.title;
console.log(titleText);


// Задание 6
// Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleElm = document.querySelector('.card-title').parentNode
console.log(cardTitleElm);


// Задание 7
// Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraphEl = document.createElement('p');
paragraphEl.textContent = "Привет";
document.querySelector('.card').prepend(paragraphEl);

// Задание 8
// Удалите тег h6 на странице.
let element = document.querySelector('h6')
element.remove();
