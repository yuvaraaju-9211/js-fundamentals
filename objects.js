/** Objects */

const student = {
  name: "Manu",
  age: 17,
  hobby: "Dancing",
  100: "hundred",
  show: function () {
    console.log("Student details: ");
    console.log(`${this.name} is aged ${this.age} and likes ${this.hobby}`);
  },
};

student.address = "habsiguda";
student["personality"] = "short-tempered";
console.log(student);
console.log(student.name);
console.log(student["age"]);
console.log(student["personality"]);
console.log(student["show"]);
student.show();
