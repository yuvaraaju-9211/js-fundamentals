/** wrapper object gets created for primitive data type */
let num = 10;
let str = "a string";
let bigNum = 27n;
let bool = true;
let nothing = null;
let undef = undefined;

console.log(num.__proto__);
console.log(str.__proto__);
console.log(bigNum.__proto__);
console.log(bool.__proto__);

// no wrapper objects for null and undefined
// console.log(nothing.__proto__);
// console.log(undef.__proto__);
