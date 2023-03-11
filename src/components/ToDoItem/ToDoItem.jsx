import React from "react";
import "./ToDoItem.css";

export const ToDoItem = ({ task }) => {
  return (
    <div>
      <li>{task}</li>
    </div>
  );
};
