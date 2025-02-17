/** Objects */

let student = {
  name: "Manu",
  age: 17,
  hobby: "Dancing",
  100: "hundred",
  show: function () {
    console.log("Student details: ");
    console.log(`${this.name} is aged ${this.age} and likes ${this.hobby}`);
  },
};

student.address = "habsiguda"; // add a property with dot notation
student["personality"] = "short-tempered"; // add a property with square brackets
student = { ...student, section: "B" }; // add property with spread operator
console.log(student); // print object
console.log(student.name); // access property using key
console.log(student["age"]); // access property with square brackets
console.log(student["personality"]);
console.log(student["show"]);
student.show(); // call a member method

console.log("shallow copy");
const student1 = student; // creates a shallow copy (pointer)
console.log(student1.name);
console.log(student1["name"]);

var x = 10;
console.log(`x: ${x}`); // global object property
console.log(`x: ${this.x}`); // this === global
console.log(`x: ${window.x}`); // window (browser) === global (node.js)
console.log(`x: ${global.x}`); // window (browser) === global (node.js)
