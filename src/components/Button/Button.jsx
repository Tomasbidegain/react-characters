import { useContext, useState } from "react";
import { DeleteButton } from "./ButtonStyled";
import { CharactersContext } from "../../context/CharactersContext";
import Alert from "../Alert/Alert";

const Button = ( { name } ) => {
  //Obtengo el state de los personajes desde el contexto
  const { characters, setCharacters } = useContext(CharactersContext);

  //Estado para abrir o cerrar el alert
  const [showAlert, setShowAlert] = useState(false);

  //Funcion para abrir el alert
  const handleDeleteClick = () => {
    setShowAlert(true);
  };

  //Funcion para eliminar el personaje del state characters y para cerrar el alert
  const handleAlertConfirm = () => {
    deleteCharacter();
    handleAlertCancel();
  };

  //Funcion para cerrar el alert
  const handleAlertCancel = () => {
    setShowAlert(false);
  };

  //En esta funcion filtro los personajes que sean distintos del nombre del personaje que se pasa por props desde character y luego seteo los datos actualizados.
  const deleteCharacter = () => {
    const newCharacters = characters.filter(character => character.name !== name);
    setCharacters(newCharacters);
  }

  return (
    <>
      <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
      {/* Si showAlert es true se renderiza el componente alert */}
      {showAlert && <Alert name={name} onConfirm={handleAlertConfirm} onCancel={handleAlertCancel} />}
    </>
   );
}
 
export default Button;