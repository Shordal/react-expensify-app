import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './filebase/filebase';
// import './playground/promises'

const store = configureStore();

//  store.dispatch(setTextFilter('water'));

//  setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
//  }, 3000);

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));
