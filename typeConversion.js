/** Type Conversion */
// explicitly data type is changed
// broadly grouped into 3 - String, Number and Boolean

/* Convert to String */
// String();
console.log(100);
console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString(); // String uses toString under the hood
console.log((123).toString());
console.log(true.toString());
// console.log((null).toString());
// console.log((undefined).toString());

/* Convert to Number */
console.log("*** NUMBERS ***");
// Number();
console.log(Number("25"));
console.log("value");
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));

// Unary + Operator - works on variables
let a = "123yuva";
console.log(+a);
a = "123";
console.log(+a);

// parseFloat();
console.log("** floats **");
console.log(parseFloat("1.512e308"));
console.log(parseFloat("1e309"));
console.log(parseFloat("12f345"));
console.log(parseFloat("f12345"));
console.log(parseFloat("1234.5"));
console.log(parseFloat("12345e18.99"));

// parseInt();
console.log("** integers **");
console.log(parseInt("12345"));
console.log(parseInt("12f345"));
console.log(parseInt("f12345"));
console.log(parseInt("1234.5"));

/* Convert to Boolean */
// Boolean();
console.log("** boolean **");
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("str"));

console.log(5 + '5');
console.log(parseInt(' '));
console.log(parseFloat(" "));
console.log(parseFloat(" ")+parseFloat("10"));
