//Para importar é necessário seguir:
import { PI as numeroPI } from "./teste-de-importacao";
//É possível mudar o nome da importação "PI" utilizando "as" e o novo nome desejado
//Para utilizar uma constante/variável exportada é necessário seguir:
//{PI}
//Para importar a exportação default:
import nomes from "./teste-de-importacao";

import './global.css';

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
//O nome "index" não precisa ser escrito

import { useState } from "react";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button>
    </>
  );
}

export default App;
