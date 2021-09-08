import React from "react";


const Info = ({ dados }) => {
    
  return (
    <div>
      <h3>{dados.name} </h3>
      <p>{dados.login}</p>
      <p>{dados.email}</p>
      <p id="repositorio">Repositorios públicos: {dados.public_repos}</p>
      <a href={dados.html_url} target="_blank" rel="noreferrer">{dados.html_url}</a>
    </div>
  );
};

export default Info;
