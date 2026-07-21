"use strict";
let text = "programming";
let result = "";
for (let ch of text) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log("Result =", result);
