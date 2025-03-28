const car = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};

console.log(car);
const car1 = Object.create(car);
console.log(car1);
console.log("*****");
console.log(car.__proto__);
console.log(car1.__proto__);

car.name = "Audi";
console.log(car1.name);
car1.name = "Nissan";
console.log(car1.name);

const car2 = new Object(car);
console.log(car2.__proto__);
console.log(car2.name);

// example using object.create
let parent = { name: "parent", children: [] };
let child1 = Object.create(parent);
child1.name = "child1";
child1.children.push(child1.name);
console.log(parent);
console.log(child1);
