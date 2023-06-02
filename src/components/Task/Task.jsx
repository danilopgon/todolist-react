/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = styled.button`
  visibility: hidden;
  color: #ffd808;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-left: auto;
  background-color: transparent;
  border: none;

  &:hover {
    color: white;
  }
`;

const StyledTask = styled.li`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 100%;
  color: #ffd808;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 2rem 0;
  border-bottom: 1px solid #ffd808;
  border-top: 1px solid #ffd808;

  &:hover ${DeleteButton} {
    visibility: visible;
  }
`;

const Task = ({ task, onClick }) => {
  return (
    <StyledTask className="task">
      {task}
      <DeleteButton onClick={onClick}>
        <FontAwesomeIcon icon={faTrash} />
      </DeleteButton>
    </StyledTask>
  );
};

export default Task;
