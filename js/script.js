"use strict";
let arr = ["11443", "221134", "5657", "4521", "33224", "7799", "21280"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
        console.log(arr[i]);
    }
}

let n = 100;

nextPrime: for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j === 0 && j > 1) continue nextPrime;
    }

    console.log(i);
}
