import React from "react";
import Info from "./Info";
import img from "./img/img.png";
import carregandoimg from "./img/carregando.gif";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dados, setDados] = React.useState(null);
  const [user, setUser] = React.useState("");
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const resposta = await fetch(`https://api.github.com/users/${user}`);
    const json = await resposta.json();
    setDados(json);
    console.log(resposta);
    setCarregando(false)
  }

  return (
    <div className="container mt-5 text-center">
      <img src={img} width="130px" className="mb-5" alt="github" />
      <form className="input-group">
        <span className="input-group-text">Usuario</span>
        <input
          aria-label="First name"
          className="form-control"
          name="busca"
          id="busca"
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
          required
        />
      </form>

      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Buscar
      </button>
      
      <div className="mt-3">
      
      {carregando && <img src={carregandoimg} width="80px" alt="carregando"/>}
      {!carregando && dados && <Info dados={dados} />}</div>
    </div>
  );
}

export default App;
