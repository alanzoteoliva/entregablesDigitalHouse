import React from "react";

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ input1, input2, userInfo }) {
  return (
    <div className="card">
      <h2>Esto es un componente</h2>
      <p>Input 1: {input1}</p>
      <p>Input 2: {input2}</p>
      <p>{userInfo}</p>
    </div>
  );
}

export default Card;
