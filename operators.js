/** Operators in JS */

// 1. Assignment Operator (=)
let a = 10; // associativity from right to left
let b = a;
let c = a = 20;
console.log("a:" + a, "b:" + b, "c:" + c);

// 2. Arithematic Operators (+, -, *, /, %)
console.log("add:", 10+2);
console.log("minus:", 10-2);
console.log("mult:", 10*2);
console.log("div:", 10/2);
console.log("mod:", 10%2);

// 3. Unary Arithematic Operators (++, --, +, -, **)
let d = 10;
d = d + 1;
console.log("d: " + d);
d++; // post increment
console.log("d: " + d);
++d; // pre increment
console.log("d: " + d);
d = -10; // unary minus
console.log("d: " + d);
console.log("d: " + d ** 2); // exponent or power

// 4. Augmented Arithematic Operator
// (+=, -=, *=, /=, ...)
let y = 10;
console.log("y: " + y);
y += 2; // compact form of incrementing for (y = y + 2)
console.log("y: " + y);

// 5. Comparison Operators
// (==, !=, <, <=, >, >=, ===, !==)

console.log("equality: ", '5' == 5); // linient
console.log("inequality: ", '5' != 5);
console.log("less than: ", '5' < 5);
console.log("less than or equal: ", '5' <= 5);
console.log("greater than: ", '5' > 5);
console.log("greater than: ", '5' >= 5);

console.log("strict equality: ", '5' === 5); // strict - both value and type are checked
console.log("strict inequality: ", '5' !== 5); // strict - both value and type are checked

// 6. Logical Operators (&&, ||, !)
console.log("AND: ", true && true);
console.log("OR: ", true || true);
console.log("NOT: ", !true);

// 7. short circuit behaviour
// FALSE: undefined, null, 0, false, "", NaN
console.log("AND stops at first false: ", 10 && 20 && 30 && false && 50);
console.log("OR stops at first true: ", 0 || false || undefined || 10 || null);

// 8. Bitwise Operators (&, |, ^, ~, <<, >>, >>>)

