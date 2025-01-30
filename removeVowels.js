//Refactor the given impure function to pure function.
function removeVowels(obj) {
  // Hint: To make this function pure, do not modify the original obj.
  // Instead, create and return a new object with the modified value.
  // obj.value = obj.value.replace(/[aeiou]/gi, "");
  let retObj = { value: obj.value };
  retObj.value = retObj.value.replace(/[aeiou]/gi, "");
  return retObj;
}

// you don't need to do anything below.
//you can use it for testing the code.
let strObj = { value: "Hello World" };
//For pure function
let newObj = removeVowels(strObj);
removeVowels(strObj);
console.log(strObj.value);
console.log(newObj.value);
