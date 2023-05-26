// import Expenses from './components/Expenses/Expenses';
import React from "react";
import "./App.css";
import VIcon from "components/atoms/Icon/Icon";

const App: React.FC = () => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  return (
    <div>
      <h2>Hi typescript!</h2>
      <VIcon></VIcon>
    </div>
  );
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>

  //     <Expenses expenses={expenses}></Expenses>
  //   </div>
  // );
};

export default App;
