"use strict";

// Решение через if

let lang = prompt("Введите язык (ru или en)", "ru");
if (lang === "ru") {
    console.log(
        "\nПонедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскресенье"
    );
} else if (lang === "en") {
    console.log(
        "\nMonday \nTuesday \nWednesday \nThursday \nFriday \nSaturday \nSunday"
    );
} else {
    console.log("Ошибка ввода");
}

// Решение через switch-case

// let lang = prompt("Введите язык (ru или en)", "ru");
// switch (lang) {
//     case "ru":
//         console.log(
//             "\nПонедельник \nВторник \nСреда \nЧетверг \nПятница \nСуббота \nВоскресенье"
//         );
//         break;

//     case "en":
//         console.log(
//             "\nMonday \nTuesday \nWednesday \nThursday \nFriday \nSaturday \nSunday"
//         );
//         break;

//     default:
//         console.log("Ошибка ввода");
//         break;
// }

// Решение через многомерный массив

// let lang = prompt("Введите язык (ru или en)", "ru");
// let arr = {
//     ru: [
//         "Понедельник",
//         "Вторник",
//         "Среда",
//         "Четверг",
//         "Пятница",
//         "Суббота",
//         "Воскресенье",
//     ],
//     en: [
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday",
//     ],
// };
// console.log(arr[lang]);

// Вторая задача

// let namePerson = prompt("Введите имя");
// let message =
//     namePerson === "Артем"
//         ? "Директор"
//         : namePerson === "Максим"
//         ? "Преподаватель"
//         : "Студент";
// console.log(message);
