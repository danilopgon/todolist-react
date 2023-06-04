/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const AlertDialog = styled.dialog`
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

const AlertBox = styled.div`
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

const CloseButton = styled.button`
  background-color: #ffd808;
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

const Alert = ({ alert, onClick, open }) => {
  return (
    <>
      {open && (
        <AlertDialog>
          <AlertBox>
            <Title>{alert}</Title>
            <CloseButton onClick={onClick}>Close alert</CloseButton>
          </AlertBox>
        </AlertDialog>
      )}
    </>
  );
};

export default Alert;
