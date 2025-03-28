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
