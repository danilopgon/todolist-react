import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";

import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(["Sacar al perro", "Hacer la cena"]);

  
  return (
    <div className="App">
      <h1>ToDo list</h1>
      <div className="container">
        <Input />
        <ul>
          {todoList.map((task, key) => {
            return <Task task={task} key={key} />;
          })}
        </ul>
        <TaskCounter />
      </div>
    </div>
  );
}

export default App;