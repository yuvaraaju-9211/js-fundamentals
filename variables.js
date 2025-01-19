/** variables in JavaScript are dynamically typed */
console.log("This is a string in double quotes");
console.log('This is a string in single quotes');
console.log('123'); // printing number as a string

// declaration and initializing
let x = 10;
console.log(x); // x is a number

x = 'ten';
console.log(x); // x is a string here

// declaration
let y;
console.log(y); // prints undefined

// initialization
y = 20;
console.log(y);

// declare multiple variables in a single line
let a, b, c;
// declare multiple and initialize few variables in a single line
let m, n, d=10,e=20,f=30;

/** var, const and let */
// scope and strictness
// var - before 2015/ES6, only way to define variables
// let and const - introduced in ES6

// const - needs to be defined and initialized in one go
// const - not allowed to change through out the program

// var - 