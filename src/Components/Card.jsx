import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(AppContext);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favorite = { name, username, id };
    const updatedFavorites = [...state.favorites, favorite];

    dispatch({ type: "ADD_FAVORITE", payload: updatedFavorites });

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/medico/${id}`}>
        <h3>{name}</h3>
        <p>Username: {username}</p>
        <p>ID: {id}</p>
      </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
