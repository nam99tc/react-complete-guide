import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, stateChange] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandle = (even) => {
    stateChange({
      ...userInput,
      enteredTitle: even.target.value,
    });
  };
  const amountChangeHandle = (even) => {
    stateChange({
      ...userInput,
      enteredAmount: even.target.value,
    });
  };
  const dateChangeHandle = (even) => {
    stateChange({
      ...userInput,
      enteredDate: even.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    stateChange({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:'',
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            value={userInput.enteredDate}
            required
            onChange={dateChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
