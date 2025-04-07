/** Constructor Function */

// factory constructor function
function movie(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`
          Title: ${this.title}
          Year: ${this.year}
          `);
    },
  };
  return movieObj;
}

const movie1 = movie("The Avengers", 2012);
console.log(movie1);
movie1.getDetails();

const movie2 = movie("Avatar", 2018);
console.log(movie2);
movie2.getDetails();

// constructor function for movie
function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.getDetails = function () {
    console.log(`
    Title: ${this.title}
    Year: ${this.year}
    `);
  };
}

// new keyword
const movie3 = new Movie("Harry Potter", 2016);
console.log(movie3);
movie3.getDetails();

// example of refactoring code
function main() {
  // Refactor the gadget constructor function
  // const Gadget = (brand, type) => {
  function Gadget(brand, type) {
    this.brand = brand;
    this.type = type;

    // Refactor the describeGadget() method here
    this.describeGadget = () => {
      return `This gadget is a ${type} from ${brand}.`;
    };
  }
  const gadget1 = new Gadget("sony", "laptop"); // returns an TypeError
  console.log(gadget1.describeGadget());
  // Do not modify the return statement
  return Gadget;
}
main();
