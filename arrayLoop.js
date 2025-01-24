/** Loop over arrays */

const Students = ["Teena", "Mina", "Manu", "Chitti", "Seema"];
for (let i = 0; i < Students.length; i++) {
  console.log(`Roll no. ${i + 1}: ${Students[i]}`);
}

const arr = [4, 2, 34, 4, 1, 12, 1, 4];
let answer = [];
let item, cnt;
for (k = 0; k < arr.length; k++) {
  cnt = 0;
  item = arr[k];
  for (j = 0; j < arr.length; j++) {
    if (arr[j] == item) {
      cnt++;
    }
  }
  if (cnt > 1 && answer.includes(item) != true) {
    answer.push(item);
  }
}
console.log("duplicates: ", answer);

// for .. in loop (access element using index)
for (let i in Students) {
  // "i" index is a string, but is coerced as a number when accessed as [i]
  console.log(`Roll no. ${i + 1}: ${Students[i]}`);
  console.log(`Roll no. ${Number(i) + 1}: ${Students[i]}`);
}

// for .. of loop (access element directly)
for (student of Students) {
  // student is the iterator and gets each element
  console.log(`Student: ${student}`);
}

// find duplicates
function findDuplicates(arr) {
  let item;
  let answer = [];
  for (let k in arr) {
    item = arr[k];
    let cnt = 0;
    for (num of arr) {
      if (num === item) {
        cnt++;
      }
    }
    if (cnt > 1 && answer.includes(item) != true) {
      answer.push(item);
    }
  }
  return answer;
}
console.log(findDuplicates(arr));

let numArr = [23, 43, 67, 89, 62, 29];
let elem = 89;
function findTheNumber(arr, ele) {
  let answer = -1;
  for (const i in arr) {
    if (arr[i] !== ele) {
      continue;
    } else {
      answer = i - 0;
    }
  }

  return answer;
}
console.log(findTheNumber(numArr, elem));
