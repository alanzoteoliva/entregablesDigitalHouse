import React from "react";
import './Card.css'

function Card({ nombre, apellido, infoUsuario }) {
  return (
    <div className="card">
      <h2>Hola {nombre}, {apellido}!</h2>
      <p>Que gusto tenerte por aqui!!</p>
      <p>{infoUsuario}</p>
    </div>
  );
}

export default Card;
