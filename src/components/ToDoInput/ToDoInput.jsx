import React from "react";
import "./ToDoInput.css";

export const ToDoInput = ({ onChange, addTask, value }) => {
  const onAddTask = (e) => {
    e.preventDefault();
    addTask();
  };
  return (
    <form onSubmit={onAddTask}>
      <h1>Tasks List</h1>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
