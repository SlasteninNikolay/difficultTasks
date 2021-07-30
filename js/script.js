"use strict";
// Создаю переменную с числом
let num = 266219;

//  Преобразую число в строку, далее в массив. Конвертирую строковые значения в числовые.
let array = Array.from(String(num)).map((i) => Number(i));

// Создаю цикл в котором перемножаю каждый элемент массива.
let result = 1;
for (let i = 0; i < array.length; i++) {
    result = result * array[i];
}

// Возвожу полученный результат в степень 3
result = result ** 3;

// Преобразую результат в строку и вывожу в консоль два первых числа.
result = String(result);
console.log(Number(result[0]) + result[1]);
