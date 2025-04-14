import React, { useState } from 'react';
import './LocationCreationForm.css'; // Importa  estilos

function LocationCreationForm({ onLocationCreated }) {
  const [locationName, setLocationName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!locationName.trim()) {
      setErrorMessage('Por favor, ingrese el nombre de la ubicación.');
      setSuccessMessage('');
      return;
    }

    // Aquí iría la lógica para enviar los datos al backend
    // Simulación de una creación exitosa
    console.log('Nueva ubicación a crear:', locationName);
    setErrorMessage('');
    setSuccessMessage(`Ubicación "${locationName}" creada exitosamente.`);
    setLocationName(''); // Limpiar el formulario

    // Si se proporciona una función onLocationCreated, la llamamos
    if (onLocationCreated) {
      onLocationCreated({ name: locationName }); // Pasamos un objeto con la nueva ubicación
    }

    // Opcional: Puedes limpiar los mensajes después de un tiempo
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      <h2>Crear Nueva Ubicación</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="locationName">Nombre de la Ubicación:</label><br></br>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={handleInputChange}
            required
          />
        </div><br></br>
        <button type="submit">Crear Ubicación</button>
      </form>
    </div>
  );
}

export default LocationCreationForm;