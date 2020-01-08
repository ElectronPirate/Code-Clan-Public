/* 1. Declare a function called "add"
 - this will take two arguments
 - call the first parameter firstNumber and the second secondNumber
 - use the return keyword to return the firstNumber + secondNumber
 - print the value returned from the add(2, 3) to the console
*/

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2,3));

// =======================================================================

/* 2. Declare a function called populationDensity
 - this will take two arguments
 - call the first parameter "population" and the second "area"
 - calculate the population density (e.g. `population / area`) and return it
 - invoke the function using the population and area of Mauritius (population is 5373000 and area is 77933)
*/

function populationDensity(population, area) {
  return population / area;
}

console.log(populationDensity(5373000,77933));

// =======================================================================

/* 3. Declare a function called "getPasswordLength"
 - this will take one argument
 - call the parameter "pword" and default it to "1234565"
 - use the return keyword to return the length of the pword
 - print the value returned from getPasswordLength() to the console
 - print the value returned from getPasswordLength("letmein!") to the console
*/

function getPasswordLength(pword = "1234565") {
  return pword.length;
}

console.log(getPasswordLength());
console.log(getPasswordLength("letmein!"));

// =======================================================================

/* 4. Define a function expression called getRectArea that returns the area of a rectangle
 - this will take two arguments: width, height
 - use the return keyword to return the area
 - print the value returned from getRectArea(4,5)
*/

var getRectArea = (width, height) => {
  return width * height;
}

console.log(getRectArea(4,5));

// =======================================================================

/* 5. Demonstrate that a function declaration is 'hoisted' but a function expression is not.
TIP: Declare a function and call it above the declaration. Define a function expression and call it above the expression.
*/

console.log(divide(10, 2));

function divide(num1, num2) {
  return num1 / num2;
}


/* 6. Arrow functions can have either a "concise body" or the usual "block body".
In a concise body, only an expression is specified, which becomes the implicit return value.
In a block body, you must use an explicit return statement.
*/
var func = x => x * x;
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; };
// with block body, explicit "return" needed

/* TASK. Define an arrow function called "greeting" that takes one argument "name"
 - use a concise body and implied return to return a personalised greeting
 - for example greeting("Alexa") will return "Good morning Alexa!"
 - print the values returned from greeting("Alexa")
*/

const morningGreeting = (name) => `Good morning ${name}`;

console.log(morningGreeting("Alexa"));

/* Repeat the TASK using a block body and explicit return */

const afternoonGreeting = (name) => {
  return `Good afternoon ${name}`
};

console.log(afternoonGreeting("Alexa"));
