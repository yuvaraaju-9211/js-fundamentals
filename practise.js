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
const charToFind = "o";
// const indexOfChar = sentence.indexOf(charToFind).toUpperCase();
// console.log("output: " + indexOfChar);

let firstMon = 1000;
let secondMon = 800;
let thirdMon = 999;

let isEligible = true;
isEligible =
  (firstMon > 999 && secondMon > 999) ||
  (firstMon > 999 && thirdMon > 999) ||
  (secondMon > 999 && thirdMon > 999);

console.log("eligible: ", isEligible);

let p = 8,
  q = 3,
  r = 5;
let result = p % q === 2 && r > 2;
console.log(result);

const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};
// calculatePrice function
function calculatePrice(goods) {
  let totalPrice = 0;
  for (let item in goods) {
    console.log(`item is ${item}, price is ${goods[item].price}`);
    console.log(goods[item]);
    totalPrice += goods[item].price * goods[item].quantity;
  }
  return totalPrice;
}

console.log(calculatePrice(goods));

function multiply(a, b) {
  return a * b;
}
console.log(multiply);

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

var num = 10;
function foo() {
  console.log(num); // local uninitialized variable
  var num = 20;
}
foo();

/**
 * An improved version (Durstenfeld) of the Fisher-Yates algorithm with O(n) time complexity
 * Permutes the given array
 * @param array array to be shuffled
 */
function fisherYates(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var index = Math.floor(Math.random() * i);
    //swap
    var tmp = array[index];
    array[index] = array[i];
    array[i] = tmp;
  }
  console.log(array);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
fisherYates(arr);

// sort function
console.log("Array sorting");
const sortedArr = arr;
console.log(sortedArr);
console.log(sortedArr.sort()); // default acending order
console.log(sortedArr.sort((a, b) => a - b)); // ascending order
console.log(sortedArr.sort((a, b) => b - a)); // descending order
console.log(sortedArr.sort((a, b) => (a > b ? 1 : -1))); // ascending order
console.log(sortedArr.sort((a, b) => (a < b ? 1 : -1))); // descending order
