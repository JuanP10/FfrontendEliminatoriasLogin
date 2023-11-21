import React from 'react';
import { Link } from 'react-router-dom';

function Inicio({ partidos }) {
  return (
    <div className="pagina-inicio">
    <h2 style={{ textAlign: 'center' }}>Resultados de Futbol</h2>
    {Array.isArray(partidos) && partidos.map(partido => (
      <div key={partido.id} className="contenedor-partido">
        <h3>{partido.equipoLocal} vs {partido.equipoVisitante}</h3>
        <p>Marcador: {partido.marcador}</p>
        <p>Fecha: {partido.fecha}</p>
        <p>Estadio: {partido.estadio}</p>
        <Link to={`/EditarPartido/${partido.id}`}>
          <button>Editar</button>
        </Link>
      </div>
    ))}
  </div>
  );
}

export default Inicio;
