"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parameter Types and Return Type
function calculateTotal(m1, m2) {
    return m1 + m2;
}
// Default Parameter
function greetStudent(studentName = "Harika") {
    return "Welcome, " + studentName + "!";
}
// Optional Parameter
function displayStudent(studentName, age) {
    if (age !== undefined) {
        return studentName + " is " + age + " years old.";
    }
    return studentName + "'s age is not provided.";
}
// Rest Parameter
function calculateAverage(...marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total / marks.length;
}
// Function Calls
let totalMarks = calculateTotal(90, 85);
let message1 = greetStudent("Naaziya");
let message2 = greetStudent();
let student1 = displayStudent("Ayesha", 20);
let student2 = displayStudent("sriram");
let averageMarks = calculateAverage(95, 90, 88, 92);
// Output
console.log("Total Marks:", totalMarks);
console.log(message1);
console.log(message2);
console.log(student1);
console.log(student2);
console.log("Average Marks:", averageMarks);
//# sourceMappingURL=demfuncs.js.map