// STRINGS
// String concatenation
let firstName = "John";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Smith

// String length
let message = "Hello, World!";
console.log(message.length); // Output: 13

// Accessing characters in a string
console.log(message[0]); // Output: H
console.log(message.charAt(1)); // Output: e

// String methods
let upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage); // Output: HELLO, WORLD!

let lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage); // Output: hello, world!

let includesHello = message.includes("Hello");
console.log(includesHello); // Output: true

let startsWithHello = message.startsWith("Hello");
console.log(startsWithHello); // Output: true

let endsWithWorld = message.endsWith("World!");
console.log(endsWithWorld); // Output: true

let replacedMessage = message.replace("World", "JavaScript");
console.log(replacedMessage); // Output: Hello, JavaScript!

let trimmedMessage = "   Hello, World!   ".trim();
console.log(trimmedMessage); // Output: Hello, World!

let splitMessage = message.split(", ");
console.log(splitMessage); // Output: [ 'Hello', 'World!' ]

let substringMessage = message.substring(0, 5);
console.log(substringMessage); // Output: Hello

// Practice Problems:

// 1. Concatenate the strings "JavaScript" and "is awesome!" and log the result.
let part1 = "JavaScript";
let part2 = "is awesome!";
let concatenated = part1 + " " + part2;
console.log(concatenated); // Output: JavaScript is awesome!

// 2. Find the length of the string "I love programming!" and log it.
let programmingMessage = "I love programming!";
console.log(programmingMessage.length); // Output: 20

// 3. Extract the word "love" from the string "I love programming!" using substring and log it.
let extractedWord = programmingMessage.substring(2, 6);
console.log(extractedWord); // Output: love

// 4. Convert the string "coding is fun" to uppercase and log it.
let codingMessage = "coding is fun";
let upperCaseCodingMessage = codingMessage.toUpperCase();
console.log(upperCaseCodingMessage); // Output: CODING IS FUN

// 5. Check if the string "JavaScript is powerful" includes the word "powerful" and log the result.
let jsMessage = "JavaScript is powerful";
let includesPowerful = jsMessage.includes("powerful");
console.log(includesPowerful); // Output: true

// 6. Replace the word "boring" with "exciting" in the string "Learning is boring" and log the result.
let learningMessage = "Learning is boring";
let updatedMessage = learningMessage.replace("boring", "exciting");
console.log(updatedMessage); // Output: Learning is exciting

// 7. Trim the extra spaces from the string "   Practice makes perfect!   " and log the result.
let practiceMessage = "   Practice makes perfect!   ";
let trimmedPracticeMessage = practiceMessage.trim();
console.log(trimmedPracticeMessage); // Output: Practice makes perfect!

// 8. Split the string "apple,banana,cherry" into an array of fruits and log the result.
let fruits = "apple,banana,cherry";
let fruitArray = fruits.split(",");
console.log(fruitArray); // Output: [ 'apple', 'banana', 'cherry' ]

// 9. Check if the string "Frontend development" starts with "Frontend" and log the result.
let frontendMessage = "Frontend development";
let startsWithFrontend = frontendMessage.startsWith("Frontend");
console.log(startsWithFrontend); // Output: true

// 10. Log the character at the 5th position (index 4) of the string "JavaScript".
let language = "JavaScript";
console.log(language[4]); // Output: S
