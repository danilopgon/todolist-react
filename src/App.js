import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

import Input from "./components/Input/Input";
import Task from "./components/Task/Task";
import TaskCounter from "./components/TaskCounter/TaskCounter";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

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
  const [todoList, setTodoList] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/danilopgon")
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setTodoList(response);
          setDoneLoading(true);
        }, 3000);
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/danilopgon", {
        method: "PUT",
        body: JSON.stringify(todoList),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
          console.log(resp.status); // el código de estado = 200 o código = 400 etc.
          return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
          //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
          console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
        })
        .catch((error) => {
          //manejo de errores
          console.log(error);
        });
    }
  }, [todoList]);

  const handleUserInput = (event) => {
    const newTask = event.target.value;
    setTaskValue(newTask);
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const label = taskValue.trim();

      if (label.length === 0) {
        return alert("Task cannot be empty");
      }

      const updatedList = [...todoList];
      updatedList.push({ label: label, done: false });

      setTodoList(updatedList);
      setTaskValue(""); // Reset the taskValue to an empty string
    } catch (error) {
      alert("Task couldn't be added");
    }
  };

  const handleDeleteButton = (key) => {
    const updatedList = todoList.filter((_, index) => index !== key);
    setTodoList(updatedList);
  };

  return (
    <div className="App">
      {!doneLoading ? (
        <LoadingScreen />
      ) : (
        <Wrapper>
          <Box>
            <Title>
              {todoList.length > 0 ? "TO DO LIST" : "NO TASKS, ADD A TASK"}
            </Title>
            <Input
              value={taskValue}
              onSubmit={handleSubmit}
              onChange={handleUserInput}
            />
            <ListContainer>
              {todoList.map((task, key) => {
                return (
                  <Task
                    value={taskValue.length !== 0 ? taskValue : ""}
                    task={task.label}
                    key={key}
                    onClick={() => {
                      handleDeleteButton(key);
                    }}
                  />
                );
              })}
            </ListContainer>
            <TaskCounter taskList={todoList} />
          </Box>
        </Wrapper>
      )}
    </div>
  );
}

export default App;
