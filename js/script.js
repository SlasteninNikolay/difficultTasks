"use strict";
let week = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
];

let now = new Date();
let today = week[now.getDay()];

for (let i = 0; i < week.length; i++) {
    if (week[i] === today) {
        let red = week[i];
        red = red.bold();
        week[i] = red;
    }
    if (week[i] === "воскресенье" || week[i] === "суббота") {
        let change = week[i];
        change = change.italics();
        week[i] = change;
    }

    document.write(week[i] + "</br>");
}
