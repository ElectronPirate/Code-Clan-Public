const { createStore } = require('redux');

document.addEventListener('DOMContentLoaded', () => {

  const shoppingReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_LIST_ITEM':
        return [...state, action.item]
      case 'REMOVE_LIST_ITEM':
        const indexToRemove = state.indexOf(action.item);
        const newArray = [...state];
        newArray.splice(indexToRemove, 1)
        return newArray;
      default:
        return state;
    }
  }

  const store = createStore(shoppingReducer);

  const render = () => {
    const listData = store.getState();
    const list = document.querySelector('ul#shopping-list');
    list.innerHTML = "";

    listData.forEach((item) => {
      const listItem = createListItem(item);
      const removeButton = createRemoveButton(item);
      listItem.appendChild(removeButton);
      list.appendChild(listItem);
    });
  }

  store.subscribe(render);

  const form = document.querySelector('#shopping-list-form');

  form.addEventListener('submit', (evt) => {
    event.preventDefault();
    const newItem = evt.target.item.value;
    store.dispatch({
      type: 'ADD_LIST_ITEM',
      item: newItem
    });
    form.reset();
  });

  const createListItem = (item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem;
  };

  const createRemoveButton = (itemToRemove) => {
    const button = document.createElement('button');
    button.textContent = "x";
    button.addEventListener('click', (evt) => {
      store.dispatch({
        type: 'REMOVE_LIST_ITEM',
        item: itemToRemove
      });
    });
    return button;
  };

});
