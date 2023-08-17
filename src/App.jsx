import { useState } from "react";
import './App.css'
import Card from './Card'

function App() {
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [verCard, setVerCard] = useState(false);
  const [infoUsuario, setinfoUsuario] = useState('Información del usuario');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nombre.length >= 3 && !nombre.startsWith(' ')) {
      if (apellido.length >= 6) {
        setVerCard(true);
      } else {
        alert('Por favor verifica que el apellido contenga al menos 6 caracteres.');
      }
    } else {
      alert('Por favor verifica que la longitud mínima del nombre ingresado sea de 3 caracteres y no tenga espacios en blanco al comienzo.');
    }
  };


  return (
    <div className="App">
      <h1>Hola, quién eres?</h1> 
      <form onSubmit={handleSubmit}>
      
        <div className="formulario">
          <label >Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="formulario">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {verCard && <Card nombre={nombre} apellido={apellido} userInfo={infoUsuario} />}
    </div>
  );
}


export default App;
