// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(`${i} – это ноль`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} – четное число`);
//     } else {
//         console.log(`${i} – нечетное число`);
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.round(Math.random() * 9));

}
console.log(array);

// Сумма элементов
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];

}
console.log(`${sum} - сумма элементов массива`);

// Минимальное число
let minNumber = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
        minNumber = array[i];
    }

}
console.log(`${minNumber} - минимальное число`);

// Нахождение числа 3
// let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        // count++
        console.log(`В (${i + 1}) элементе число 3 `);
    }

}
// console.log(`${count} - кол-во чисел (3)`);
