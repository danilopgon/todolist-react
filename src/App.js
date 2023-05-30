import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";

import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Sacar al perro" },
  ]);

  const handleDeleteButton = (id) => {};

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <div className="container">
        <Input />
        <ul>
          {todoList.map((task) => {
            return (
              <Task
                task={task}
                key={}
                onClick={() => {
                  handleDeleteButton(id);
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
