import React, { useState, useEffect } from 'react';

const Partidos = () => {
  const [equipos, setEquipos] = useState([]);
  const [equipoLocal, setEquipoLocal] = useState('');
  const [equipoVisitante, setEquipoVisitante] = useState('');
  const [fechaPartido, setFechaPartido] = useState('');
  const [estadio, setEstadio] = useState('');
  const [arbitro, setArbitro] = useState('');
  const [marcadorLocal, setMarcadorLocal] = useState('');
  const [marcadorVisitante, setMarcadorVisitante] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/partidos')
      .then(response => response.json())
      .then(data => setEquipos(data))
      .catch(error => console.error('Error fetching equipos:', error));
  }, []); 

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Registrar Partidos</h2>
        <div>
          <label htmlFor="equipoLocal">Equipo Local:</label>
          <select
            id="equipoLocal"
            value={equipoLocal}
            onChange={(e) => setEquipoLocal(e.target.value)}
          >
            <option value="">Selecciona un equipo local</option>
            {equipos.map((equipo) => (
              <option key={equipo.id} value={equipo.id}>
                {equipo.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="equipoVisitante">Equipo Visitante:</label>
          <select
            id="equipoVisitante"
            value={equipoVisitante}
            onChange={(e) => setEquipoVisitante(e.target.value)}
          >
            <option value="">Selecciona un equipo visitante</option>
            {equipos.map((equipo) => (
              <option key={equipo.id} value={equipo.id}>
                {equipo.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="fechaPartido">Fecha del Partido:</label>
          <input
            type="date"
            id="fechaPartido"
            value={fechaPartido}
            onChange={(e) => setFechaPartido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estadio">Estadio:</label>
          <input
            type="text"
            id="estadio"
            value={estadio}
            onChange={(e) => setEstadio(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="arbitro">Nombre del Árbitro:</label>
          <input
            type="text"
            id="arbitro"
            value={arbitro}
            onChange={(e) => setArbitro(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="marcadorLocal">Marcador Equipo Local:</label>
          <input
            type="text"
            id="marcadorLocal"
            value={marcadorLocal}
            onChange={(e) => setMarcadorLocal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="marcadorVisitante">Marcador Equipo Visitante:</label>
          <input
            type="text"
            id="marcadorVisitante"
            value={marcadorVisitante}
            onChange={(e) => setMarcadorVisitante(e.target.value)}
          />
        </div>
        <div>
          <button>Guardar Partido</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f0f0f0', //  gris claro
  },
  formContainer: {
    background: '#ffffff', // blanco
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra 
    textAlign: 'center',
  },
};

export default Partidos;



