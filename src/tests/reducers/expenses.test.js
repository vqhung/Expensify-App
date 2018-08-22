import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id if id not match', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'xxx'
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
        description: 'Car',
        note: '',
        amount: 1950000,
        createdAt: 0
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses,action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 13099
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(action.updates.amount);
});

test('should not edit an expense if id not match', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'xxx',
        updates: {
            amount: 13099
        }
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});