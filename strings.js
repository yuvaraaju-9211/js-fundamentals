/** String wapper object */
let str = "JavaScript is wonderful.";
let str1 = "It is dynamically typed.";
let str2 = "Widely used language.";

console.log(str.__proto__);

console.log(str.charAt(4));
console.log(str.indexOf('S'));
console.log(str.indexOf("Scr"));

console.log(str.indexOf("i"));
console.log(str.indexOf("i",8));

console.log(str.lastIndexOf("r"));
console.log(str.lastIndexOf("r",15));

console.log(str.concat(str1.concat(str2)));
console.log(str.length);

let message = "Hello! World!";
let character = message.charAt(15);
console.log(typeof character);
console.log("output" + character + "--");

console.log(str1.concat(str2).toLowerCase());

// using Single Quote('')
let myString='JavaScript language';
// using Double Quotes("")
let my_String="JavaScript language";
// using Backticks(``)
let my$String=`JavaScript language`;
let myTemplateString=`JavaScript
 language`;

 let indexOfChar = str1.concat(str2).indexOf("used");
 console.log("output: " + indexOfChar);