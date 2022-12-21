import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2022');

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };
  // const filteredExpenses = props.lists.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });
  return (
    <div>
      {/* <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> */}
      {props.lists.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}    
    </div>
  );
};
export default Expenses;
