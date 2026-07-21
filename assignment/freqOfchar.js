"use strict";
let text = "hello";
let count = {};
for (let ch of text) {
    if (count[ch]) {
        count[ch]++;
    }
    else {
        count[ch] = 1;
    }
}
console.log(count);
