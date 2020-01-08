# Lab: React Redux Spending Tracker

## Brief

Your task is to build a react redux application for tracking spending. The user should be able to submit a transaction via a form, which should then be rendered in a list of all transactions.

Create your application in a single component called `Transactions`. Use Redux and React-Redux to manage the state.

### MVP

- Allow a user to see a list of their transactions.
- Allow the user to submit a transaction (a number) and see it added to the list.

HINT: When you are handling the submit of the form, you will need to get hold of the event object to prevent the form's default behaviour and access the data from the input. To do this you will need to write a `handleFormSubmit` function to handle this. `handleFormSubmit` will also be responsible for calling the function to dispatch the action with the submitted number.

### Extensions

- Add functionality to allow the user to be able to clear the list.

## Planing

- Start by configuring the Redux Dev Tools
- A possible approach would be to create the application in the following order:
  - Create the reducer
  - Create the store and make it accessible to the application
  - Create the `Transactions` component's form that adds a new transaction to state
  - Render the state's transactions in a list
