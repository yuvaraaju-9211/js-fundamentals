/** Type Coercion */
// implicitly data type is changed

let fullName = "first" + "last";
console.log(fullName);

console.log(5+5);
let sum = '5' + 5; // converts digit 5 to a string and concatenates
console.log("sum:", sum, "is a", typeof sum);

let subt = '55' - 10; // converts string to number
console.log("subt:", subt);

let mult = '4' * 2; // converts string to number
console.log("mult:", mult);

let divi = '8' / 2; // converts string to number
console.log("divi:", divi);