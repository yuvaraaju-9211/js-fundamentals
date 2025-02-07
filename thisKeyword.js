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
(function() {
  var message = "Hello, world!";
  function displayMessage() {
    console.log(message);
  }
  displayMessage();
})();