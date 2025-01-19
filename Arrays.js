/** Arrays in JS */

// homogenous - items of same data type
const historyMarks = [10, 20, 35, 40, 50, 55, 60];
console.log(historyMarks);
console.log(historyMarks[3]);
historyMarks[0] = 15;
console.log(historyMarks);

// heterogenous - items of different data types
const studentDetails = ["Manu", 2008, 'Dancing'];
console.log(studentDetails);

// define using new
const arr = new Array("Manu", 'Chitti');
console.log(arr);

// Arrays in JS are dynamic - can be shrunk and grown
// const applies to primitive data types
const cities = new Array("Hyderabad", "Mumbai", "Delhi", "Chennai", "Kolkata");
console.log(cities);

// Methods of Arrays

/* Adding an element */
// push()
// unshift()

const teams = ["MI", "RCB", "DC", "CSK"];
console.log(teams);
teams.push("GT", "LSG"); // adds elements at the end and returns new length
console.log(teams);
teams.unshift("RR"); // adds element at the start and returns new length
console.log(teams);

/* Removing an element */
// pop()
// shift()
let team = teams.pop(); // removes element from the end and return the element
console.log(teams);
console.log(`current team: ${team}`);

team = teams.shift(); // removes element from the start and return the element
console.log(`current team: ${team}`);

/* check the element is present or not */
// indexOf()
// includes()
let dcIndex = teams.indexOf("DC");
console.log(`DC team index: ${dcIndex}`);
let rrIndex = teams.indexOf("RR"); // RR is already pop'ed so doesn't exist
console.log(`RR team index: ${rrIndex}`);

let hasTeam = false;
hasTeam = teams.includes("CSK"); // returns a boolean
console.log(`Is CSK a valid team? ${hasTeam}`);
hasTeam = teams.includes("JJ");
console.log(`Is JJ a valid team? ${hasTeam}`);

/* manipulating arrays */
// slice() and splice()
// concat()

// slice extracts elements without altering the original array
console.log(teams);
console.log("slice",teams.slice(3));
console.log("-ve slice",teams.slice(-2));

// splice inserts/deletes elements in the original array
console.log(teams);
console.log("cut array", teams.splice(1,2)); // from index 1, gives 2 elements
console.log("remaining", teams); // remaining elements in the array
console.log("inserting", teams.splice(1,0,"DC","RCB")); // from index 1, gives 0 elements, adds 2
console.log(teams);

// concat merges two arrays but does not modify original arrays
const mergedArray = teams.concat(cities);
console.log(mergedArray);