import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #393230;
  z-index: 3;
`;

const LoadingText = styled.h1`
text-transform: uppercase;
background-image: linear-gradient(
  -225deg,
  #393230 0%,
  #ffd638 29%,
  #61a6f6 67%,
  #4a2029 100%
);
background-size: auto auto;
background-clip: border-box;
background-size: 200% auto;
color: #fff;
background-clip: text;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: textclip 2s linear infinite;
display: inline-block;
    font-size: 190px;
}

@keyframes textclip {
to {
  background-position: 200% center;
}
`;

const LoadingScreen = () => {
  return (
    <Overlay>
      <LoadingText>Loading...</LoadingText>
    </Overlay>
  );
};

export default LoadingScreen;
