import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Sacar al perro" },
    { id: 2, taskName: "Hacer la cena" },
  ]);
  const [taskValue, setTaskValue] = useState("");

  const handleUserInput = (event) => {
    const newTask = event.target.value.trim();
    setTaskValue(newTask);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskValue.length === 0) {
      return alert("Task cannot be empty");
    }

    const generateId = Math.floor((Math.random() + 1) * 10000);
    const taskName = taskValue;
    const updatedList = [...todoList];
    updatedList.push({ id: generateId, taskName: taskName });

    setTodoList(updatedList);
    setTaskValue(""); // Reset the taskValue to an empty string
  };

  const handleDeleteButton = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  const handleEditButton = (id) => {
    const updatedList = [...todoList];
    const taskIndex = updatedList.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      const newTaskName = prompt("Enter the new task name:").trim();
      if (newTaskName.length > 0) {
        updatedList[taskIndex].taskName = newTaskName;
        setTodoList(updatedList);
      }
    }
  };

  return (
    <div className="App">
      <h1>{todoList.length > 0 ? "To Do List" : "No tasks, add a task"}</h1>
      <div className="container">
        <Input
          value={taskValue}
          onSubmit={handleSubmit}
          onChange={handleUserInput}
        />

        <ul>
          {todoList.map((task) => {
            return (
              <Task
                value={taskValue.length !== 0 ? taskValue : ""}
                task={task.taskName}
                key={task.id}
                onClick={() => {
                  handleDeleteButton(task.id);
                }}
                editButton={() => {
                  handleEditButton(task.id);
                }}
              />
            );
          })}
        </ul>
        <TaskCounter taskList={todoList} />
      </div>
    </div>
  );
}

export default App;
