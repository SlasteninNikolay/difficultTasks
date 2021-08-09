"use strict";
let week = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

let now = new Date();
let lastElem = week.pop();
week.unshift(lastElem);

for (let i = 0; i < week.length; i++) {
    if (week[i] === week[now.getDay()]) {
        let red = week[i];
        red = red.bold();
        week[i] = red;
    }
    if (week[i] === "воскресенье" || week[i] === "суббота") {
        let change = week[i];
        change = change.italics();
        week[i] = change;
    }
}

let firstElement = week.shift();
week.push(firstElement);

for (const key in week) {
    document.write(week[key] + "<br>");
}
