"use strict";
let str = prompt("Введите строку", "  123456789A123456789B123456789C  ");
let maxLength = 30;

const checkString = function (str) {
    if (typeof str !== "string") {
        alert("Не строка!");
    } else {
        return str.trim().slice(0, maxLength) + "...";
    }
};

let result = checkString(str);
alert(result);
