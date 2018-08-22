import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit action object', () => {
    const action = editExpense('123abc', {
        description: 'con ma',
        amount: 300,
        note: 'khong co gi',
        createdAt: 30000000
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'con ma',
            amount: 300,
            note: 'khong co gi',
            createdAt: 30000000
        }
    });
});

test('should set up add action object', () => {
    const expense = {
        description: 'con ma',
        amount: 300,
        note: 'khong co gi',
        createdAt: 30000000
    }
    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should set up add action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    });
});