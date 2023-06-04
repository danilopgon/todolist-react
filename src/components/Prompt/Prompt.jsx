/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const PromptDialog = styled.dialog`
  height: 70vh;
  width: 70%;
  animation: fadeIn 1s ease both;
  background: rgb(255 255 255 / 40%);
  z-index: 2;
  backdrop-filter: blur(10px);
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
`;

const PromptBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.25rem;
  color: #ffd808;
  text-align: center;
  width: 80%;
`;

const PromptForm = styled.form`
  padding: 1.25rem;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const PromptInput = styled.input`
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

const Prompt = ({ promptText, open, onChange, value, onSubmit }) => {
  return (
    <>
      {open && (
        <PromptDialog>
          <PromptBox>
            <Title>{promptText}</Title>
            <PromptForm onSubmit={onSubmit}>
              <PromptInput
                type="text"
                onChange={onChange}
                value={value}
                placeholder="What needs to be done?"
              />
            </PromptForm>
          </PromptBox>
        </PromptDialog>
      )}
    </>
  );
};

export default Prompt;
