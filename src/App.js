import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "School Books",
    amount: 215.25,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Tire Replacement",
    amount: 304.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Rent Cost",
    amount: 900,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Shoes",
    amount: 50,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e5",
    title: "Washer Replacement",
    amount: 550,
    date: new Date(2022, 7, 23),
  },
  {
    id: "e6",
    title: "Rent Cost",
    amount: 900,
    date: new Date(2023, 6, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // in most cases this implementation will work to display items but its best practice to add items to an existing array with a function
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log(expense);
  };

  return (
    <div>
      <NewExpense expenseHandler={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
