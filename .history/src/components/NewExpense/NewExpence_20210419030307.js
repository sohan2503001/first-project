import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...ente
        }
    } 


    return <div className="new-expense">
        <form>
            <ExpenseForm onSaveExpenseData/>
        </form>
    </div>
};

export default NewExpense;