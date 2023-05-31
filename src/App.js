import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";

import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Sacar al perro" },
    { id: 2, taskName: "Hacer la cena" },
  ]);

  const handleDeleteButton = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      <h1>{todoList.length > 0 ? "To Do List" : "No tasks, add a task"}</h1>
      <div className="container">
        <Input />
        <ul>
          {todoList.map((task) => {
            return (
              <Task
                task={task.taskName}
                key={task.id}
                onClick={() => {
                  handleDeleteButton(task.id);
                }}
              />
            );
          })}
        </ul>
        <TaskCounter />
      </div>
    </div>
  );
}

export default App;
