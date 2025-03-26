// BOOLEANS
// Example 1: Basic boolean values
let isTrue = true;
let isFalse = false;

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

// Example 2: Boolean expressions
let a = 5;
let b = 10;

let isEqual = a === b;
let isGreater = a > b;

console.log(isEqual); // Output: false
console.log(isGreater); // Output: false

// Example 3: Using booleans in conditional statements
if (isTrue) {
	console.log("This is true!");
} else {
	console.log("This is false!");
}

// Example 4: Boolean logic
let x = true;
let y = false;

let andResult = x && y; // Logical AND
let orResult = x || y; // Logical OR
let notResult = !x; // Logical NOT

console.log(andResult); // Output: false
console.log(orResult); // Output: true
console.log(notResult); // Output: false

// Example 5: Boolean conversion
let str = "Hello";
let num = 0;

let boolFromString = Boolean(str); // Non-empty string is true
let boolFromNumber = Boolean(num); // Zero is false, One is true

if (1) {
	console.log("One is true!"); // This will be executed
}

console.log(boolFromString); // Output: true
console.log(boolFromNumber); // Output: false

// PRACTICE PROBLEMS WITH BOOLEANS

// 1. Check if a number is even
let number = 10;
let isEven = number % 2 === 0;
console.log(isEven); // Output: true

// 2. Check if a string contains a specific word
let sentence = "JavaScript is fun!";
let containsWord = sentence.includes("fun");
console.log(containsWord); // Output: true

// 3. Check if an array is empty
let myArray = [];
let isEmpty = myArray.length === 0;
console.log(isEmpty); // Output: true

// 4. Check if a number is within a range (10 to 20 inclusive)
let new_num = 15;
let isInRange = new_num >= 10 && new_num <= 20;
console.log(isInRange); // Output: true

// 5. Check if two strings are equal (case-sensitive)
let string1 = "Hello";
let string2 = "hello";
let areEqual = string1 === string2;
console.log(areEqual); // Output: false

// 6. Check if a value is truthy
let value = "Non-empty string";
let isTruthy = !!value;
console.log(isTruthy); // Output: true

// 7. Check if a number is divisible by both 3 and 5
let anotherNumber = 15;
let isDivisibleBy3And5 = anotherNumber % 3 === 0 && anotherNumber % 5 === 0;
console.log(isDivisibleBy3And5); // Output: true

// 8. Check if a year is a leap year
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeapYear); // Output: true
