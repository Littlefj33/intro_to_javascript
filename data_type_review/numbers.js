// NUMBERS
// Basic arithmetic operations
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// Modulus (remainder)
console.log(a % b); // 0

// Increment and Decrement
a++;
console.log(a); // 11
b--;
console.log(b); // 4

// Exponentiation
console.log(a ** b); // 14641

// Parsing strings to numbers
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.45

// Checking if a value is a number
console.log(isNaN(str)); // false
console.log(isNaN("abc")); // true

// Rounding numbers
let num = 5.678;
console.log(Math.round(num)); // 6
console.log(Math.ceil(num)); // 6
console.log(Math.floor(num)); // 5

// Generating random numbers
console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
