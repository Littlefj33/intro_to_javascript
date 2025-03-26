// ARRAYS
// Creating an array
let fruits = ["Apple", "Banana", "Orange"];

// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Modifying elements in an array
fruits[0] = "Strawberry";
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Orange']

// Getting the length of an array
console.log(fruits.length); // Output: 3

// Adding elements to an array
fruits.push("Mango");
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Orange', 'Mango']

// Removing the last element from an array
let removedElement = fruits.pop();
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Orange']
console.log(removedElement); // Output: Mango

// Finding the index of an element in an array
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Removing an element by index
fruits.splice(index, 1);
console.log(fruits); // Output: ['Strawberry', 'Orange']

// Combining arrays
let vegetables = ["Carrot", "Potato"];
let food = fruits.concat(vegetables);
console.log(food); // Output: ['Strawberry', 'Orange', 'Carrot', 'Potato']

// Check if a variable is an array
let myArray = [1, 2, 3];
console.log(Array.isArray(myArray)); // Output: true

/* Advanced array operations with functions */
// Iterating over an array
fruits.forEach(function (item, index) {
	console.log(index, item);
});
// Output:
// 0 'Strawberry'
// 1 'Orange'

// Mapping over an array
// Convert fruits to uppercase
let upperCaseFruits = fruits.map(function (item) {
	return item.toUpperCase();
});
console.log(upperCaseFruits); // Output: ['STRAWBERRY', 'ORANGE']

// Filtering an array
// Filter fruits with more than 6 characters
let filteredFruits = fruits.filter(function (item) {
	return item.length > 6;
});
console.log(filteredFruits); // Output: ['Strawberry']

// Reducing an array
// Calculate the total length of all fruits
let totalLength = fruits.reduce(function (acc, item) {
	return acc + item.length;
}, 0);
console.log(totalLength); // Output: 16

// PRACTICE PROBLEMS

// 1. Create an array of your favorite colors and log the second color in the array.
let colors = ["Red", "Blue", "Green"];
console.log(colors[1]); // Output: Blue

// 2. Add a new color to the end of the array and log the updated array.
colors.push("Yellow");
console.log(colors); // Output: ['Red', 'Blue', 'Green', 'Yellow']

// 3. Remove the first color from the array and log the updated array.
colors.shift();
console.log(colors); // Output: ['Blue', 'Green', 'Yellow']

// 4. Find the index of a specific color in the array and log it.
let indexOfGreen = colors.indexOf("Green");
console.log(indexOfGreen); // Output: 1

// 5. Combine your colors array with another array of shapes and log the result.
let shapes = ["Circle", "Square"];
let combinedArray = colors.concat(shapes);
console.log(combinedArray); // Output: ['Blue', 'Green', 'Yellow', 'Circle', 'Square']

// 6. Use the `map` method to create a new array where each color is in uppercase and log it.
let upperCaseColors = colors.map(function (color) {
	return color.toUpperCase();
});
console.log(upperCaseColors); // Output: ['BLUE', 'GREEN', 'YELLOW']

// 7. Use the `filter` method to create a new array with colors that have more than 5 characters and log it.
let longColors = colors.filter(function (color) {
	return color.length > 5;
});
console.log(longColors); // Output: ['Yellow']

// 8. Use the `reduce` method to calculate the total number of characters in all the colors and log it.
let totalCharacters = colors.reduce(function (acc, color) {
	return acc + color.length;
}, 0);
console.log(totalCharacters); // Output: 16

// 9. Write a function that takes an array of numbers and returns a new array with each number squared. Test it with an example array.
function squareNumbers(numbers) {
	return numbers.map(function (number) {
		return number * number;
	});
}
let numbers = [1, 2, 3, 4];
console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16]

// 10. Write a function that takes an array of strings and returns a new array with only the strings that start with the letter "A". Test it with an example array.
function filterStringsStartingWithA(strings) {
	return strings.filter(function (string) {
		return string.startsWith("A");
	});
}
let strings = ["Apple", "Banana", "Avocado", "Cherry"];
console.log(filterStringsStartingWithA(strings)); // Output: ['Apple', 'Avocado']
