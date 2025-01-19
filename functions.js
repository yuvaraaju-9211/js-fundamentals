/** Functions with parameters */

// declare or define
function greetUser() {
    console.log("Hello User, welcome to the app");
}

// function with a parameter
function welcomeUser(userName) {
    console.log(`Hello ${userName}, welcome to the app`);
}

// function with multiple parameters
function helloUser(userName, medium) {
    console.log(`Hello ${userName}, welcome to the ${medium}`);
}

// call or invoke
greetUser();
console.log("---------");
welcomeUser();
welcomeUser("Yuva");
console.log("---------");
helloUser("Yuva", "App");
helloUser("Manu", "Heart");
console.log("---------");
printDetails("Manu", 2008);

function printDetails(name, age) {
    console.log(`Name: ${name}`);
    calcuateAge(age);
}

function calcuateAge(birthYear) {
    console.log(new Date().getFullYear() - birthYear + ' years old');
}

// function sum(num1, num2) // without default parameters
function sum(num1=0, num2=0) { // with default parameters
    console.log(`Sum of the numbers is: ${num1 + num2}`);
}
sum(4, 5);