import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useAppContext } from '../Components/utils/global.context';

const Home = () => {
  const { theme } = useAppContext();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Error: No se pudo obtener datos de la API');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <main className={`home-container ${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        
        {doctors.map((doctor) => (
          <Card
            key={doctor.id}
            name={doctor.name}
            username={doctor.username}
            id={doctor.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
