import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente");
    } else {
      setSuccess(`Gracias ${name}, te contactaremos vía mail`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
}

export default Form;
