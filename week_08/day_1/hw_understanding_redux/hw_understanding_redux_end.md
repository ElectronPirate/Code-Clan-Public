# Homework: Getting Familiar with Redux

## Answers

### Part 1

1. What are actions used for?

They contain the information for how the store's state should be updated.

2. What type of object must an action be?

An action must be a plain JavaScript object.

3. At a minimum, what is the one property the action should have? And what is this property used for?

An action always has a `type` property, so that it can be handled by the reducer. It can also have any other additional properties.

4. What is the responsibility of the reducer?

The reducer takes an action and the current state as an arguments. It uses both to calculate the new state.

5. What is the responsibility of the store?

The store is where everything comes together. Is holds the current application state, it enables the state to be updates with the `dispatch` function. It enables listeners to subscribe to changes to the state with the `subscribe`.

### Part 2

- `reducer1` is pure, because numbers are immutable, so when the numbers are added together, a new number is returned.
- `reducer2` is not pure, because it mutates the original state, by adding a new item into the array, and returning the modified array.
- `reducer3` is pure, because it creates a new array, spreading the items from the original state array, and adding an additional item.
- `reducer4` is not pure, because even though it creates a new array using `map`, it still modifies the original items, by updating the price property.
- `reducer5` is pure because it creates a new array using map and, unlike the previous function, it creates a new object by spreading the original object, and then updating the price property of the new object.
