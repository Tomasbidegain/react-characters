import { AlertButton, AlertMessage, AlertWrapper } from "./AlertStyled";

const Alert = ( {onConfirm, onCancel, name}) => {
  return ( 
    <AlertWrapper>
      <AlertMessage>Do you want to eliminate {name}?</AlertMessage>
      <div>
        <AlertButton variant="primary" onClick={onConfirm}>Yes</AlertButton>
        <AlertButton variant="secondary" onClick={onCancel}>No</AlertButton>
      </div>
    </AlertWrapper>
   );
}
 
export default Alert;