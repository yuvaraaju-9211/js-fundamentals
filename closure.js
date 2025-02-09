let a = "Global";
function outerPrint() {
  let b = "OuterPrint";
  function innerPrint() {
    let c = "innerPrint";
    return `${a} -> ${b} -> ${c}`;
  }
  const show = innerPrint();
  console.log(show);
}
outerPrint();

// one style to write closure
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  function decrement() {
    count--;
    console.log(count);
  }
  return { increment, decrement };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

// another style to write closure
function cart() {
  let items = 0;
  return {
    addItem: function () {
      items++;
    },
    getItem: function () {
      return items;
    },
  };
}
const clozure = cart();
clozure.addItem();
clozure.addItem();
clozure.addItem();
console.log(clozure.getItem());

// examples of closures

// genrateID function
function generateID(num) {
  //Implement Your function here
  let startID = num;
  return function () {
    let retStr = `A_2023_${startID}`;
    startID++;
    return retStr;
  };
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func()); // Output: A_2023_100

// performOperation
function performOperation(operation) {
  switch (operation) {
    case "sum":
      return function (...numbers) {
        return numbers.reduce((acc, cur) => acc + cur, 0);
      };
      break;
    case "product":
      return function (...numbers) {
        return numbers.reduce((acc, cur) => acc * cur, 1);
      };
      break;
    default:
      return function () {
        return "invalid operation";
      };
  }
}

console.log("examples of closures");
const Op1 = performOperation("sum");
const Op2 = performOperation("product");
const Op7 = performOperation("messy");

console.log(Op1(2, 3, 4));
console.log(Op2(2, 3, 4, 5));
console.log(Op7(1, 2, 3));
