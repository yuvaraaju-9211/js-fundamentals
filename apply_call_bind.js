/** Apply, Call, Bind methods */

const car = {
  name: "car",
  color: "black",
  getDetails(brand, seats) {
    console.log(
      `
        This is a ${this.color} ${this.name} of ${brand} company.
        It has ${seats} seats`
    );
  },
};

const bus = {
  name: "bus",
  color: "blue",
};

car.getDetails("Audi", 5);

// assigns the 'this' to the calling function
// sorta, substituting another object for current object

// use call method to invoke function from another object
car.getDetails.call(bus, "Star", 50);

// use apply method to invoke function from another object
car.getDetails.apply(bus, ["Gold", 30]);
car.getDetails.apply(bus, []); // undefined parameters passed

// use bind method to create bound function with exactly same body
const veh1 = car.getDetails.bind(bus, "Silver", 25);
veh1();
const veh2 = car.getDetails.bind(bus); // reusable for different parameters
veh2("Grey", 20);
veh2("Bronze", 45);

// use bind to create new function with same functionality as other
let showDetails = car.getDetails.bind(car);
showDetails("Red", 7);
