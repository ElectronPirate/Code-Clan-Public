import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Transactions from './Transactions';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import financesReducer from './reducers/financesReducer';
const store = createStore(financesReducer);

ReactDOM.render(
    <Provider store={store}>
        <Transactions />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
