import React, { useState } from 'react';

function BrandCreationForm() {
  const [brandName, setBrandName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    setBrandName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!brandName.trim()) {
      setErrorMessage('Por favor, ingresa el nombre de la marca.');
      return;
    }

    // Aquí iría la lógica para enviar el nombre de la marca al backend
    try {
      // Simulación de una petición exitosa al backend
      const response = await new Promise(resolve => setTimeout(() => {
        console.log('Marca creada:', brandName);
        resolve({ success: true, message: `Marca "${brandName}" creada exitosamente.` });
      }, 1000));

      if (response.success) {
        setSuccessMessage(response.message);
        setBrandName(''); // Limpiar el formulario después del éxito
      } else {
        setErrorMessage(response.message || 'Error al crear la marca.');
      }
    } catch (error) {
      console.error('Error al crear la marca:', error);
      setErrorMessage('Ocurrió un error al crear la marca.');
    }
  };

  return (
    <div>
      <h2>Crear Nueva Marca</h2>
      {errorMessage  && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="brandName">Nombre de la Marca:</label>
          <input
            type="text"
            id="brandName"
            value={brandName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Crear Marca</button>
      </form>
    </div>
  );
}

export default BrandCreationForm;