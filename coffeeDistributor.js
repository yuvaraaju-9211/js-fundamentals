// coffee distributor

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

// Function to calculate the total value of all orders
// Apply discounts if applicable
function totalOrderValue(orders, applyDiscount) {
  // Map over each order to calculate its total value
  // Use the reduce method to sum the prices of all items in the order
  // Check if a discountCode is present and apply the discount using the provided callback function
  // Your implementation should:
  // 1. Calculate the total value for each order
  // 2. Apply the discount (if any) using the applyDiscount callback
  // 3. Sum up the totals for all orders
  // 4. Return the final grand total rounded to 2 decimal places
  let grandTotal = 0.0;
  orders.map((order) => {
    // console.log(`order ${order.orderNumber}`);
    let subTotal = 0.0;
    // console.log("items: ", order.items);
    subTotal = order.items.reduce((orderTotal, item) => {
      orderTotal += applyDiscount(
        order.discountCode ? order.discountCode : "0",
        item.price
      );
      // console.log("order total:", orderTotal);
      return orderTotal;
    }, 0);
    grandTotal += subTotal;
    // console.log("order total: returned ", subTotal);
  });
  return grandTotal.toFixed(2);
}

//Below is the callback function to calculate the discount
const applyDiscount = (discountCode, total) => {
  // console.log(`discount code: ${discountCode}, total: ${total}`);
  let discount = 0.0;
  // Implement discount logic here
  switch (discountCode) {
    case "COFFEELOVER":
      return total - total * 0.1;
      break;
    case "TEALOVER":
      return total - total * 0.2;
      break;
    default:
      return total;
  }
};

console.log("total price: ", totalOrderValue(orders, applyDiscount));
