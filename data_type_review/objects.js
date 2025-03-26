// OBJECTS
// Creating an object
const person = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	isStudent: false,
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Adding a new property
person.email = "john.doe@example.com";
console.log(person.email); // Output: john.doe@example.com

// Updating an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined

// Using methods in objects
const car = {
	brand: "Toyota",
	model: "Corolla",
	year: 2020,
	start: function () {
		console.log("Car started");
	},
};

car.start(); // Output: Car started

// Looping through object properties
for (let key in person) {
	console.log(key + ": " + person[key]);
}

// Output:
// firstName: John
// lastName: Doe
// age: 31
// email: john.doe@example.com

let myArr = [1, 2, 3, 4, 5];
for (let item of myArr) {
	console.log(item);
}

// PRACTICE PROBLEMS

// 1. Create an object called 'book' with the following properties:
//    - title: "The Great Gatsby"
//    - author: "F. Scott Fitzgerald"
//    - yearPublished: 1925
//    - isAvailable: true
//    Then, log the title of the book to the console.

// Answer:
const book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	yearPublished: 1925,
	isAvailable: true,
};
console.log(book.title); // Output: The Great Gatsby

// 2. Add a new property 'genre' with the value "Fiction" to the 'book' object.
//    Then, log the updated object to the console.

// Answer:
book.genre = "Fiction";
console.log(book);
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', yearPublished: 1925, isAvailable: true, genre: 'Fiction' }

// 3. Update the 'isAvailable' property of the 'book' object to false.
//    Then, log the updated 'isAvailable' property to the console.

// Answer:
book.isAvailable = false;
console.log(book.isAvailable); // Output: false

// 4. Delete the 'yearPublished' property from the 'book' object.
//    Then, log the updated object to the console.

// Answer:
delete book.yearPublished;
console.log(book);
// Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: false, genre: 'Fiction' }

// 5. Create an object called 'student' with the following properties:
//    - name: "Alice"
//    - grade: 10
//    - subjects: ["Math", "Science", "English"]
//    Add a method called 'introduce' that logs "Hi, my name is Alice and I am in grade 10."

// Answer:
const student = {
	name: "Alice",
	grade: 10,
	subjects: ["Math", "Science", "English"],
	introduce: function () {
		console.log(`Hi, my name is ${this.name} and I am in grade ${this.grade}.`);
	},
};
student.introduce(); // Output: Hi, my name is Alice and I am in grade 10.

// 6. Loop through the 'student' object and log each key-value pair to the console.

// Answer:
for (let key in student) {
	console.log(key + ": " + student[key]);
}
// Output:
// name: Alice
// grade: 10
// subjects: Math,Science,English
// introduce: function () { console.log(`Hi, my name is ${this.name} and I am in grade ${this.grade}.`); }
