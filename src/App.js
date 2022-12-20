import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const listsExpenses = [
  {
    id: "id1",
    title: "Vina",
    amount: 453.2,
    date: new Date(2012, 12, 30),
  },
  {
    id: "id2",
    title: "Hello Hola",
    amount: 233.2,
    date: new Date(2012, 11, 10),
  },
  {
    id: "id1",
    title: "Vina",
    amount: 453.2,
    date: new Date(2012, 12, 30),
  },
  {
    id: "id2",
    title: "Hello Hola",
    amount: 233.2,
    date: new Date(2012, 11, 10),
  },
];
const App = () => {

  const [expenses, setExpenses] = useState(listsExpenses);
  
  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
    console.log(expense);
    console.log(expenses);
    console.log(setExpenses);
    console.log(listsExpenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses lists={expenses} />
    </div>
  );
};

export default App;
