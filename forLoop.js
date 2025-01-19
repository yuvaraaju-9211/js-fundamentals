/** For, While, Do-while */

// For loop = Entry control loop
/* for (let i = 1; i <= 10; i++) {
    console.log("iter: ", i);
}
 */
// sum of even numbers
function sumOfEvenNumbers(limit) {
    // Initialize sum to store the sum of even numbers
    let result = 0;
  
    // Iterate through numbers from 1 to the given limit
    // Check if the current number is even
    // If even, add it to the sum
    let ind;
    for (ind=1; ind <= limit; ind++) {
        if (ind % 2 == 0) {
            result += ind;
        }
    }
  
    // Return the sum of even numbers
    return result;
}

// factorial
function factorial(limit) {
    let result = 1;

    let num;
    for (num = 1; num <= limit; num++) {
        result *= num;
    }

    return result;
}

// print all even numbers between 1 - 50
/* let ind = 2;
for ( ; ind <= 50; ind += 2) {
    console.log(ind);
    // ind += 2;
}
 */
// print all odd numbers between 1 - 50
/* ind = 1;
for ( ; ind <= 50; ) {
    console.log(ind);
    ind += 2;
}
 */
// prime or not
let isPrime = true;
let num = 11;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

// composite or not
function Composite(number) {
    let answer; // This variable will store the result (true or false)

    // Initialize a variable to count the number of factors
    let cnt = 2;
    answer = false;

    if (number == 0 || number == 1) return answer;
    // Loop through all integers from 2 up to number-1.
    // Increment the count for each integer that is a divisor of 'number'.
    for (let ind = 2; ind < number; ind++) {
        if (number % ind == 0) {
            cnt++;
        }
    }

    // After the loop, check if the count of factors is more than 2
    if (cnt > 2) {
        answer = true;
    }
    // Return the result
    return answer;
  }