/** Higher Order Functions */

const inputs = [2, 3, 4, 5, 6, 7, 8, 9, 12, 1, 16];

function square(input) {
  const squared = [];
  for (let num of input) {
    squared.push(num * num);
  }
  return squared;
}

function cube(input) {
  const cubed = [];
  for (let num of input) {
    cubed.push(num * num * num);
  }
  return cubed;
}

console.log(inputs);
console.log(square(inputs));
console.log(cube(inputs));

// don't repeat yourself (DRY) - consice form
function operation(input, fn) {
  const output = [];
  for (let num of input) {
    output.push(fn(num));
  }
  return output;
}

function squaring(num) {
  return num * num;
}

function cubing(num) {
  return num * num * num;
}

console.log(operation(inputs, squaring));
console.log(operation(inputs, cubing));

function main() {
  // Define the array to be processed
  // const array = [];

  // Create the customMap function with two arguments
  function customMap(array, fn) {
    // Create an empty(new) array to store the results.
    const results = [];

    // Iterate over each element in the input array with the help of loop
    for (let num of array) {
      // Inside the loop Apply the callback function to the current element
      retNum = fn(num);
      // Add the result to the new array with the help of push method
      results.push(retNum);
    }

    // Return the new array outside the loop with the modified values
    return results;
  }

  return customMap;
}

function ops(num) {
  return num * num;
}

fnc = main();
console.log(fnc(inputs, ops));
