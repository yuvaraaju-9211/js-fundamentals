/**
 * Data types are of 2 categories:
 *  1. Object
 *  2. Primitive data types
 */

/** Primitive data types */
// number (64 bit)
// string
// boolean
// undefined
// null
// symbol (ES6/2015)
// BigInt (ES2020)

// number (64 bit)
let num = 20;
console.log(typeof num);
console.log(num);

// string
const firstName = "Yuva";
const lastName = 'Raaju';
const nickName = `Unnam`;
console.log(typeof firstName);
console.log(firstName);
console.log(typeof lastName);
console.log(lastName);
console.log(typeof nickName);
console.log(nickName);

// boolean
let bool = false;
console.log(typeof bool);
console.log(bool);

// undefined
let a;
console.log(typeof a);
console.log(a);

// null
let b = null;
console.log(typeof b); // null is an object
console.log(b);

// symbol (ES6/2015)

// bigint (ES2020)
let num1 = 10n; // number ending with n is bigint
console.log(typeof num1);
console.log(num1);

// Interesting facts about variables

let hugeNum = 20n;
console.log(typeof hugeNum);
console.log(hugeNum);

console.log("Number object: ");
console.log("Max: " + Number.MAX_VALUE);
console.log("Min: " + Number.MIN_VALUE);
console.log("Max x 10: " + Number.MAX_VALUE * 10);
let num3 = Infinity; // Infinity is an object
console.log("12 / 0 = " + 12 / 0);
console.log("196 / Infinity = " + 196 / Infinity);

