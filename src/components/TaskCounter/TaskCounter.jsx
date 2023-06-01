/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TaskText = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #ffd808;
  text-align: left;
  align-self: flex-start;
  padding: 1rem;
`;

const TaskCounter = ({ taskList }) => {
  const [tasksLeft, setTasksLeft] = useState("");

  useEffect(() => {
    setTasksLeft(`${taskList.length} item left`);
  }, [taskList]);

  return <TaskText>{tasksLeft}</TaskText>;
};

export default TaskCounter;
