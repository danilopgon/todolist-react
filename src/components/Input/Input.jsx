/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="What needs to be done?"
      ></input>
    </form>
  );
};

export default Input;
