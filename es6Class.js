// constructor function
function VehicleFunc(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  // method part of the constructor
  this.getDetails = function () {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels
        `);
  };
}

const carFunc = new VehicleFunc("Car", "blue", 4);
carFunc.getDetails();
console.log(carFunc.hasOwnProperty("getDetails"));

// Classes in JS

// class expression
// const vehicle = class {
//   //
// }

// class declaration
class Vehicle {
  // public properties
  name;
  color;
  wheels;

  // private properties
  #regNumber;

  // constructor (optional if there are no initializing parameters)
  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.#regNumber = number;
  }

  // private method
  #getNumber() {
    return this.#regNumber;
  }

  // public methods not part of the constructor
  // bad practice to expose private property directly in a public method
  getDetails() {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels
        Registration number: ${this.#regNumber};
        Registration: ${this.#getNumber()}.
        `);
  }
}

const veh1 = new Vehicle("Bus", "yellow", 6, "TS27F6363");
console.log(veh1);
veh1.getDetails();
console.log(veh1.hasOwnProperty("getDetails"));

const veh2 = new Vehicle("Boat", "white", 0, "TS27B0404");
console.log(veh2);
Vehicle.prototype.showDetails = function () {
  console.log(`
    The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.
    `);
};
veh2.getDetails();
veh2.showDetails();
console.log(veh2.hasOwnProperty("getDetails"));
console.log(veh2.hasOwnProperty("showDetails"));

// access to private property is not allowed - gives syntax error
// console.log(`access pvt prop: ${veh1.#regNumber}`);

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

// refactor code for Car class
class Car {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;

    // method part of constructor
    this.getMake = function () {
      return this.make;
    };
  }

  // method part of class definition
  getModel() {
    return this.model;
  }

  // method part of class definition
  getYear() {
    return this.year;
  }
}

// method part of prototype
Car.prototype.getColor = function () {
  return this.color;
};

// method part of prototype
Car.prototype.getMileage = function () {
  return this.mileage;
};

const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
console.log(myCar.getMake());
console.log(myCar.getModel());
console.log(myCar.getYear());
console.log(myCar.getColor());
console.log(myCar.getMileage());
