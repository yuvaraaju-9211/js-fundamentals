/** Prototypes in JS */
// by default all objects have a prototype property

function Movie(title) {
  this.title = title;
}

const movie1 = new Movie("The Avengers");
console.log(movie1);
// console.log(movie1.title);
movie1.year = 2012; // add property to this object only
console.log(movie1.__proto__);

const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2.__proto__); // prototypal inheritance from Object()
console.log(movie2.__proto__.__proto__); // prototypal inheritance
console.log(Object.__proto__); // prototypal inheritance

console.log("*********");
console.log(movie2.__proto__ === Movie.prototype);
console.log(movie2.__proto__.__proto__ === Object.prototype);

// Object is the highest in hierarchy
console.log(movie2.__proto__.__proto__.__proto__);

const movie3 = {
  title: String,
  year: Number,
  genre: String,
  cast: {
    main_lead: String,
    others: String,
  },
};
// object literal and its prototype
console.log(movie3.__proto__);

// assigning values to prototype

function Person(name) {
  this.name = name;
}
Person.prototype.age = 30;
console.log(Person.prototype.age);
const john = new Person("John");
john.__proto__.age = 40;
console.log(john.age);
console.log(Person.prototype.age);

const myObject = {};
// myObject.__proto__.newProperty = "value";
// myObject.prototype.newProperty = "value";
myObject.newProperty = "value";
Object.prototype.newProperty = "value1";
console.log(`myobject: ${myObject.newProperty}`);
console.log(`myobject: proto ${myObject.prototype}`);
console.log(`myobject _prot : ${myObject.__proto__.newProperty}`);
console.log(myObject);
const anoObject = {};
console.log(`anoObject: _prot : ${anoObject.__proto__.newProperty}`);
console.log(anoObject);
myObject.__proto__.newProperty = "value2";
