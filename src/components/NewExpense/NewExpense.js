import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  function saveExpenseDateHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.expenseHandler(expenseData);
    setShowForm(false);
  }
  function handleButtonClick() {
    setShowForm(true);
  }

  function handleCancelClick() {
    setShowForm(false);
  }
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={handleButtonClick}>Add New Expense</button>
      )}
      {showForm === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          cancelClick={handleCancelClick}
        />
      )}
    </div>
  );
};

export default NewExpense;
