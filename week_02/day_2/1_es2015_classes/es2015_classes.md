![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# ES2015 Classes

ECMAScript 2015 introduces class syntax to JavaScript as a way to write reusable classes using easier, cleaner syntax, which is more similar to classes in C++ or Java.

What do you notice about the difference between this Person class and a Person constructor function?

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

The class statement indicates that we are creating a new class. Inside this block, we define all the features of the class:

- The constructor() method defines the constructor function that represents our Person class.
- greeting() and farewell() are methods. Any methods you want associated with the class are defined inside it, after the constructor. In this example, we've used template literals rather than string concatenation to make the code easier to read.

We can now instantiate object instances using the new operator, in just the same way as we did before:

```js
let han = new Person('Han', 'Solo', 30, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 29, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now
```

## Inheritance with Class syntax

Above we created a class to represent a person. They have a series of attributes that are common to all people; in this section we'll create our specialised Teacher class, making it inherit from Person using modern class syntax. This is called creating a subclass or subclassing.

To create a subclass we use the extends keyword to tell JavaScript the class we want to base our class on,


```js
class Teacher extends Person {
  constructor(subject, grade) {
    this.subject = subject;
    this.grade = grade;
  }
}
```

but there's a little catch.

Unlike old-school constructor functions where the new operator does the initialization of this to a newly-allocated object, this isn't automatically initialized for a class defined by the extends keyword, i.e the sub-classes.

Therefore running the above code will give an error:

```bash
Uncaught ReferenceError: Must call super constructor in derived class before
accessing 'this' or returning from derived constructor
```

For sub-classes, the this intialisation to a newly allocated object is always dependant on the parent class constructor, i.e the constructor function of the class from which you're extending.

Here we are extending the Person class — the Teacher sub-class is an extension of the Person class. So for Teacher, the this initialisation is done by the Person constructor.

To call the parent constructor we have to use the super() operator, like so:

```js
class Teacher extends Person {
  constructor(subject, grade) {
    super();              // Now `this` is intialized by calling the parent constructor.
    this.subject = subject;   
    this.grade = grade;
  }
}
```

There is no point having a sub-class if it doesn't inherit properties from the parent class.
It is good then, that the super() operator also accepts arguments for the parent constructor.

Looking back to our Person constructor, we can see it has the following block of code in its constructor method:

```js
constructor(first, last, age, gender, interests) {
   this.name = {   
     first,   
     last   
   };
   this.age = age;
   this.gender = gender;   
   this.interests = interests;
}
```

Since the super() operator is actually the parent class constructor, passing it the necessary arguments of the Parent class constructor will also initialise the parent class properties in our sub-class, thereby inheriting it:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

Now when we instantiate Teacher object instances, we can call methods and properties defined on both Teacher and Person as we'd expect:

```js
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
```

Like we did with Teachers, we could create other subclasses of Person to make them more specialized without modifying the base class.

## Getters and Setters

There may be times when we want to change the values of an attribute in the classes we create or we don't know what the final value of an attribute will be. Using the Teacher example, we may not know what subject the teacher will teach before we create them, or their subject may change between terms.

We can handle such situations with getters and setters.

Let's enhance the Teacher class with getters and setters. The class starts the same as it was the last time we looked at it.

Getters and setters work in pairs. A getter returns the current value of the variable and its corresponding setter changes the value of the variable to the one it defines.

The modified Teacher class looks like this:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

In our class above we have a getter and setter for the subject property. We use _  to create a separate value in which to store our name property. Without using this convention, we would get errors every time we called get or set.

The example below shows the two features in action:

```js
// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject="Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"
```

## When would you use inheritance in JavaScript?
Particularly after this last article, you might be thinking "woo, this is complicated". Well, you are right. Prototypes and inheritance represent some of the most complex aspects of JavaScript, but a lot of JavaScript's power and flexibility comes from its object structure and inheritance, and it is worth understanding how it works.

In a way, you use inheritance all the time. Whenever you use various features of a Web API , or methods/properties defined on a built-in browser object that you call on your strings, arrays, etc., you are implicitly using inheritance.

In terms of using inheritance in your own code, you probably won't use it often, especially to begin with, and in small projects. It is a waste of time to use objects and inheritance just for the sake of it when you don't need them. But as your code bases get larger, you are more likely to find a need for it. If you find yourself starting to create a number of objects that have similar features, then creating a generic object type to contain all the shared functionality and inheriting those features in more specialised object types can be convenient and useful.

## TASK

Translate the 3 classes you created for the BusStop exercise into ES2015 classes. Use getters and setters where appropriate. Where could you include inheritance? A Bus could inherit from a Vehicle. A Passenger could inherit from a Person.

NOTE: You shouldn't have to alter your test suites.


## Conclusion
This lesson has covered the more of the core OOJS theory and syntax that we think you should know now. At this point you should understand JavaScript objects and OOP basics, prototypes, how to create classes (constructors) and object instances, add features to classes, and create subclasses that inherit from other classes.


[Inheritance in JavaScript]
(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance$history) is licensed under [CC-BY-SA 2.5](http://creativecommons.org/licenses/by-sa/2.5/).
