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

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

// key exists in object ?
// 'key' in object
// object.hasOwnProperty('key')
// optional chaining --- object?.key
