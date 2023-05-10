import { useContext } from "react";
import Character from "../Character/Character";
import { ContentCharacters } from "./CharacterListStyled";
import { CharactersContext } from "../../context/CharactersContext";

const CharactersList = () => {
  //Obtengo el character desde el contexto
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <h1>Characters information</h1>
      <ContentCharacters>
        {characters.length !== 0 ? (
          characters.map((character) => {
            return <Character key={character.url} character={character} />;
          })
        ) : (
          <p>No characters available</p>
        )}
      </ContentCharacters>
    </>
  );
};

export default CharactersList;