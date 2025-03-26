/**
 * 	Introduction to JavaScript -- Session 1: Variables and Data Types
 * 	12 Mar 2025
 */

/**
 * 	Variables
 * 	In JavaScript, variables are used to store data values. You can declare a variable using var, let, or const.
 */

// Using var (older way, avoid if possible)
// Mutable (can be changed)
var student_name = "John Doe";
console.log(student_name); // Output: John Doe

// Using let (preferred for variables that can change)
// Mutable (can be changed)
let age = 25;
console.log(age); // Output: 25

// Using const (preferred for variables that won't change/are constant)
// Immutable (cannot be changed)
const birthYear = 1998;
console.log(birthYear); // Output: 1998

// Notice the format of the variable names: camelCase (first letter lowercase, subsequent words capitalized)
// Variable names can contain letters, digits, underscores, and dollar signs
// Variable names cannot start with a digit
// Variable names cannot contain spaces or special characters (except underscores and dollar signs)
// Variable names are case-sensitive
// Variable names should be descriptive and meaningful
// Variable names should not be reserved keywords (e.g., let, const, var, function, if, else, etc.)
// Variable names should follow a consistent naming convention (e.g., camelCase, snake_case, PascalCase)

// The scope of a variable determines where that variable can be used/accessed in your code.
// Global scope refers to the outermost scope in a program.
// Block scope refers to the scope within a block of code, such as a function or loop.

// Var have global scope -- accessible from anywhere in the program.
// Let/Const have block scope -- only accessible within the block they are defined in (e.g., a function).

/**
 * Data Types
 * JavaScript supports different types of data types including:
 * Primitive Data Types: String, Number, Boolean, Null, Undefined
 * - String: used for text
 * - Number: used for numbers (both integers and floating-point numbers / decimals)
 * - Boolean: used for true/false values
 * - Null: represents the intentional absence of any object value
 * - Undefined: a variable that has been declared but not assigned a value
 * Complex Data Types: Array, Object
 * - Array: a special type of object used to store ordered collections of data (list of values)
 * - Object: used to store collections of data and more complex entities (key-value pairs)
 */

// String: used for text
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// Number: used for numbers (both integers and floating-point numbers)
let price = 19.99;
console.log(price); // Output: 19.99

// Boolean: used for true/false values
let isAvailable = true;
console.log(isAvailable); // Output: true

// Null: represents the intentional absence of any object value
let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined: a variable that has been declared but not assigned a value
let notAssigned;
console.log(notAssigned); // Output: undefined

// Array: a special type of object used to store ordered collections of data
let myArray = ["red", "green", "blue", 5, true];
console.log(myArray); // Output: [ 'red', 'green', 'blue', 5, true ]

// Object: used to store collections of data and more complex entities
let person = {
	firstName: "Jane",
	lastName: "Doe",
	age: 30,
};
console.log(person); // Output: { firstName: 'Jane', lastName: 'Doe', age: 30 }

// You can use the typeof operator to find the type of a variable
console.log(typeof student_name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isAvailable); // Output: boolean
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)
console.log(typeof notAssigned); // Output: undefined
console.log(typeof person); // Output: object
console.log(typeof myArray); // Output: object (this is another known quirk in JavaScript)

let favoriteFood = "Pizza";
let heightInInches = 70;

// Using template literals (preferred for readability)
console.log(`My favorite food is ${favoriteFood}, and I am ${heightInInches} inches tall.`);

// Using string concatenation
console.log("My favorite food is " + favoriteFood + ", and I am " + heightInInches + " inches tall.");

// Using multiple arguments in console.log
console.log("My favorite food is", favoriteFood, "and I am", heightInInches, "inches tall.");
