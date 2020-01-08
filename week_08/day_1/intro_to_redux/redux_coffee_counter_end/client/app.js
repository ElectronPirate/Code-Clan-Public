// const { createStore } = require('redux');

document.addEventListener('DOMContentLoaded', () => {

  const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    };

    const subscribe = (listener) => {
      listeners.push(listener);
    };

    dispatch({});
    return { getState, dispatch, subscribe };
  };

  const coffeeReducer = (state = 0, action) => {
    switch(action.type) {
      case 'ADD_COFFEE':
        return state + 1
      case 'RESET':
        return 0
      default:
        return state;
    };
  };

  const store = createStore(coffeeReducer);

  const button = document.querySelector('button#add');
  button.addEventListener('click', () => {
    store.dispatch({ type: 'ADD_COFFEE'});
  });

  const resetButton = document.querySelector('button#reset');
  resetButton.addEventListener('click', () => {
    store.dispatch({ type: 'RESET'});
  });

  const render = () => {
    const total = document.querySelector('h3#total');
    total.textContent = store.getState();
  };

  store.subscribe(() => {
    render();
  });

  render();

});
