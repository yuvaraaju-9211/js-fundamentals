/** Object Literals */
const movie1 = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },
  getDetails() {
    console.log(`
        Title: ${this.title}
        Year: ${movie1.year}
        Genre: ${this.genre}
        Cast: ${movie1.cast}
        `); // this is associated with the object it is called on
  },

  getMovieDetails: function (detail) {
    console.log(movie1[detail]);
  },
};

movie1.getDetails();

const movie2 = {
  title: "Harry Potter",
  year: 2018,
  genre: "Fiction, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },
  getDetails() {
    console.log(`
          Title: ${this.title}
          Year: ${movie1.year}
          Genre: ${this.genre}
          Cast: ${movie1.cast}
          `); // this is associated with the object it is called on
  },

  getMovieDetails: function (detail) {
    console.log(movie2[detail]);
  },
};

movie2.getDetails();
