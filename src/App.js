import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import Alert from "./components/Alert/Alert";

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #393230;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #393230;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.25rem;
  color: #ffd808;
  text-align: center;
  width: 80%;
`;

const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: first baseline;
  gap: 2rem;
`;

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, taskName: "Sacar al perro" },
    { id: 2, taskName: "Hacer la cena" },
  ]);
  const [taskValue, setTaskValue] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  const handleUserInput = (event) => {
    const newTask = event.target.value;
    setTaskValue(newTask);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const generateId = Math.floor((Math.random() + 1) * 10000);
    const taskName = taskValue.trim();

    if (taskName.length === 0) {
      return setAlertOpen(true);
    }

    try {
      const updatedList = [...todoList];
      updatedList.push({ id: generateId, taskName: taskName });
      setTodoList(updatedList);
      setTaskValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteButton = (id) => {
    const updatedList = todoList.filter((task) => task.id !== id);
    setTodoList(updatedList);
  };

  const handleEditButton = (id) => {
    const updatedList = [...todoList];
    const taskIndex = updatedList.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      let newTaskName = prompt("Enter the new task name:");

      if (newTaskName === null) {
        return alert("Task cannot be empty");
      }

      newTaskName = newTaskName.trim();

      if (newTaskName.length > 0) {
        updatedList[taskIndex].taskName = newTaskName;
        setTodoList(updatedList);
      }
    }
  };

  return (
    <div className="App">
      <Wrapper>
        <Box>
          <Alert
            open={alertOpen ? "open" : ""} // Set the open prop based on the alertOpen state
            alert="Task cannot be empty"
            onClick={() => {
              setAlertOpen(false);
            }}
          />
          <Title>
            {todoList.length > 0 ? "TO DO LIST" : "NO TASKS, ADD A TASK"}
          </Title>

          <Input
            value={taskValue}
            onSubmit={handleSubmit}
            onChange={handleUserInput}
          />
          <ListContainer>
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
          </ListContainer>
          <TaskCounter taskList={todoList} />
        </Box>
      </Wrapper>
    </div>
  );
}

export default App;
