import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid #f5f5f5;
  border-top-color: #3498db;
  animation: ${rotate} 0.8s ease-in-out infinite;
  margin: 20px auto;
  padding: 10px;
`;

export const SwordIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  animation: none;
`;







