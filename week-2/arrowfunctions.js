"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Traditional Named Function
function findTotal(price, quantity) {
    return price * quantity;
}
// Arrow Function
const addTax = (total, tax) => {
    return total + tax;
};
// Shorthand Arrow Function
const getStatus = (amount) => amount >= 100 ? "Premium Order" : "Regular Order";
// Function Calls
let total = findTotal(25, 4);
let finalAmount = addTax(total, 10);
let typeoforder = getStatus(finalAmount);
// Output
console.log(`Total:${total}`);
console.log(`FinalAmount:${finalAmount}`);
console.log(`TypeofOrder:${typeoforder}`);
//# sourceMappingURL=arrowfunctions.js.map