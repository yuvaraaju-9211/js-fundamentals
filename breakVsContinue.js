// Break vs Continue
const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];
const evenNums = [];

// continue - continues loop iteration, break - exits the loop
for (i of inputs) {
  if (i % 2 !== 0) {
    continue; // if odd, move on
  }
  // store it, if even
  evenNums.push(i);
  if (evenNums.length === 5) {
    break; // nothing after this gets processed
  }
  console.log(evenNums);
}
console.log(evenNums);

function sumOfArray(arr) {
  sum = 0;
  for (i of arr) {
    if (i % 2 !== 0) {
      continue; // skip odd numbers
    } else {
      if (i % 5 === 0) {
        continue; // skip multiples of 5
      } else {
        sum += i; // otherwise add them
      }
    }
  }
  return sum;
}

console.log(sumOfArray(inputs));
