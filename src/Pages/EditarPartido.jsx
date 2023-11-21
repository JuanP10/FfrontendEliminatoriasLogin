import React, { useState } from 'react';

function EditarPartido({ match }) {
  const partidoId = match.params.id;
  const [estadio, setEstadio] = useState('');
  const [marcador, setMarcador] = useState('');
  const [fecha, setFecha] = useState('');

  const handleGuardarEdicion = () => {
    console.log('Edición guardada:', { estadio, marcador, fecha });
  };

  return (
    <div>
      <h2>Editar Partido</h2>
      <div>
        <label>Estadio:</label>
        <input type="text" value={estadio} onChange={e => setEstadio(e.target.value)} />
      </div>
      <div>
        <label>Marcador:</label>
        <input type="text" value={marcador} onChange={e => setMarcador(e.target.value)} />
      </div>
      <div>
        <label>Fecha:</label>
        <input type="text" value={fecha} onChange={e => setFecha(e.target.value)} />
      </div>
      <button onClick={handleGuardarEdicion}>Guardar Edición</button>
    </div>
  );
}

export default EditarPartido;