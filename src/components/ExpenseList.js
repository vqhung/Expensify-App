import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import expenseSelector from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} {...expense} />
            );
        })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: expenseSelector(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);