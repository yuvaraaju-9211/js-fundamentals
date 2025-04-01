/** Destructuring - aliasing */

const obj = {
  a: 1,
  b: 5,
  c: 9,
  d: ["O", "b", "j"],
  e: { value: "val" },
};

// binding pattern 1
const { a, b, c, d } = obj; // its like: const a = obj.a
console.log(a);
console.log(d);
// binding pattern 2 - renaming variable
const { a: a1 } = obj;
console.log(a1);

// assignment pattern
let g;
({ e: g } = obj); // its like: let g = obj.e;
console.log(g);

// example destructuring
let obj1 = { firstname: "John", lastname: "Doe" };
let fn, ln;
console.log(fn);
// console.log(firstname);
({ firstname: fn, lastname: ln } = obj1);
console.log(fn);

// example aliasing
let obj2 = { name: "John", country: "Bharat", age: 30 };
let name;
({ name } = obj2);
let { country: cn, age: ag } = obj2;
obj2.country = "Canada";
console.log(name, cn, ag, obj2.country);

// Array destructuring
const fruits = ["Apple", "Mango", "Banana", "Kiwi", "Berry", "Lichi"];

// binding pattern
const [f_a1, f_m] = fruits; // subsequent elements
console.log(f_a1, f_m);
const [f_a2, , f_k] = fruits; // skip an element
console.log(f_a2, f_k);

// remaining elements
const [f_a3, f_m3, ...f_rem] = fruits;
console.log(f_rem);

// specific elements in remaining elements
const [f_a4, f_m4, ...[, f_ki, f_be]] = fruits;
console.log(f_ki, f_be);

// swap elements without using temp variable
let var1 = 15;
let var2 = 25;
console.log(var1, var2);
[var1, var2] = [var2, var1];
console.log(var1, var2);

// example destructuring of nested array elements
let nestedArray = ["orange", ["apple", "banana", ["grape", "mango"], "peach"]];
let [first, [, , [third]]] = nestedArray;
console.log(first, "--", third);

// default values for missing elements
let sparseArray = ["name", "address", , "age"];
const [nm = "", addr = "", title = undefined, ageNum = ""] = sparseArray;
console.log(nm, addr, title, ageNum); // title got default value of undefined
