/** Higher Order Functions in JS */

const inputs = [1, 2, 4, -3, 6, -5, 7, -1, 8, 9, -11, 12];

// filter()
// filter(filterFunction, initial value)
// function filterFunction(predicate, currValue, currIndex, arr)

const positives = inputs.filter(noNegatives);
console.log(`original array: ${inputs}`);
console.log(`positives array: ${positives}`);

function noNegatives(num) {
  return num > 0;
}

// no return statement required if single line of code
// const negatives = inputs.filter((num) => num < 0);

const negatives = inputs.filter((num) => {
  return num < 0;
});
console.log(`negatives array: ${negatives}`);

const arr = [false, 0, null, 1, true, "", "abc"];
console.log(arr.filter(Boolean));
console.log(arr.filter((value) => value !== false));
console.log(
  arr.filter((value) => value !== null && value !== 0 && value !== "")
);

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

// Complete the filterSongs function
// Do not alter the starter code.

const songs = [
  { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
  { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
  { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    duration: 480,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "Rock",
    duration: 355,
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Rock",
    duration: 302,
  },
  { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
  {
    title: "Thrash Unreal",
    artist: "Against Me!",
    genre: "Punk",
    duration: 292,
  },
  {
    title: "London Calling",
    artist: "The Clash",
    genre: "Punk",
    duration: 189,
  },
];

// Filter object with the following properties:
// - genre: string  // Desired genre to filter songs by
// - duration: number  // Minimum duration of songs to include in the result
const filters = { genre: "Rock", duration: 350 };

// Implement the filterSongs function
function filterSongs(songs, filters) {
  // Extract genre and duration from the filters object
  let genre = filters.genre;
  let duration = filters.duration;
  let filteredSongs = [];

  // Filter the songs array
  // - Include songs where the genre matches and duration is greater than or equal to the specified duration and then return the desired array of objects
  filteredSongs = songs.filter((song) => {
    return song.genre === genre && song.duration >= duration;
  });
  return filteredSongs;
}

console.log(filterSongs(songs, filters));

// key exists in object ?
// 'key' in object
// object.hasOwnProperty('key')
// optional chaining --- object?.key
