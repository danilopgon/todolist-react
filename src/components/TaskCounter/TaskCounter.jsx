/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const TaskCounter = ({ taskList }) => {
  const [tasksLeft, setTasksLeft] = useState("");

  useEffect(() => {
    setTasksLeft(`${taskList.length} item left`);
  }, [taskList]);

  return <p>{tasksLeft}</p>;
};

export default TaskCounter;
