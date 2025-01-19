/** For, While, Do-while */

// While loop (repeating if's) = Entry control loop
let i = 1;
while (i <= 10) {
    console.log("iter: ", i);
    i++;
}

function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
    let answer;

    // Initialize the answer variable with the principal amount
    answer = principalAmount;

    // create and initialize a year counter to 1
    let yearCnt = 1;

    // Use a while loop to calculate the total amount over the specified number of years
    while (yearCnt <= numberOfYears) {
        answer = answer + (answer * annualInterestRate);
        yearCnt++;
    }

    // Return the final amount after all years
    return answer;
  }