import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del médico.');
        }
        const doctorData = await response.json();
        setDoctor(doctorData);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchDoctorDetails();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist ID {id}</h1>
      {doctor && (
        <div>
          <h2>{doctor.name}</h2>
          <p>Email: {doctor.email}</p>
          <p>Phone: {doctor.phone}</p>
          <p>Website: {doctor.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
