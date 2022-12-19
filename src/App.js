import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const lists = [
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
  var newItem = {};
  const addExpenseHandler = (expense) => {
    newItem = {
      ...lists,
      expense
    };
    console.log(newItem);
     return newItem;
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses lists={lists} />
    </div>
  );
};

export default App;
