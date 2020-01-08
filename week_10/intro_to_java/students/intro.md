# Intro to Java

This is a short crash course intro to Java. We're going to cover:

- Classes
- Constructors
- Compiling
- ArrayLists
- Access modifiers
- Types
- The for loop
- Interfaces and Polymorphism


## Classes

Let's create a Student class. The word **public** is an access modifier. Public means the class is available to all other parts of the program so we can create a 'new' Student object wherever we can see the class.

```java

public class Student {

}

```

## Constructors

This is like the **constructor** in JavaScript. We use the name of the class with a capital letter instead of **constructor**

```java

public class Student {

  // constructor
  public Student(){ // NEW
    // initialise some instance variables here
  }
}

```

## Compiling

> If you need to install Java:

```
brew cask install java8
```
> To compile...

```
javac *.java
```

> To run...

```
java Student
```

Let's say our Student has an array of pets and a name. We have to import the Java util package in order to use the ArrayList. This is like an **import** in JS.

```java
import java.util.*;

public class Student {

  private String name; // declare a variable of type String
  private ArrayList<IPet> myPets; // declare a variable of type ArrayList full of IPet objects.

  // constructor
  public Student(String name){
    // initialise some instance variables here
    this.name = name;
    this.myPets = new ArrayList<IPet>();
  }
}

```

In Java, when we declare a variable, we have to say what **type** it is. I.E. is it a String? An Integer? A Cat? A Dog?

The IPet is going to be an interface that we create. An interface is like a class but it's simply a contract that other classes adhere to. If we have a Dog and Cat class and we want to force them to have a makeNoise method.

Because it's Java, we have to say what **type** of thing we're going to return from the method. In this case, it's a String.

```java
public interface IPet {
  public String makeNoise();
}
```

```java
public class Dog implements IPet{

  public String makeNoise(){
    return "Woof";
  }

}
```

```java
public class Cat implements IPet{

  public String makeNoise(){
    return "Miaoww";
  }

}
```

Our program wouldn't compile if we implement IPet but don't have a makeNoise method in the Dog or Cat.

Now we can add 2 more methods to our Student class to addPet and getPets.

```java
import java.util.*;

public class Student {

  private ArrayList<IPet> myPets;
  private String myName;

  public Student(String name){
    this.myName = name;
    this.myPets = new ArrayList<IPet>();
  }

  public void addPet(IPet pet) {
    this.myPets.add(pet);
  }

  public ArrayList<IPet> getPets(){
    return this.myPets;
  }

  public static void main(String[] args){
    Student emily = new Student("Emily");

    Dog d = new Dog();
    Cat c = new Cat();

    emily.addPet(d);
    emily.addPet(c);

    for (int i=0; i<emily.getPets().size(); i++ ) {
      System.out.println(emily.getPets().get(i).makeNoise());
    }
  }

}

```

Finally, we've added a main method. This is a special method in Java that kicks off the whole program. We're looping round all of our IPets and asking them to make a noise.

Our pet objects are said to be polymorphic (e.g. both a Dog and an IPet at the same time)


## Exercise - Music Shop

Model a music shop. This shop will contain items which can be sold. These items might be instruments, which someone may play e.g. guitar, saxaphone, piano, etc, or, they might be other items, e.g. guitar strings, drum sticks, sheet music  etc. Each item which can be sold will have both a price at which the shop bought the item, and a price at which the item will be sold.

You will need to:

1. Create an IPlay interface that could be applied to instruments. This should have a play method that returns the sound of the instrument being played (as a String).

2. Create classes for different types of instruments e.g. Guitar, Piano, etc. (any you can think of). Each class will have its own instance variables for attributes particular to that instrument e.g. a guitar may have a number of strings, a trumpet may have a number of valves etc.

3. Create a Shop class, which has a collection of IPlay items, called stock. In your shop you should be able to:
  -  add items to stock.
