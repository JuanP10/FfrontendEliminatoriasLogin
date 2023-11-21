import React, { useState, useEffect } from 'react';

function Equipo() {
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [directorTecnico, setDirectorTecnico] = useState('');
  const [urlBandera, setUrlBandera] = useState('');
  const [equipos, setEquipos] = useState([]);

  

  const registrarEquipo = () => {
    // Lógica para registrar un nuevo equipo en el backend
    fetch('http://localhost:8080/api/equipos/equipos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nombre: nombreEquipo,
    directorTecnico,
    urlBandera,
      }),
      credentials: 'omit', 
    })

      .then(response => response.json())
      .then(data => {
        // Actualizar la lista de equipos después de registrar uno nuevo
        setEquipos(prevEquipos => [...prevEquipos, data]);
        // Limpiar los campos del formulario después de registrar
        setNombreEquipo('');
        setDirectorTecnico('');
        setUrlBandera('');
      })
      .catch(error => console.error('Error registrando equipo:', error));
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Registrar Equipos</h2>
        <div>
          <label htmlFor="nombreEquipo">Nombre del Equipo:</label>
          <input
            type="text"
            id="nombreEquipo"
            value={nombreEquipo}
            onChange={(e) => setNombreEquipo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="directorTecnico">Director Técnico:</label>
          <input
            type="text"
            id="directorTecnico"
            value={directorTecnico}
            onChange={(e) => setDirectorTecnico(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="urlBandera">URL de la Bandera:</label>
          <input
            type="text"
            id="urlBandera"
            value={urlBandera}
            onChange={(e) => setUrlBandera(e.target.value)}
          />
        </div>
        <div>
          <button onClick={registrarEquipo}>Guardar Equipo</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f0f0', // Fondo gris claro
  },
  formContainer: {
    background: '#ffffff', // Fondo blanco
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra suave
    textAlign: 'center',
  },
};

export default Equipo;

