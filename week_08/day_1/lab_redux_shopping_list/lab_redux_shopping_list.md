# Redux Lab: Shopping List

### Learning Objectives

- Understand the event and data flow through a Redux application
- Be able to use Redux in a vanilla JS application
- Understand that state must not be mutated by the reducer

## Brief

Your task is to create an application that allows a user to create a shopping list. When the user submits an item via the form, it should be added to a list on the page.

Use the start code provided and complete the task, using redux to manage the state (the list data). The initial state should be defined as an empty array.

### MVP

Follow these steps to use redux to manage the state in the favourite foods application.

- Write the reducer that defines how your state will be updated
- Create a store with your reducer
- Subscribe to the store, so that the page is re-rendered when there are changes made to the state
- On the form's submit event, dispatch an action that has a `type` and `value` property. The value should contain the newly submitted item.

Hint: When you dispatch the action to add the new item to the state, you will need to include the action type (as we did before), but you will also need to include an additional property to send the new food item. E.g.

```js
{
  type: 'ADD_LIST_ITEM',
  item: newFood
}
```

**Important: The reducer must be a pure function and not mutate the state. It must create a new array containing the updated values, which it then returns.**

### Extensions

- Add the functionality to be able to remove individual items from the list
