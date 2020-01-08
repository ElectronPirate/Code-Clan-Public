# Lab: Reducer Composition Pizza Menu

### Learning Objectives
- Be able to use multiple reducers in a Redux application

## Brief

Your task is to:
- run and open the Pizza Menu application start code
- read the following information on Reducer Composition
- complete the task adding functionality to the Pizza Menu application

### Reducer Composition

As our application state grows in complexity, more properties get added to the redux store's state. As the state object grows, writing our reducer logic get difficult, because we always have to make sure we are returning the state with all the state's properties included in it.

Looking at the the Pizza Menu application, we can see there are two collections: 'Pizza Sizes', which is an object with key/value pairs, and 'Toppings', which is an array.

![Screenshot of Pizza Menu](images/pizza_menu_screenshot.png)

The application state looks like this:

```js
{
  sizes: {
    Small: 12,
    Medium: 14,
    Large: 16
  },
  toppings: ['Mushrooms', 'Onions', 'Peppers', 'Sweetcorn']
}
```

Handling both of these collections in the same reducer would make our reducer logic difficult to maintain.

To solve this problem we can split our single reducer into separate reducers, each of which is responsible for one part of the state. This is called 'Reducer Composition' meaning we are modularising our reducer logic, which makes it easier to reason about.

When using reducer composition, each reducer handles a single field in the state object.

In the start code provided, you will see there are multiple reducers (`pizzaSizesReducer` and `pizzaToppingsReducer`). Each reducer is responsible for one part of state, and each reducer only returns the value for the field it represents.

So the `pizzaSizesReducer` returns an object representing the sizes collection:

```js
  {
    Small: 12,
    Medium: 14,
    Large: 16
  }
```

And the `pizzaToppingsReducer` returns an array representing the toppings collection:

```js
['Mushrooms', 'Onions', 'Peppers', 'Sweetcorn']
```

Each of these parts of state are brought together in the index reducer (reducers/index.js);

#### `combineReducers`

In the index reducer, we use React Redux's `combineReducers` function the bring the various fields of state together. We pass `combineReducers` an object that represents that whole application state object. We use each of the separate reducers to return a value, which represents one part of state, and we assign each to a property (`sizes` and `toppings`).

```js
// reducers/index.js

combineReducers({
  sizes: pizzaSizesReducer,
  toppings: pizzaToppingsReducer
});
```

Whenever an action is dispatched, all the reducers are called. Any reducer that doesn't handle that action returns its state unmodified. Any reducer that does handle that action updates its its state and returns it. For example, if we were to dispatch an action to add a new topping, the `pizzaSizesReducer` would be called, but would not handle the action, so it would just return the existing sizes object unchanged. Whereas when the `pizzaToppingsReducer` is called, it would handle the action, and would return its toppings array with the new topping added.

Whenever we want to refer to a particular part of state in our application, we use these keys. For example, in `PizzaSizesContainer`, where we want to access just the `sizes` field of state in `mapStateToProps`, we do that by writing `state.sizes`.

```js
// PizzaSizesContainer.js

const mapStateToProps = (state) => {
  return {
    sizes: state.sizes
  }
};
```

Using reducer composition we can modularise our reducer logic, with each reducer being responsible for one field of state. We combine the separate reducers using `combineReducers` in an index reducer.

### MVP

- Complete the Pizza Menu application provided in the start code, allowing a user to enter a new topping and see it displayed with the existing toppings in a list.

You will need to handle the topping form's submit event, dispatch the action with the new topping, and handle the action in the topping's reducer to update the store. You will then need to display the toppings list on the page. You won't need to create any new files, just edit existing ones.

### Considerations

The collection of toppings is an array, so it will be handled differently to collections of pizza sizes, which is an object.
