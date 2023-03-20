import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from "react";

const ExpenseItem = (props) => {
  // const [title, updateTitle] = useState(props.name);
  // const clickHandler = () => {
  //   updateTitle("Updated");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.name}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        {/* <button onClick={clickHandler}>ChangeTitle</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
