// var, let & const = var is no longer commonly used because it is globally scoped
// let and const are block scoped

// const age = 30;

// age = 31;

// console.log(age);

// use const unless you are going to re-assign the value
// you MUST asign a value if you are using the const keyword

// data-types are values assigned to a variable, primitive data-types are values assigned DIRECTLY (or are not a resource value)
// ex. strings(in quotations), numbers, boolean(true or false value), null(empty value), undefined & symbols(symbols are not common)

const name = "John"; /*string*/

const age = 30; /*number*/

// const rating = 4.5;

const isCool = true; /*boolean*/

// const x = null;

// const y = undefined;
// let z;

// console.log(typeof )

// !!!STRINGS: concatenation!!!
// console.log("My name is" + " " + name + " " + "and I am" + " " + age);

// !!!Template Strings/Literals!!!
// const hello = `My name is ${name} and I am ${age}`;

// console.log(hello);

const s = "Hello World!";

console.log(s.substring(0, 5).toUpperCase());

// !!!ARRAYS - ARE VARIABLES THAT HOLD MULTIPLE VALUES!!!

// NEW KEYWORD AND A FUCTION AFTER IS CALLED A CONSTRUCTOR
const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

// NORMALLY WE USE BRACKETS TO CREATE AN ARRAY
const fruits = ["apples", "oranges", "pears", "bananas"];

// YOU CAN USE DIFFERENT DATA-SETS IN THE SAME ARRAY
const arr1 = ["string", 10, true, null];

console.log(arr1);

// ARRAYS ARE ZERO BASED WHICH MEAN THE LIST OF DATA STARTS AT ZERO NOT ONE
// YOU CAN ACCESS DATA IN AN ARRAY BY ITS NUMBER IN THE ARRAY
// console.log(fruits[1]);

// YOU CAN ALSO ADD VALUES TO AN ARRAY
fruits[4] = "grapes";

// YOU CAN ADD A VALUE TO THE END OF AN ARRAY USING THE PUSH METHOD
fruits.push("mangos");

// OR ADD A VALUE TO THE BEGINNING WITH THE UNSHIFT METHOD
fruits.unshift("strawberries");

console.log(fruits);

// !!!OBJECT LITERALS!!!

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main St",
    city: "Boston",
    state: "MA",
  },
};

console.log(person.firstName, person.lastName);

// !!!DESTRUCTERING - OR CREATING VARIABLES FROM A OBJECT!!!

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(city);

// YOU CAN ADD PROPERTIES TO AN OBJECT
person.email = "johnd@email.com";

console.log(person);

// !!!ARRAYS OF OBJECTS!!!

const todos = [
  {
    id: 1,
    text: "Take out the trash",
    isComplete: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isComplete: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isComplete: false,
  },
];

console.log(todos[1].text);

// !!!JSON FILES!!!

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// !!!LOOPS!!!

// !!!FOR LOOPS!!!
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// !!!DO/WHILE LOOPS!!!
let e = 11;

while (e <= 21) {
  console.log(`While Loop Number: ${e}`);
  e++;
}

// WE CAN LOOP THROUGH ARRAYS
for (let t = 0; t < todos.length; t++) {
  console.log(todos[t].text);
}

// !!!FOR/OF LOOPS!!!
for (let todo of todos) {
  console.log(todo.id);
}

// !!!HIGH ORDER ARRAY METHODDS!!!
// forEach, map and filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoComplete = todos
  .filter(function (todo) {
    return todo.isComplete === true;
  })
  .map(function (todo) {
    return todo.id;
  });

console.log(todoComplete);

// !!!CONDITIONALS!!!

const x = "10";

if (x == 10) {
  console.log("x is 10");
}

const y = 20;

if (y === 20) {
  console.log("y is 20");
} else {
  console.log("y is not 20");
}
