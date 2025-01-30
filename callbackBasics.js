/** Callback Functions in JS */
// very useful in asynchronous
function greet(wish) {
  console.log(`${wish()}, welcome to JavaScript coding`);
}

function sayHi() {
  return "Hi!";
}

function sayHello() {
  return "Hello";
}

function goodMorning() {
  return "Good Morning!";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);

// examples of callbacks
function doSomething(call) {
  call();
}

// option 1
doSomething(() => {
  console.log("Hello");
});

// option 2
function greeting() {
  console.log("greeting");
}
doSomething(greeting);

// option 3
doSomething(function () {
  console.log("hello");
});

// function returning functions
function greets(message) {
  // returning anonymous function
  //    return function(wishes)
  // returning arrow function
  return (wishes) => {
    console.log(`${wishes}, ${message}`);
  };
}

const msg = greets("I hope you are doing well");
msg("Hi");

// concise calling
greets("How have you been doing?")("Hello");
