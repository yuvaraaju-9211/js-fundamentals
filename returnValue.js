/** Functions that return values */

// function that does not return value
function printSquared(num=1) {
    console.log(num * num);
}

// function that returns a value
function squared(num=1) {
    return num * num;
}

printSquared(5);
sqr = squared(5);
console.log(`square = ${sqr}`);

// extract last digit in a given number
function lastDigit(num1, num2) {
    let val = false;
    
    if (num1 === num2) {
        val = true;
    } else {
        // compare last digit of given numbers
        if (num1 % 10 == num2 % 10) {
            val = true;
        }
    }
    return val;
}

// count of digits in a given number
function numberOfDigits(num1) {
    // convert number to string and get its length
    console.log(String(num1).length);

    // count using Math class
    let rem = num1;
    let cnt = 0;
    do {
        rem = Math.floor(rem / 10);
        cnt++;
        console.log(`count of digits in ${num1}: rem is ${rem}: ${cnt}`);
    } while (rem != 0);
    console.log(`count of digits in ${num1} = ${cnt}`);
}

numberOfDigits(159);