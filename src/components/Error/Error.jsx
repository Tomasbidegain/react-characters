import { ErrorMessage } from "./ErrorStyled";

const Error = ({ message }) => {
  return (
    <>
      <h1>404 ERROR</h1>
      <ErrorMessage> {message} </ErrorMessage>
    </>
  );
};

export default Error;
