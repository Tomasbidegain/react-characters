import React, { useEffect, useState } from "react";

// Creo el contexto
export const CharactersContext = React.createContext();

// Creo el componente CharactersProvider para el contexto
export const CharactersProvider = ({ children }) => {

  //Estado para guardar los personajes
  const [characters, setCharacters] = useState([]);

  //Estado para manejar la carga de los personajes
  const [loading, setLoading] = useState(true);

  //Estado para manejar los errores
  const [error, setError] = useState(null);

  //URL de la api a consumir
  const apiUrl = "https://swapi.dev/api/people/";

  const getCharacters = () => {
    //Realizo un fetch a la api, convierto el la respuesta en json y luego seteo solo los 10 primeros datos de la respuesta.
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results.slice(0, 10)))
      .then(() => setLoading(false))
      .catch((error) => {
        setError(
          "An error occurred while getting the characters. Please try again later."
        );
        setLoading(false);
      });
  };

  //Este useEffect es para  hacer la peticion a la api cada vez que se renderiza el componente.
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharactersContext.Provider
      value={{ characters, setCharacters, loading, error, getCharacters, setLoading }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
