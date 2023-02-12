// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function kubNumber(num) {
//     let res = Math.pow(num, 3);
//     return res;
// }
// console.log(`${kubNumber(2)} + ${kubNumber(3)} = ${kubNumber(2) + kubNumber(3)} `);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salary() {
    let userSalary = Number(prompt("Введите вашу зарплату"));
    if (isFinite(userSalary) === true) {
        let result = userSalary - userSalary * 0.13;
        return console.log(`Ваша зарплата после вычета налога равна ${result}`);
    }
    return console.log(`Значение неверно ${userSalary}`);
}

salary();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function Numbers(number1, number2, number3) {
//     let max = Math.max(number1, number2, number3);
//     console.log(`Максимальное число - ${max}`);
// }

// Numbers(Number(prompt('Введите первое число: ')), Number(prompt('Введите второе число: ')), Number(prompt('Введите третье число: ')));



// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// let num1 = Number(prompt('Введите первое число: '));
// let num2 = Number(prompt('Введите второе число: '));

// function sumNumber(num1, num2) {
//     let sum = num1 + num2;
//     return console.log(`Сумма чисел: ${num1}, ${num2} равна ${sum}`);

// }


// function differenceNumber(num1, num2) {
//     let diff = num1 < num2 ? num2 - num1 : num1 - num2;
//     return console.log(`Разность чисел ${num1}, ${num2} равна ${diff}`);
// }


// function multiplicationNumber(num1, num2) {
//     let multi = num1 * num2;
//     return console.log(`Умножение чисел ${num1}, ${num2} равна ${multi}`);
// }


// function dividingNumber(num1, num2) {
//     let div = num1 / num2;
//     return console.log(`Деление чисел ${num1}, ${num2} равна ${div}`);
// }

// sumNumber(num1, num2);
// differenceNumber(num1, num2);
// multiplicationNumber(num1, num2);
// dividingNumber(num1, num2);