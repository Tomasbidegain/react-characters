import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const AlertMessage = styled.p`
  color: #000;
  font-size: 18px;
  margin: 0 0 20px;
`;

export const AlertButton = styled.button`
  background-color: ${({ variant }) => (variant === 'primary' ? '#007bff' : '#6c757d')};
  border: none;
  color: #fff;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
`;
