"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Course {
    title;
    fee;
    // Constructor Implementation
    constructor(title, fee) {
        this.title = title;
        this.fee = fee ?? 999; // Default fee is 999
    }
    // Method
    displayDetails() {
        console.log("Course:", this.title);
        console.log("Fee: ₹" + this.fee);
    }
    // Method
    enrollStudent() {
        console.log("Enrollment Successful!");
    }
}
// Creating Objects
let course1 = new Course("TypeScript");
let course2 = new Course("Machine Learning", 4999);
// Calling Methods
course1.displayDetails();
course1.enrollStudent();
console.log("--------------------");
course2.displayDetails();
course2.enrollStudent();
//# sourceMappingURL=constructor.js.map