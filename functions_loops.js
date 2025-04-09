// Functions in JavaScript

// 1. Function Declaration
function greet(name) {
	console.log(`Hello, ${name}!`);
}
greet("Alice");

// 2. Function Expression
const add = function (a, b) {
	return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (a, b) => {
	return a * b;
};
console.log(multiply(4, 7));

// 4. Default Parameters
function sayHello(name = "Guest") {
	console.log(`Hello, ${name}!`);
}
sayHello();
sayHello("Bob");

// 5. Rest Parameters
function sum(...numbers) {
	return numbers.reduce((total, num) => {
		return total + num;
	}, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 6. Callback Functions
function processUserInput(callback) {
	const name = "Charlie";
	callback(name); // greet(name) --> greet("Charlie")
}
processUserInput(greet);

// Loops in JavaScript

// 1. For Loop          // iteration/step
for (let i = 0; i <= 5; i++) {
	console.log(`For Loop: ${i}`);
}

// 2. While Loop
let count = 0;
while (count < 10) {
	console.log(`While Loop: ${count}`);
	count++;
}

// 3. Do-While Loop
let num = 0;
do {
	console.log(`Do-While Loop: ${num}`);
	num++;
} while (num < 0);

// 4. For...of Loop (used with iterable objects like arrays)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
	console.log(`For...of Loop: ${fruit}`);
}

// 5. For...in Loop (used with objects)
const person = { name: "David", age: 25, city: "New York" };
for (const key in person) {
	console.log(`For...in Loop: ${key} = ${person[key]}`);
}

// Practice Problems

// 1. Write a function declaration named `subtract` that takes two parameters and returns their difference.
// Call the function with the arguments 10 and 4, and log the result.
function subtract(a, b) {
	return a - b;
}
console.log(subtract(10, 4));

// 2. Create a function expression named `divide` that takes two parameters and returns their quotient.
// Call the function with the arguments 20 and 5, and log the result.
const divide = function (a, b) {
	return a / b;
};
console.log(divide(20, 5));

// 3. Write an arrow function named `square` that takes one parameter and returns its square.
// Call the function with the argument 6, and log the result.
const square = (x) => x * x;
console.log(square(6));

// 4. Write a function named `introduce` that takes two parameters: `name` and `age`.
// Use default parameters to set `age` to 18 if it is not provided.
// Call the function with and without the `age` argument, and log the results.
function introduce(name, age = 18) {
	return `Hi, my name is ${name} and I am ${age} years old.`;
}
console.log(introduce("Alice"));
console.log(introduce("Bob", 25));

// 5. Write a function named `multiplyAll` that uses rest parameters to accept any number of arguments.
// The function should return the product of all the arguments.
// Call the function with the arguments 2, 3, 4, and log the result.
function multiplyAll(...numbers) {
	return numbers.reduce((product, num) => product * num, 1);
}
console.log(multiplyAll(2, 3, 4));

// 6. Write a function named `executeCallback` that takes a callback function and a string as arguments.
// The function should call the callback with the string as its argument.
// Test the function by passing a callback that logs the string in uppercase.
function executeCallback(callback, str) {
	callback(str);
}
executeCallback((text) => console.log(text.toUpperCase()), "hello");

// 7. Write a for loop that logs the numbers from 10 to 1 in descending order.
for (let i = 10; i >= 1; i--) {
	console.log(i);
}

// 8. Write a while loop that logs the first 5 even numbers starting from 0.
let evenCount = 0;
let curNum = 0;
while (evenCount < 5) {
	console.log(curNum);
	curNum += 2;
	evenCount++;
}

// 9. Write a do-while loop that logs the numbers from 1 to 5.
let start = 1;
do {
	console.log(start);
	start++;
} while (start <= 5);

// 10. Write a for...of loop to iterate over an array of colors (e.g., ["red", "green", "blue"]) and log each color.
const colors = ["red", "green", "blue"];
for (const color of colors) {
	console.log(color);
}

// 11. Write a for...in loop to iterate over an object with properties `title`, `author`, and `year`.
// Log each key and its corresponding value.
const book = { title: "1984", author: "George Orwell", year: 1949 };
for (const key in book) {
	console.log(`${key}: ${book[key]}`);
}

// 12. Write a for loop to check if a number is even or odd, and log the result.
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}

// Comparing == to === in JavaScript
console.log("5" == 5); // This will log true because '5' is coerced to a number for comparison
console.log("5" === 5); // This will log false because '5' is a string and 5 is a number, and they are not strictly equal
