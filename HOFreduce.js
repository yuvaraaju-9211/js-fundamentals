/** Higher Order Functions in JS */

const inputs = [1, 2, 4, 6, 7, 8, 9, 12];

// reduce()
// reduce(reduceFunction, initial value)
// function reduceFunction(accumulator, currValue, currIndex, arr)

const sum1 = inputs.reduce((total, num, ind) => {
  console.log(`index: ${ind} - total: ${total}`);
  return total + num;
}, 0); // with initial value
const sum2 = inputs.reduce((total, num, ind) => {
  console.log(`index: ${ind} - total: ${total}`);
  return total + num;
}); // without initial value
console.log(`sum1: ${sum1} - sum2: ${sum2}`);

// example - sum of all even numbers in given array
const sum3 = inputs.reduce((acc, num) => {
  console.log(`acc: ${acc} - num: ${num}`);
  // if (num % 2 === 0) {
  //   return (acc += num);
  // } else {
  //   return acc;
  // }
  return num % 2 === 0 ? acc + num : acc;
}, 0); // try with initial value and without initial value
console.log(`sum3 of even numbers: ${sum3}`);

// example - reduce empty array with initial value
const nums1 = [];
const sum4 = nums1.reduce((acc, currVal) => acc + currVal, 5);
console.log(sum4);
// example - reduce empty array without initial value
// const nums2 = [];
// const sum5 = nums2.reduce((acc, currVal) => acc + currVal);
// console.log(sum5);

const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

function mapContactsToCompanies(contacts) {
  // The goal is to return an object where each "key" is a company name, and the "value" is an array of names of people who work at that company.
  // Use the reduce method to iterate through each contact in the array.
  // The reduce method takes two arguments:
  // 1. A callback function (with two parameters: the accumulator (obj) and the current item (contact)).
  // 2. An initial value for the accumulator (in this case, an empty object {}).
  // For each contact:
  // 1. Check if the company name already exists as a key in the object.
  // 2. If it doesn't exist, create a new array for that company.
  // 3. Add the contact name to the array of names for that company
  // 4. Return the object(accumulator) after processing all contacts.
  // Implement your function logic below and return the object as described.
  newObj = contacts.reduce((obj, contact) => {
    console.log(obj);
    let ky = contact.company;
    let val = contact.name;
    console.log(contact, "-", ky, "-", val);
    if (!obj.hasOwnProperty(ky)) {
      // if (!Object.hasOwn(obj, ky)) {
      obj[ky] = [];
      obj[ky].push(val);
      return obj;
    } else {
      obj[ky].push(val);
      return obj;
      // console.log("acc: ", obj);
    }
  }, {});
  return newObj;
}
console.log(mapContactsToCompanies(contacts));

// key exists in object ?
// 'key' in object
// object.hasOwnProperty('key')
// optional chaining --- object?.key
