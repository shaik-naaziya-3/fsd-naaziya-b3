// Traditional Named Function
function calculateTotal(mark1: number, mark2: number): number {
    return mark1 + mark2;
}


// Arrow Functions
const calculateAverage = (mark1: number, mark2: number): number => {
    return (mark1 + mark2) / 2;
};


// Shorthand Arrow Function
const checkPassStatus = (totalMarks: number): string =>
    totalMarks >= 70 ? "Pass" : "Fail";


// Function Calls
let totalMarks = calculateTotal(90, 85);
let averageMarks = calculateAverage(90, 85);
let result = checkPassStatus(totalMarks);


// Output
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Result:", result);