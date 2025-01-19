/** Rest and Spread operators */

const Students = ["Teena", "Mina", "Manu", "Chitti", "Seema"];
for (let i = 0; i < Students.length; i++) {
  console.log(`Roll no. ${i + 1}: ${Students[i]}`);
}

const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritik", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const julyBatch = [];

function addStudent(batch, student) {
  batch.push(student);
  console.log(batch);
}

addStudent(aprilBatch, "Manu");
addStudent(aprilBatch, "Chitti");

// Rest ...  takes remaining arguments as an array
function addStudents(batch, ...students) {
  for (i of students) {
    batch.push(i);
  }
  console.log(batch);
}

// Spread ...
// changes to source gets forwarded - more like pointers in C/C++
console.log(juneBatch);
const newBatch = juneBatch;
console.log(newBatch);
juneBatch.push("Raeesa");
console.log(juneBatch);
console.log(newBatch);

// makes fresh copy of array and unfollows source
mergedBatch = [...juneBatch];
juneBatch.push("Reena");
console.log(juneBatch);
console.log(mergedBatch);

// used to concatenate arrays
mergedBatch = [...juneBatch, ...mayBatch];
console.log(mergedBatch);

// mergeArray keeping the order and ignoring duplicates
arr1 = [1, 2, 4, 5, 7];
arr2 = [3, 4, 6, 7, 9, 0];
function mergeArray(arr1, arr2) {
  finArr = [...arr1];

  // using for .. in
  for (let i in arr2) {
    if (!arr1.includes(arr2[i])) {
      finArr.push(arr2[i]);
    }
  }
  finArr.push(-1);
  // using for .. of
  for (i of arr2) {
    if (!arr1.includes(i)) {
      finArr.push(i);
    }
  }

  return finArr;
}
console.log(mergeArray(arr1, arr2));
