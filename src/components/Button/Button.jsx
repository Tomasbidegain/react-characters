import { useContext, useState } from "react";
import { DeleteButton } from "./ButtonStyled";
import { CharactersContext } from "../../context/CharactersContext";
import Alert from "../Alert/Alert";

const Button = ( { name } ) => {
  //Obtengo el setCharacter desde el contexto
  const { characters, setCharacters } = useContext(CharactersContext);

  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteClick = () => {
    setShowAlert(true);
  };

  const handleAlertConfirm = () => {
    deleteCharacter()
    setShowAlert(false);
  };

  const handleAlertCancel = () => {
    setShowAlert(false);
  };

  const deleteCharacter = () => {
    const newCharacters = characters.filter(character => character.name !== name);
    setCharacters(newCharacters)
  }
  return (
    <>
      <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
      {showAlert && <Alert name={name} onConfirm={handleAlertConfirm} onCancel={handleAlertCancel} />}
    </>
   );
}
 
export default Button;