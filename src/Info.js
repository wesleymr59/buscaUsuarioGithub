import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Info = ({ dados }) => {
  return (
    <div>
      <h3>{dados.name} </h3>
      <p>{dados.login}</p>
      <p>{dados.email}</p>
      <p>Repositorios públicos: {dados.public_repos}</p>
      <a href={dados.html_url} target="_blank">{dados.html_url}</a>
    </div>
  );
};

export default Info;
