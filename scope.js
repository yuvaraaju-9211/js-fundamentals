/** Scope in JS */

var a = 10;
let b = 20;
const c = 30;

function print() {
  var a = "ten";
  let b = "twenty";
  console.log("*** Inside print function ***");
  console.log(a, b, c);

  function innerPrint() {
    var a = "inner10";
    console.log("***** Inside inner print function *****");
    console.log(a, b, c);
    console.log("***** *****");
  }
  innerPrint();
  console.log("*** ***");
}

console.log(a, b, c);
print();

function foo() {
  // "use strict"; // variables need to be explicitly defined before usage
  let x = 10;
}
foo();
// y = 20;

var p = 10;
// let p = 20;
console.log(p);

function outer() {
  let x = 10;
  if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
  }
  //console.log(x + y + z);
}
outer();
var x, y, z;
console.log(x + y + z);
