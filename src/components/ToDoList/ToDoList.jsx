import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import './ToDoList.css'

export const ToDoList = ({tasks}) => {

  return (
    <div>
      <ul>
        {tasks.map((task, i) => <ToDoItem key={i + 1} task={task}/>)}
      </ul>
    </div>
  );
};
