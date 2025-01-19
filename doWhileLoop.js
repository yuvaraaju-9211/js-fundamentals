/** For, While, Do-while */

// Do-While loop (at least one iteration) = Exit control loop
let i = 1;
/* do {
    console.log("iter: ", i);
    i++;
} while (i <= 10);
 */
// Guess the number
// let randomNum = 8;
let randomNum = Math.round(Math.random() * 10);
console.log(randomNum);

let guessedNum;
do {
    guessedNum = prompt("guess the number:");
    if (guessedNum == randomNum) {
        console.log("guessed correctly");
    } else {
        console.log("take another guess");
    }
} while (guessedNum != randomNum);
console.log("end of do-while loop");