import styled from 'styled-components';

export const DeleteButton = styled.button`
  background-color: #f44336; /* Color rojo */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #d32f2f; /* Cambiamos el color de fondo en el hover */
  }
`;