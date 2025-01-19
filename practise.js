let x = 10;
const y = 20;
x = y;
console.log(x);
// y = x; // TypeError: assignment to const variable
console.log(y);

let a = 10;
// let a = 20; // redeclaration of the same variable gives syntax error
console.log(a);

const sentence = "Hello World!";
const charToFind = 'o';
// const indexOfChar = sentence.indexOf(charToFind).toUpperCase();
// console.log("output: " + indexOfChar);

let firstMon = 1000;
let secondMon = 800;
let thirdMon = 999;

let isEligible = true;
isEligible = (firstMon > 999 && secondMon > 999) ||
  (firstMon > 999 && thirdMon > 999) ||
  (secondMon > 999 && thirdMon > 999);

console.log("eligible: ", isEligible);

let p = 8, q = 3, r = 5;
let result = (p % q === 2) && (r > 2);
console.log(result);