import React, { useState } from 'react';

function UnitOfMeasureCreationForm({ onUnitOfMeasureCreated }) {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Por favor, ingresa el nombre de la unidad de medida.');
      setSuccessMessage('');
      return;
    }

    // Aquí iría la lógica para enviar los datos al backend
    // o para manejar la creación de la unidad de medida localmente

    // Simulación de una creación exitosa
    const newUnitOfMeasure = {
      id: Date.now(), // Simulación de un ID único
      name: name,
    };

    // Llamar a la función de callback para notificar al componente padre
    if (onUnitOfMeasureCreated) {
      onUnitOfMeasureCreated(newUnitOfMeasure);
    }

    setSuccessMessage(`Unidad de medida "${name}" creada exitosamente.`);
    setErrorMessage('');
    setName(''); // Limpiar el formulario
  };

  return (
    <div>
      <h2>Crear Nueva Unidad de Medida</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre de la Unidad de Medida:</label><br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div><br></br>
        <button type="submit">Crear Unidad</button>
      </form>
    </div>
  );
}

export default UnitOfMeasureCreationForm;