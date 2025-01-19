/** Operator Precedence */
// BODMAS or PEMDAS

let maths = 20;
let biology = 18;
let physics = 19;
let chemistry = 17;

let avg = maths + biology + physics + chemistry / 4;
console.log("average marks: ", avg);
avg = (maths + biology + physics + chemistry) / 4;
console.log("average marks - with precedence: ", avg);
