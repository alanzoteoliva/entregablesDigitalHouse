import React from "react";
import Card from "../Components/Card";
import { useAppContext } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useAppContext();
  
  const favDoctors = JSON.parse(localStorage.getItem("favDoctors")) || [];

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        
        {favDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            name={doctor.name}
            username={doctor.username}
            id={doctor.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
