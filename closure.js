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

// example of closure
// Complete the genrateID function
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
