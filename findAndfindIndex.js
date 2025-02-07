/** find, findIndex and other functions */
// every, fill, findLast, findLastIndex, forEach

const inputs = [22, 13, 15, 77, 65, 98, 76, 44, 55];
const fin = 19;

// returns the num if it exists otherwise undefined
const find1 = inputs.find((num) => num == fin);
console.log(`is ${fin} in inputs: ${find1}`);

// returns the index of num if it exists otherwise -1
const find2 = inputs.findIndex((num) => num == 15);

const numbers = [1, 4, 2, 3, 8, 2, 4, 5, 7, 6];
const filteredNums = numbers.filter((element, index, array) => {
  // console.log(`${array.lastIndexOf(element)}: ${element} - ${index}`);
  console.log(`${array.indexOf(element)}: ${element} - ${index}`);
  // console.log("-->", array);
  return array.indexOf(element) === index;
});
console.log(filteredNums);
