/* 1. Declare a function called "add"
 - this will take two arguments
 - call the first parameter firstNumber and the second secondNumber
 - use the return keyword to return the firstNumber + secondNumber
 - print the value returned from the add(2, 3) to the console
*/

// your code goes here

console.log(/* call add(2,3) function */);

// =======================================================================

/* 2. Declare a function called populationDensity
 - this will take two arguments
 - call the first parameter "population" and the second "area"
 - calculate the population density (e.g. `population / area`) and return it
 - invoke the function using the population and area of Mauritius (population is 5373000 and area is 77933)
*/

// your code goes here

console.log(/* call populationDensity(5373000,77933) function */);

// =======================================================================

/* 3. Declare a function called "getPasswordLength"
 - this will take one argument
 - call the parameter "pword" and default it to "1234565"
 - use the return keyword to return the length of the pword
 - print the value returned from getPasswordLength() to the console
 - print the value returned from getPasswordLength("letmein!") to the console
*/

// your code goes here

console.log(/* call getPasswordLength() function */);
console.log(/* call getPasswordLength("letmein!") function */);

// =======================================================================

/* 4. Define a function expression called getRectArea that returns the area of a rectangle
 - this will take two arguments: width, height
 - use the return keyword to return the area
 - print the value returned from getRectArea(4,5)
*/

// your code goes here

console.log(/* call getRectArea(4,5) function */);

// =======================================================================

/* 5. Demonstrate that a function declaration is 'hoisted' but a function expression is not.
TIP: Declare a function and call it above the declaration. Define a function expression and call it above the expression.
*/


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

// your code goes here

console.log(/* call greeting("Alexa") function */);

/* Repeat the TASK using a block body and explicit return */
