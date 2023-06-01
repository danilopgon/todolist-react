/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const TaskForm = styled.form`
  padding: 1.25rem;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const TaskInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #ffd808;
  color: #ffd808;
  padding: 5px 10px;
  outline: none;
  background: transparent;
  font-size: 1.5rem;
  line-height: 2rem;
`;

const Input = ({ onSubmit, onChange, value }) => {
  return (
    <TaskForm onSubmit={onSubmit}>
      <TaskInput
        type="text"
        onChange={onChange}
        value={value}
        placeholder="What needs to be done?"
      ></TaskInput>
    </TaskForm>
  );
};

export default Input;
