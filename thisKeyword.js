/** this in JS */

// prints the window object which is global object
console.log(this);

("use strict");
// var user = "Manu";
// console.log(`normal ${user}`);
// console.log(`this ${this.user}`);
// console.log(`global ${window.user}`);

// in strict mode 'this' is undefined in a function
function checkThis() {
  console.log(this);
}
checkThis();

const checkArrow = () => {
  console.log(this);
};
checkArrow();

const user1 = {
  userName: "Manu",
  userAge: 17,

  work: function () {
    console.log(this);
  },
};
user1.work();

const user2 = {
  userName: "Harry",
};
// copy function from one user object to another
user2.work = user1.work;
user2.work();

// block scope
{
  function printThis() {
    console.log(this);
  }
  printThis();
}

// IIFE
(function () {
  var message = "Hello, world!";
  function displayMessage() {
    console.log(message);
  }
  displayMessage();
})();

// scope in arrow function and closure

const name = "Alice";
const person1 = {
  name: "John",
  greet: function () {
    const innerFunc = () => {
      console.log(`Hello ${this.name}!`);
    };
    innerFunc();
  },
};

const person2 = {
  greet: function () {
    const innerFunc = () => {
      console.log(`Hello ${this.name}!!`);
    };
    innerFunc();
  },
};

const person3 = {
  name: this.name, // does not seem to access global context ?
  greet: function () {
    const innerFunc = () => {
      console.log(`Hello ${this.name}!!!`);
    };
    innerFunc();
  },
};

console.log("this keyword scoping");
// inner function is arrow function and so 'this' refers to its parent's scope
person1.greet();
// inner function is arrow function and 'this' returns undefined
person2.greet();
// inner function is arrow function and 'this' returns undefined and not global name ?
person3.greet();
