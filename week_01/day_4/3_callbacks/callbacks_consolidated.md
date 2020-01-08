![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Callbacks and Higher Order Functions

### Learning Objectives
- Understand callbacks
- Understand higher order functions
- Understand functions as first class objects
- Passing functions as arguments

## Higher Order Functions

Higher-order functions either take a function as an argument or return a function as output. A callback is a function as an argument.

Because functions are *first class objects* in JavaScript, they can be referenced by variables and passed around just like variables.

Let's create a directory.

```
mkdir higher_order_functions
cd higher_order_functions
touch higher_order_functions.js
```

Here's an example of taking a function as an argument.
```
var myFunction = function(aFunction){
  aFunction(99);
};

var anotherFunction = function(number){
  console.log(number);
};

myFunction(anotherFunction);
```

[i]: Important to notice we pass in anotherFunction, not the return value
Why the hell would we want to do this?

## Sleeping

Sometimes we want something to run after a certain amount of time.  In some program languages there is a sleep function to do this.  It will sleep the active thread for that time and then continue.
eg Ruby
```
  sleep(10)
```

Javascript was designed for the web having one main thread.  Blocking this thread (sleeping) would stop any interaction with the application. For this reason Javascript does not have a sleep method.  So how do we get something to happen after a certain amount of time.

## SetTimeout

JavaScript has a "non blocking, asynchronous" equivalent.  The setTimeout function.  This function that takes in another function and calls that function after a set period of time.

```
setTimeout(function() {
  console.log("I waited for 1 second");
}, 1000);
```


```
var thingWeWantToHappenLater = function(){
  console.log("I happened after a certain amount of time");
}
setTimeout(thingWeWantToHappenLater, 1000);
```

So here the first argument is the callback and the second is a value in milliseconds. setTimeout is a built in JavaScript function and we're using it here to illustrate how callbacks behave.

In the example above, the callback is an *anonymous* function. It has no name and is passed in at the same time that it is defined.

There are 2 ways to pass a function to another function:
1. An anonymous function
2. A named function


## Callback Exercises

1. Write a function, *functionCaller*, that takes a function (myCallback) and a number as parameters. The *functionCaller* returns myCallback called with the number (as an argument).

2. **Maths Fun:** Write two functions *increment* and *square*. *increment* should take in a number and return the number plus 1. *square* should take in a number and return it multiplied by itself.

  Write another function called *doSomeMathsForMe* that takes in a number (*n*) and a function (a callback) and executes the callback, passing in *n* as an argument.

  Invoke *doSomeMathsForMe* by passing it a number and the *increment* and/or *square* function.
