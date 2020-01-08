![codeclan_logo](https://user-images.githubusercontent.com/11422619/54070681-ca4c5200-425a-11e9-8cf8-cd6a191bc3cd.png)

# Combining Loops and Functions

**Lesson Duration: 30 minutes**

### Learning Objectives
- Understand how to combine loops and functions

## Simple Use of Loop in a Function

Let's create a new file for this:

```bash
#terminal

touch loops_in_functions.js
```

```js
// loops_in_functions.js
chickens = [
  { name: "Margaret", age: 2, eggs: 0 },
  { name: "Hetty", age: 1, eggs: 2 },
  { name: "Henrietta", age: 3, eggs: 1 },
  { name: "Audrey", age: 2, eggs: 0 },
  { name: "Mabel", age: 0.5, eggs: 1 },
]

function countEggs( arr ) {
  var totalEggs = 0;

  for (let bird of arr){
    totalEggs += bird.eggs
    bird.eggs = 0 // eggs have been collected
  }

  return `${totalEggs} eggs collected`;
}

console.log(countEggs(chickens));
```

## Returns Within a Loop

Maybe we want to find out if we have a chicken with a certain name on the farm, and make sure it's not been stolen by a fox.

Outside of a function it might look like this:

```js
// loops_in_functions.js

for(let chicken of chickens)
  if(chicken.name == "Audrey"){
    console.log("I found Audrey!");
  }
}
```

But now if we want to make this flexible/dynamic, we can make the name finder a function. What parameters does it need? The array, and a name to search for.

```js
// loops_in_functions.js

function findChickenByName( arr, name ){

}

```

Now we need to put our loop in there, but instead of referring directly to the `chickens` array, we're passing that in so we just loop through the `arr` parameter. And instead of looking for "Audrey" we just put in `name`.

```ruby
#loops_in_functions.rb

function findChickenByName( arr, name ){
  for( let chicken of arr){
    if(chicken.name == "Audrey"){
      console.log("I found Audrey!");
    }
  }
}

findChickenByName(chickens, "Audrey");
findChickenByName(chickens, "Hetty");
```

We don't want to just use console.log in functions all the time though, as this is very hard to test. Instead we should return something from the function.

```js
// loops_in_functions.js

if(chicken.name == name){
  return `I found ${name}!`
}

console.log(findChickenByName(chickens, "Audrey"));
console.log(findChickenByName(chickens, "Hetty"));

```

We also tend not to return strings too much. Instead we can return the whole chicken object so we have more options of what to do with it.

```js
// loops_in_functions.js

if(chicken.name == name){
  return chicken;
}
```

Finally, what if we search for a chicken who's not there? Currently what do we get?

```js
// loops_in_functions.js

console.log(findChickenByName(chickens, "Elsie"));

```

If we want to return something more meaningful, we can do so at the end. We might return an error message, or `nil`.

```ruby
#loops_in_functions.rb

function findChickenByName( arr, name ){
  for( let chicken of arr){
    if(chicken.name == name){
      return chicken;
    }
  }
  return "No chicken found";
}

```

> Show how using an 'else' after the if won't work. Also show how any code before the final return will only execute if no chicken is found, and any after it will never run.

```js
// loops_in_functions.js

function findChickenByName( arr, name ){
  for( let chicken of arr){
    if(chicken.name == name){
      return chicken;
    } else{
      return "No chicken found"; // NO!
    }
  }
}
```
