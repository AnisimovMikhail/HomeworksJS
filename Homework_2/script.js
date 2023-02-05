// Задание 1

// let num1 = parseInt(prompt('Введите первое число: '));
// num2 = parseInt(prompt('Введите второе число: '));
// if (num1 <= 1 && num2 >= 3) {
//     console.log('Условие выполнено верно');
// } else {
//     console.log('Увы! Не верно...');
// }


// Задание 2

// let test = true;

// (test === true) ? console.log('+++') : console.log('---');



// Задание 3

// let day = parseInt(prompt('Введите любое число месяца: '));
// if (day <= 10) {
//     console.log('День попадает в первую декаду месяца');
// } else if (day <= 20) {
//     console.log('День попадает во второую декаду месяца');
// } else if (day <= 31) {
//     console.log('День попадает в третью декаду месяца');
// } else {
//     console.log('Вы ввели некорректное число!');
// }




// Задание 4

let num = parseInt(prompt('Введите число: '));
let hundreds = Math.trunc(num / 100) % 10;
let tens = Math.trunc(num / 10) % 10;
let units = num % 10;
console.log(`В числе (${num}) кол-во сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
