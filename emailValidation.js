/** Email Validation */
// length of email > 11 characters
// after last '.' only 2 or 3 characters
// minimum 3 characters between '@' and last '.'
let eml = "t@org.com";
let isValid = false;
let str;
let len = 0;

if (eml.length >= 11) {
    isValid = true;

    str = eml.split('@');
    console.log("array length", str.length);
    if (str[1] != undefined) {
        if (str.length == 2) {
            console.log("first part", str);
            len = (str[1]).split('.')[0].length;
            if (len >= 3) {
                isValid = true;
                len = str[1].split('.')[1].length;
                if (len == 2 || len == 3) {
                    isValid = true;
                } else {
                    isValid = false;
                    console.log("only 2 or 3 characters after last .")
                }
            } else {
                isValid = false;
                console.log("minimum 3 characters between @ and last .", len);
            }
        } else {
            isValid = false;
            console.log("multiple @ signs are not allowed");
        }
    } else {
        isValid = false;
        console.log("missing @ sign");
    }
} else {
    isValid = false;
    console.log("length of email should be greater than 11 characters");
}

console.log("valid email", isValid);


/*
const email = "testing@myorg.com";
const emailLen = email.length;
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLen - 1;

if ( emailLen < 11 ||
    lastIndex - dotIndex < 2 ||
    lastIndex - dotIndex > 3 ||
    dotIndex - atIndex < 3 ) {
        console.log("invalid email");
    }
*/

/*
const email = "testing@myorg.com";
const emailLen = email.length;
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLen - 1;

if ( emailLen >= 11 ||
    lastIndex - dotIndex < 2 ||
    lastIndex - dotIndex > 3 ||
    dotIndex - atIndex < 3 ) {
        console.log("invalid email");
    }
*/

eml = "tes@myorg.com";
const atIndex = eml.indexOf('@');
const lastDotIndex = eml.lastIndexOf('.');
const emailLen = eml.length;
let result = "invalid email";

console.log("chk:", eml, lastDotIndex-atIndex-1);
if (atIndex > 2 && (lastDotIndex-atIndex-1) > 3 && ((emailLen-lastDotIndex-1) > 1 && (emailLen-lastDotIndex-1) < 4)) {
    result = "Welcome " + eml + " to our site";
}
console.log("result:", result);