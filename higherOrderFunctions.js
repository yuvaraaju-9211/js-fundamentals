/** Higher Order Functions in JS */

// computed property syntax
let fruits = ["banana", "apple", "orange"];
let maparray = fruits.map((item, ind) => {
  return { [ind]: item.length };
});
console.log(maparray);

// map()
const inputs = [1, 2, 4, 6, 7, 8, 9, 12];

let data = [2, 3, 5, 7];
// let newdata1 = data.map(); // empty callback returns an error
let newdata2 = data.map((item) => {
  console.log(item); // no explicit return stmt - returns undefined values
});
console.log(newdata2);

// example: returning user objects
// Complete the createUserObjects function
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
  // Use the map function on the ids array to iterate over each element
  // Hint: The map function takes a callback that receives the current element and its index as arguments
  let userObjects = ids.map((item, ind) => {
    return { id: item, name: names[ind], image: images[ind] };
  });

  // For each id, create an object with the following properties:
  // id: the current id
  // name: the corresponding element from the names array (use the index)
  // image: the corresponding element from the images array (use the index)

  // Return the resulting array of objects
  return userObjects;
}
console.log(createUserObjects(ids, names, images));

// List of employees with their current salaries
const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];

// Function to increase salaries based on the department
function increaseSalaries(employees) {
  updatedSalaries = [];
  // Use the map function to iterate over each employee in the array
  employees.map((item) => {
    // Use a switch statement to determine the salary increase based on department
    switch (item.department) {
      case "engineering":
        updatedSalaries.push({
          id: item.id,
          name: item.name,
          department: item.department,
          salary: (item.salary * 1.15).toFixed(1),
        });
        break;
      case "sales":
        updatedSalaries.push({
          id: item.id,
          name: item.name,
          department: item.department,
          salary: (item.salary * 1.1).toFixed(1),
        });
        break;
      default:
        updatedSalaries.push({
          id: item.id,
          name: item.name,
          department: item.department,
          salary: (item.salary * 1.05).toFixed(1),
        });
        break;
    }
    // Remember to use toFixed(1) to round the salary to one decimal place.
  });
  // Return a new employee object with the updated salary
  // Return the new array of employees with updated salaries
  return updatedSalaries;
}

// You can call the function and log the result to check if the implementation is correct
console.log(increaseSalaries(employees));

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
