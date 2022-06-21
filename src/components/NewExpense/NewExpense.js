import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hideFormHandler = () => {
    setIsFormDisplayed(false);
  };

  const displayFormHandler = () => {
    setIsFormDisplayed(true);
  };

  return (
    <div className="new-expense">
      {!isFormDisplayed && (
        <button type="button" onClick={displayFormHandler}>
          Add New Expense
        </button>
      )}
      {isFormDisplayed && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
