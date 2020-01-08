# React Countries

## Learning Objectives

- Be able to make HTTP requests to fetch data inside a React component
- Know about React component lifecycle methods

## Intro

In this lesson we are going to use React to make a HTTP request to the same API. As we saw with the Comments app, by setting the received data on our state, we trigger a re-render of our application, which we can use to populate our UI. Here we will see how React's component lifecycle methods can help us perform HTTP requests. We will also be using stateless functional components where possible.

## Design

We are going to build an app that makes a request to the countries API, populates a drop-down select with the names of the countries, and allows the user to select a country and see more details about the selected country. Let's think about which components we might need to make this, and what state and props each would require.

The start code already contains the functionality, with some hard coded data. The data is used to populate the select. Then when a user selects a country, the state is updated in the container to reflect this change, and renders the selected country.

## Component Lifecycle Methods

Our `Countries` container is a class bassed component and inherits from the React class `Component`. This means we also inherit the methods defined in `Component` class. So far we have been using the `render` methods from the inherited class, but there are others we can use for different reasons. There are a collection of methods on the `Component` class called the Lifecycle methods. These get called at different points in the components life cycle. One of those lifecycle methods is called `componentDidMount`

### `componentDidMount`

The componentDidMount() method is called after the component has been rendered. If we put in a couple of logs in our programme we can see that when we load the page, `render` is called first, then `componentDidMount` is called.

```js
// Countries.js

componentDidMount() { // NEW
    console.log('componentDidMount has been called')
}

render() {
	console.log('render has been called') // NEW
	return (
		<>
		// ...
		</>
	)
}

```

We see that the `render` log outputs first, then the `componentDidMount` log outputs. If we then make a selection from the select, we can see `render` gets called again, but `componentDidMount` does not. `componentDidMount` is only rendered once in the life of the component.

## Getting Countries from API

The React documentation recommends that `componentDidMount` is the right place to do an HTTP request that fetches intital application data. As it gets called once the page has been rendered, if the request takes some time, the user is already able to see the rest of the page displated.

We are going to make a request to the [RestCountries API](https://restcountries.eu/#api-endpoints-all) to get a full set of country data. Let's start by deleting the hard coded data.

```js
constructor(props) {
    super(props);
    this.state = {
      countriesData: [], // UPDATED
      selectedIndex: null
    };
    // ..
}
```

And now we are going to replace that data with the data we fetch from the API. Let's use `componentDidMount` to make out request. Once the data is retreived we are going to set it on the component's state object.

```js
componentDidMount() {
	fetch('https://restcountries.eu/rest/v2/all')
	  .then(res => res.json())
	  .then(data => {
	    this.setState({countriesData: data});
	  });
}
```

Setting the component's state causes a rerender of the page. So although that data doesn't exist in the initital render, once the retreived data is set on state, the page is rendered again with the new data. This populates the select.

Again we can check dev tools and see that the state has changed!

## Conclusion

We can now hook into a React component's lifecycle methods to make an HTTP request and update its own state, triggering re-rendering of the UI on the completion of the request using the `setState` method.
