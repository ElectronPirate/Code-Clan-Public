# Redux Thunk

## Introduction

In our React applications we have been using Redux to manage application state. There are many cases where our state needs to be updated with the response of an asynchronous operation, such as a network request.

We know that Redux is a library of pure functions. Pure functions don't have any side-effects, which means when working with a plain Redux store we can only do simple synchronous updates by dispatching actions.

A network request is a side-effect so in order to be able to handle the async logic, we need to use some middleware. The recommended middleware for this purpose is [Redux Thunk](https://github.com/reduxjs/redux-thunk).

### Thunks

A thunk is just a function that is returned by another function. Thunks are used to delay the returned function's execution. For example:

```js
function getGreetFunction() {
  return function greet() {
    return "Hello, world"
  };
}
```

The `greet` function is the thunk, because it is returned by the function `getGreetFunction`. We are going to be using this pattern in our application to make a network request and update the store's state with the response. Instead of dispatching an action (a plain JavaScript object), we are going to dispatch a function. The function is the thunk, it will make a network request, and when it has the data ready, it will dispatch the action to update the store.

When we have the middleware Redux Thunk configured, it will check if we are dispatching an action or a function. If it sees we are dispatching a function, it will call the function, passing it `dispatch`, so we can dispatch our action later in that function.

### Brew Dog IPA Application

> Note: Open start code

Open and run the start code.

```bash
npm install
npm start
```

We can see that the application already has Redux installed. It has:

- a reducer that handles an `'ADD_DATA'` action.
- a store created using the reducer.
- an initial state of an empty array.
- an `App` component that renders a `BeersList`
- a `BeersList` component that accesses the state and renders the data to the screen, displaying a list of the beers names.

At the moment the state is not being updated anywhere in the application. We are going to use Redux Thunk to make a request to the [Punk Api](https://punkapi.com/), which gives a list of Brew Dog's beers. We are then going to update the application state with this data, so that is gets displayed to the screen.

### Configuring Redux Thunk

First we need to install the Redux Thunk library.

```bash
npm i redux-thunk
```
We need to import it and configure it. Redux is middleware, so we are going to be using Redux's `applyMiddleware` function.

```js
import thunk from 'redux-thunk'; // NEW
import { createStore, compose, applyMiddleware } from 'redux'; // UPDATED
```

`applyMiddleware` allows us to extend Redux's out-of-the-box functionality. We pass it our middleware (`thunk`). We pass our applied middleware to our enhancers function.

```js
const store = createStore(
  beersReducer,
  composeEnhancers(applyMiddleware(thunk))
);
```

That is our application configured with Redux Thunk. We can now use thunks to update our store with the results of asynchronous actions.

### Dispatching an Action Asynchronously

Currently the `App` component is only responsible for rendering a title and a `BeersList`. We are going to use it's `componentDidMount` life-cycle method to make a request to the API, and when the requests completes, an action will be dispatched with the response data.

Let's write our `mapDispatchToProps` function, that returns an object with a function called `getBeersData`.

```js
// App.js

class App extends Component {
  // ...
}

const mapDispatchToProps = (dispatch) => ({ // NEW
  getBeersData() {

  }
});
```

When working with synchronous operations, we would expect `getBeersData` to dispatch an action, which would be a plain JavaScript object with a `type` property that also has the data stored on it to update the state with. But we don't have the data yet, so instead, `getBeersData` is going to dispatch a function (a thunk) that makes the data request and then dispatches an action once it has the data.

```js

const mapDispatchToProps = (dispatch) => ({ // NEW
  getBeersData() {
    dispatch(() => {
      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beersData => {
        dispatch({
          type: 'ADD_DATA',
          beersData
        });
      });
    });
  }
});
```

Now let's connect `App` to the redux store.

```js
import { connect } from 'react-redux';  // NEW

// ...

export default connect(null, mapDispatchToProps)(App); // UPDATED
```

Finally we need to call the `getBeersData`. Because this is the initial application data, we will do it in the life-cycle method `componentDidMount`, which will be called once the `App` component has been rendered to the DOM.

```js
class App extends Component {

  componentDidMount() { // NEW
    this.props.getBeersData();
  }

  //...
}
```

To recap, when the `App` component has mounted, `getBeersData` is called which dispatches the function that makes the request. Dispatching a function like this only works because we have Redux Thunk configured. If we didn't, we would get an error because Redux out-of-the-box only let's us dispatch actions that are plain objects with a `type` property. Our dispatched function is then called by Redux Thunk, the request is made, and the an action with the retrieved data is dispatched.

## Conclusion

Redux Thunk is a very small library (just one function!) that checks if you are dispatching a regular action, in which case it just returns the action, or if you dispatching a function, in which case the function is called and any action that is dispatched from within that function updates the store.

## Additional Resources

- ['What is a thunk'](https://daveceddia.com/what-is-a-thunk/) by Dave Ceddia
