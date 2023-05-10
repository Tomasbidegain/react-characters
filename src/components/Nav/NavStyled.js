import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #282c34;
  padding: 10px 140px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const ReloadButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
