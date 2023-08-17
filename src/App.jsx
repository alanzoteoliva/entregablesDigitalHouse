import { useState } from "react";
import './index.css'
import Card from './Card'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [userInfo, setUserInfo] = useState('Información del usuario');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (input1.length >= 3 && !input1.startsWith(' ')) {
      if (input2.length >= 6) {
        setShowCard(true);
      } else {
        alert('Por favor verifica que la info sea correcta');
      }
    } else {
      alert('Por favor verifica que la info sea correcta');
    }
  };


  return (
    <div className="App">
      <h1>Muestrame tu nombre</h1>
      <form onSubmit={handleSubmit}>
        /* aqui deberias escribir tu codigo */

        <div className="form-group">
          <label htmlFor="input1">Input 1:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Input 2:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showCard && <Card input1={input1} input2={input2} userInfo={userInfo} />}
    </div>
  );
}


export default App;
