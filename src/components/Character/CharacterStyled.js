import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: #888;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  margin: 10px;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 10px;
`;

export const Name = styled.h2`
  color: #ddd;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Details = styled.p`
  color: #333;
  font-size: 14px;
  margin: 0;
  text-align: justify;
`;

export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;

`;
