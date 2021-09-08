import React from "react";
import Info from "./Info";
import img from "./img/img.png";
import carregandoimg from "./img/carregando.gif";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [dados, setDados] = React.useState("");
  const [user, setUser] = React.useState("");
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    event.preventDefault();
    setCarregando(true);
    const resposta = await fetch(`https://api.github.com/users/${user}`);
    const json = await resposta.json();
    setDados(json);
    console.log(resposta);

    setCarregando(false);

    if (document.getElementById("busca").value.length < 1) {
      console.log("erro");
      alert('Por favor, digite um nome de Usuario')
      document.getElementById("busca").focus();
      setDados(false);
      return false;
    }
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

        <button className="btn btn-primary " onClick={handleClick}>
          Buscar
        </button>
      </form>

      <div className="mt-3">
        {carregando && (
          <img src={carregandoimg} width="90px" alt="carregando" />
        )}
        {!carregando && dados && <Info dados={dados} />}
      </div>
    </div>
  );
}

export default App;
