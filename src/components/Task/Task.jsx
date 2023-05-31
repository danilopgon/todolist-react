/* eslint-disable react/prop-types */
import React from "react";

const Task = ({ task, onClick, editButton }) => {
  return (
    <li className="task">
      {task}
      <button onClick={editButton}>O</button>
      <button onClick={onClick}>X</button>
    </li>
  );
};

export default Task;
