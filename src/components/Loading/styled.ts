import styled, { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingCircle = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Container = styled.div`
  width: 100%;
  height:100%;
  display:flex ;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`