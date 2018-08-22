
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'


const store = configureStore();



//store.subscribe(() => {
  //  console.log(store.getState());
    //const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
 //   console.log(visibleExpenses);
//});

store.dispatch(addExpense({
    description: 'water bill',
    amount: 100,
}));

store.dispatch(addExpense({
    description: 'gas bill',
    createdAt: 1000,
}));
store.dispatch(addExpense({
    description: 'rent',
    amount: 200000,
}));

//store.dispatch(setTextFilter('bill'));

console.log(store.getState().expenses);

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));