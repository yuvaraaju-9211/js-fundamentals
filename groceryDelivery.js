const productList = [
  { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
  {
    id: "p2",
    name: "Oranges",
    category: "Fruits",
    price: 1.99,
    inStock: false,
  },
  {
    id: "p3",
    name: "Blueberries",
    category: "Fruits",
    price: 4.99,
    inStock: true,
  },
  {
    id: "p4",
    name: "Carrots",
    category: "Vegetables",
    price: 1.0,
    inStock: true,
  },
  {
    id: "p5",
    name: "Tomatoes",
    category: "Vegetables",
    price: 1.5,
    inStock: true,
  },
];

//give two parameters to the given function
function searchAndBuyProduct(productList, pName) {
  // Step 1: Find the product object with the matching name using the find method
  pObj = productList.find((obj) => {
    // console.log(`${obj.name} = ${pName}`);
    if (obj.name === pName) {
      if (obj.inStock) {
        obj.inStock = false;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  // Step 2: Check if the product was found and if it's in stock
  console.log(pObj);
}

searchAndBuyProduct(productList, "Tomatoes");
