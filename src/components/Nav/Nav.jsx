import { Logo, NavStyle, ReloadButton } from "./NavStyled";
import logo from '../../assets/darth-vader.png'
import { useContext } from "react";
import { CharactersContext } from "../../context/CharactersContext";
const Nav = () => {

  //Obtengo la funcion getCharacters desde el contexto
  const { getCharacters } = useContext(CharactersContext)

  //Funcion para recargar los personajes
  const reload = () => {
    getCharacters(true)
  }

  return ( 
    <NavStyle>
      <Logo src={logo} alt="Logo" />
      <ReloadButton onClick={reload}>Reload</ReloadButton>
    </NavStyle>
   );
}
 
export default Nav;