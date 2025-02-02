/** Currying in JS */

// normal function definition
function add1(a, b, c) {
  return a + b + c;
}
// calling normal function
console.log("normal function: ", add1(2, 3, 4));

// Currying = somewhat of functional programming, allows creation of
// reusable functions and enables a flexible function composition
// currying - anonymous functions
function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// calling a curried function
console.log("currying: ", add2(2)(3)(4));

// currying - arrow functions
function add3(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
// calling a curried arrow function
console.log("curried arrow: ", add3(2)(3)(4));
console.log("*** --- ***");
// normal power function
function power(a, b) {
  return a ** b;
}
console.log("normal power: ", power(2, 3));

// curried power function
function pow(b) {
  return (a) => {
    return a ** b;
  };
}
// square function
const square = pow(2);
const cube = pow(3);
console.log("curried square: ", square(5));
console.log("curried cube", cube(12));
