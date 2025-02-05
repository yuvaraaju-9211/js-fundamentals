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

// key exists in object ?
// 'key' in object
// object.hasOwnProperty('key')
// optional chaining --- object?.key
