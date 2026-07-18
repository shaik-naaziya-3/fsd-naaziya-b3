"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable Annotations
let studentName = "Naaziya";
let studentAge = 20;
let isPresent = true;
// Array Annotation
let subjectMarks = [95, 90, 98];
// Function Parameter and Return Type Annotations
function calculateTotal(mark1, mark2) {
    return mark1 + mark2;
}
// Using annotated variables and function
let totalMarks = calculateTotal(95, 90);
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Present:", isPresent);
console.log("Marks:", subjectMarks);
console.log("Total Marks:", totalMarks);
//# sourceMappingURL=annotations.js.map