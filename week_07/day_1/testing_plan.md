## Testing Plan

The key question you're probably asking yourself is "what do I test?"

Here's some guidelines:

1. Does everything render correctly?
2. Do the interactions work?
3. Will the frontend show the correct state after specific actions?
4. How would a user interact with the page? They would run through specific flows.

To test front-end component based web apps effectively, you need to three types of tests. Unit tests, snapshot tests, and acceptance tests.

You should have multiple unit tests for each component, one or two snapshot tests per component, and one or two end to end tests that test multiple components connected together.

## Testing our RestaurantList

## Component Testing

| Component      | What should it do?            | What do we test?                            | Tested? |
| -------------- | ----------------------------- | ------------------------------------------- | ------- |
| InputArea      | Accepts a user inputed string | That the user can enter a string            |         |
| InputArea      | Accepts a user inputed string | That the user can NOT enter an empty string |         |
| RestaurantList | List the restaurants          | renders "No items" when there are no items  |         |
| RestaurantList | List the restaurants          | renders the items in a list                 |         |

## Acceptance Testing

| Action                                    | Tested? |
| ----------------------------------------- | ------- |
| User sees an input and button on the page | x       |
| User enters an empty string               | x       |
| User clicks the button                    | x       |
| User sees an error message on the screen  | x       |
| User fills in missing field               | x       |
| User clicks the button again              | x       |
| User sees the item added to the list      |         |

## React Testing Library

| Method         | What does it do?                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| getByText      | This will search for all elements that have a text node with textContent matching the given TextMatch.              |
| getByLabelText | This will search for the label that matches the given TextMatch, then find the element associated with that label   |
| render         | The render method renders a React element into the DOM and returns utility functions for testing the component.     |
| fireEvent      | Convenience methods for firing DOM events.                                                                          |
| cleanup        | Unmounts React trees that were mounted with render.                                                                 |
| wait           | When in need to wait for non-deterministic periods of time you can use wait, to wait for your expectations to pass. |
