import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import { get } from 'http';

// ADD EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
        } 
};
// SET_TEXT_FILTER

const setTextFilter = (text) => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}
// SORT_BY_DATE

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};
// SORT_BY_AMOUNT

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
// SET_START_DATE

const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}
// SET_END_DATE

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt <= b.createdAt ? -1 : 1;
        } else if (sortBy === 'amount') {
            return a.amount <= b.amount ? 1 : -1;
        }
         
    });
};

const store = createStore(
    combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
}
);

 const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 10, createdAt: 1000}));
 const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 100, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseTwo.expense.id}));

// store.dispatch(editExpense(expenseOne.expense.id,{description: 'Coffee', amount: 100}));

// store.dispatch(setTextFilter('Coffee'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(999));
 //store.dispatch(setTextFilter('ffe'));
  store.dispatch(sortByAmount());
const demoState = {
    expenses: [{
        id: 'podjafdj',
        description: 'January rent',
        note: 'Final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
