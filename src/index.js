import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CharactersProvider } from './context/CharactersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Envuelvo la aplicacion en el provider para que los valores esten disponibles en toda la aplicacion.
root.render(
  <React.StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </React.StrictMode>
);

reportWebVitals();
