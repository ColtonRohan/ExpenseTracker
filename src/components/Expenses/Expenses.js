import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearData, setYearData] = useState("2020");
  const filterFowarded = (filteredYear) => {
    setYearData(filteredYear);
  };

  // this is the constant that filters the list of expenses based on their year
  // you then pass this filteredExpenses to the map function in ExpensesList to render the page based on the selected year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearData;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearData} onDataFiltered={filterFowarded} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* this method we were using proved to put too much content into the JSX retrun statement, i instead moved my logic to above the return */}

        {/* {filteredExpenses.length === 0 && expensesContent}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                name={expense.title}
                price={expense.amount}
              />
            );
          })} */}
      </Card>
    </div>
  );
};

export default Expenses;
