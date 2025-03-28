/** Functions in JS */

// Function declaration
function sum(a, b) {
  return a + b;
}

const sum1 = sum(5, 6);
console.log(sum1);

// Function expression
// gets hoisted as an undefined variable before the assignment
const sum2 = function (a, b) {
  // anonymous function
  return a + b;
};
console.log(sum2(9, 1));

// Arrow functions - for concise function declaration
const add1 = function (a, b) {
  // function expression
  return a + b;
};
const add2 = (a, b) => {
  // no keyword function and => symbol
  return a + b;
};
const add3 = (a, b) => a + b; // single line and no block and no return
const add4 = (a, b) => {
  a + b; // won't return if in a {} block
};
const add5 = (a, b) => {
  a + b; // no return statement. won't return implicitly
};

console.log(add1(1, 9), add2(1, 9), add3(1, 9), add4(1, 9), add5(1, 9));

let result = (() => {
  let x = 5;
  return () => {
    x += 1;
    return x;
  };
})();
console.log(result);
console.log(result());
console.log(result());

// generator arrow function
let genID = (num) => {
  let startID = num;
  return () => {
    let str = `A_2025_${startID}`;
    startID++;
    return str;
  };
};
const func = genID(99);
console.log("ID: ", func());
console.log("ID: ", func());
console.log("ID: ", func());

const greet = (name) => `Hello ${name}!`;
console.log(greet("Manu"));

// IIFE (Immediate Invoked Function Expression)
// anonymous FE that gets invoked as soon as it is declared
(function (a, b) {
  console.log(`${a} to the power ${b} = ${a ** b}`);
})(4, 2);

// IIFE as object - private/public access, module pattern
const user = (function () {
  const userData = {
    userName: "Manu",
    userAge: 17,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName: getName, updateAge: updateAge };
})();

console.log(user);
console.log(user.userData); // userData is private and not accessible directly
user.getName();
user.updateAge(1);

// examples of  IIFE
function main1() {
  return (function () {
    console.log("hello user - 1");
    return "done1";
  })();
}
console.log(main1);
const res1 = main1();
console.log(res1);

function main2() {
  return (() => {
    console.log("hello user - 2");
    return "done2";
  })();
}
console.log(main2);
const res2 = main2();
console.log(res2);

var n = 10;
(function () {
  console.log(n);
})();
