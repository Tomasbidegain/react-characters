import { useContext} from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import CharactersList from "./components/CharactersList/CharactersList";
import Error from "./components/Error/Error";
import { CharactersContext } from "./context/CharactersContext";
import Nav from "./components/Nav/Nav";

function App() {
  //Obtengo el loading y el error desde el contexto
  const { loading, error } = useContext(CharactersContext);

  return (
    <div className="App">
      {!loading && <Nav />}
      <header className="App-header">
        {loading ? (<Loading />) : error ? (<Error message={error} />) : (<CharactersList />)}
      </header>
    </div>
  );
}

export default App;
