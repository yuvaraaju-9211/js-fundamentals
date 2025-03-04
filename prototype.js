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
