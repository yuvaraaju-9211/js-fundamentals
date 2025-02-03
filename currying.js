/** Currying in JS */

// // normal function definition
// function add1(a, b, c) {
//   return a + b + c;
// }
// // calling normal function
// console.log("normal function: ", add1(2, 3, 4));

// // Currying = somewhat of functional programming, allows creation of
// // reusable functions and enables a flexible function composition
// // currying - anonymous functions
// function add2(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// // calling a curried function
// console.log("currying: ", add2(2)(3)(4));

// // currying - arrow functions
// function add3(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }
// // calling a curried arrow function
// console.log("curried arrow: ", add3(2)(3)(4));
// console.log("*** --- ***");
// // normal power function
// function power(a, b) {
//   return a ** b;
// }
// console.log("normal power: ", power(2, 3));

// // curried power function
// function pow(b) {
//   return (a) => {
//     return a ** b;
//   };
// }
// // square function
// const square = pow(2);
// const cube = pow(3);
// console.log("curried square: ", square(5));
// console.log("curried cube", cube(12));

// Function to calculate the price of a pizza based on size, toppings, and quantity
function pizzaPricing(size) {
  // Create an object to store the base prices for each pizza size
  const price = {
    small: 8.0,
    medium: 10.0,
    large: 12.0,
  };
  finalPrice = 0.0;

  // Return a function(curried function) that takes the selected toppings as a parameter
  return function (arr) {
    // Return another function inside the curried function that takes the quantity as a parameter
    return function (qty) {
      return ((price[size] + arr.length * 1.5) * qty).toFixed(2);
    };
  };
}
const pizzas = pizzaPricing("small")(["cheese", "pineapple", "jalapeno"])(2);
console.log(`pizza price: ${pizzas}`);
