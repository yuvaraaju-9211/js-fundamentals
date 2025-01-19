/** Methods in String */
let str = "JavaScript is a dynamically is typed language.";

// includes
console.log(str.includes("iS"));

// replace
console.log(str.replace("is", "was"));

// replaceAll
console.log(str.replaceAll("is", "was"));

// trim
console.log(str.trim());

// substring
console.log(str.substring(4));
console.log(str.substring(4, 12));
console.log(str.substring(-4, 12)); // converts -4 to a 0

// slice
console.log(str.slice(-4)); // last 4 characters
console.log(str.slice(-9, -3));

// split
let words = str.split(" ");
console.log(words);
console.log(words.length);
