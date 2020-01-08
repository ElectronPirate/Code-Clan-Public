![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Encapsulation

One final principle of OO is *Encapsulation*.

In short, this mean "data hiding" or making instance variables private to the class.

That means other parts of the code can't change the values of instance variables directly.

In JavaScript we don't have the concept of private instance variables (yet) so if we really need to achieve encapsulation, we have to use work-arounds. One way of doing this is to use closures.

Consider the following:


```js

class Car {

  constructor() {
    let milesDriven = 0;

    this.drive = function(distance){
      milesDriven += distance;
    },

    this.getMilesDriven = function(){
      return milesDriven;
    }
  }
}

const tesla = new Car();
tesla.drive(10);
console.log(tesla.getMilesDriven()); // 10
console.log(tesla.milesDriven); // Invalid. Undefined.
```

The variable **milesDriven** is not accessible directly. We provide a method getMilesDriven() so that we force other programmers to use our method. We might want to do some kind of validation in a method for example.

This is one way to achieve **Encapsulation** in JavaScript.
