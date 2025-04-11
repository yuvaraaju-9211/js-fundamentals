// constructor function
function VehicleFunc(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  this.getDetails = function () {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels
        `);
  };
}

const carFunc = new VehicleFunc("Car", "blue", 4);
carFunc.getDetails();

// Classes in JS

// class expression
// const vehicle = class {
//   //
// }

// class declaration
class Vehicle {
  // properties
  name;
  color;
  wheels;

  // constructor (optional if there are no initializing parameters)
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  // methods
  getDetails() {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels
        `);
  }
}

const veh1 = new Vehicle("Bus", "yellow", 6);
console.log(veh1);
veh1.getDetails();

// example person and student classes
//Create the class with ES6 standard with mentioned properties and methods.
function main() {
  //Implement your class here
  class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    speak() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }

  class Student {
    person;
    major;
    gpa;

    constructor(person, major, gpa) {
      this.person = person;
      this.major = major;
      this.gpa = gpa;
    }

    study() {
      console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }
    speak() {
      console.log(
        `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
      );
    }
  }

  return { Person, Student };
}
