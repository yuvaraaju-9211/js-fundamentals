/** Nested Loops */

// print multiplication tables
let num;

num = 4;
for (num = 2; num <= 5; num++) {
    console.log(`multiplication table - ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// primes between 2 to 50
function sumOfPrimeNumbers(limit) {
    let answer = 0;
    let cntDivisors;
    for (num = 2; num <= limit; num++) {
        cntDivisors = 1;
        for (let i = 2; i <= num; i++) {
            if (num % i == 0) {
                cntDivisors++;
            }
        }
        if (cntDivisors == 2) {
            // console.log(`${num} is prime`);
            answer += num;
        }
    }
    return answer;
}

let x = 15;
switch(true) {
    case (x > 10 && x < 20):
        console.log("The num is between 10 and 20");
    case (x >20 && x < 50):
        console.log("The num is between 20 and 50");
}

let tempF = 98.6;
let tempC;
tempC = (tempF - 32) * 5 / 9;
if (tempC >= 37) {
    console.log(`You have fever! Your temperatur is ${tempC.toFixed(1)}°C`);
} else {
    console.log(`You have no fever! Your temperatur is ${tempC.toFixed(1)}°C`);
}
console.log("Temperature from Fahrenheit to Celsius",tempC);


// sum of factors of given number
function sumOfFactors(limit) {
    let answer = 0;
    let num;
    for (num = 1; num <= limit; num++) {
        if (limit % num == 0) {
            // valid factor of given number
            answer += num;
        }
    }
    return answer;
}

console.log("sum of factors: ", sumOfFactors(12));