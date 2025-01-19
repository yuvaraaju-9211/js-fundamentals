/** Condtionals If-Else-If */
let num = 12;
if (num % 2 == 0) {
    console.log(num + ' is even');
    console.log(num, 'is even');
}

console.log("Outside if block");

num = 15;
if (num % 2 == 0) {
    console.log(num + ' is even');
} else {
    console.log(num + ' is odd');
}
console.log("Outside if block");

// let month = prompt("enter the month:");
let month = 12;
if (month > 0 && month <= 3) {
    console.log("1st quarter");
} else if (month > 3 && month <= 6) {
    console.log("2nd quarter");
} else if (month > 6 && month <= 9) {
    console.log("3rd quarter");
} else if (month > 9 && month <= 12) {
    console.log("4th quarter");
} else {
    console.log("invalid month");
}

// grade check
function gradeCheck(marks) {
    let result;

    if (marks >= 90) {
          result = "A grade";
      } else if (marks >= 80 && marks < 90) {
          result = "B grade";
      } else if (marks >= 70 && marks < 80) {
          result = "C grade";
      } else if (marks >= 60 && marks < 70) {
          result = "D grade";
      } else {
          result = "F grade";
      }
  
    return result;
  }

  // leap year check
  let year = 2013;
  let answer = false;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    answer = true;
  }
  console.log("year:", year, "is", answer ? "leap":"not a leap", "year");

  // Ternary Operator
  // condition ? expIfTrue : expIfFalse;
  let num1 = 10;
  let num2 = "10";
  let num3 = 5;
  let greater = num1>num2 ? num1>num3 ? "num1:"+num1:num3 : num2>num3 ? "num2:"+num2:num3;
  console.log("greater:", greater);

  greater = num1 > num2 ? "num1:"+num1 : num2 === num1 ? "Equal" : "num2:"+num2;
  console.log("greater:", greater);

  let flag;
  let num4 = flag ? 100 : 200;
  console.log("flag:", flag, "num:", num4);

  // traffic light using switch
  let color = "green";

  switch (color) {
    case "red":
        console.log("STOP. Light is Red");
        break;
    
    case "yellow":
        console.log("CAUTION. Light is Yellow");
        break;
    
    case "green":
        console.log("GO AHEAD. Light is Green");
        break;
    
    default:
        console.log("invalid color");
  }