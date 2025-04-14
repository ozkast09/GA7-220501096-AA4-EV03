import React, { useState } from 'react';

function SupplierCreationForm() {
  const [supplierName, setSupplierName] = useState('');
  const [supplierNIT, setSupplierNIT] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [creationSuccess, setCreationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreationSuccess(false);
    setErrorMessage('');

    const newSupplier = {
      name: supplierName,
      nit: supplierNIT,
      contact: contactPerson,
      phone: phone,
      email: email,
      address: address,
      notes: notes,
    };

    // Aquí iría la lógica para enviar los datos al backend
    // utilizando fetch o una librería como axios
    try {
      // Simulación de una petición exitosa al backend
      console.log('Datos del nuevo proveedor a enviar:', newSupplier);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula una espera de 1 segundo
      setCreationSuccess(true);
      // Limpiar el formulario después de la creación exitosa
      setSupplierName('');
      setSupplierNIT('');
      setContactPerson('');
      setPhone('');
      setEmail('');
      setAddress('');
      setNotes('');
    } catch (error) {
      console.error('Error al crear el proveedor:', error);
      setErrorMessage('Hubo un error al crear el proveedor. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Proveedor</h2>
      {creationSuccess && (
        <div className="alert success">Proveedor creado exitosamente.</div>
      )}
      {errorMessage && (
        <div className="alert error">{errorMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="supplierName">Nombre del Proveedor:</label><br></br>
          <input
            type="text"
            id="supplierName"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="supplierNIT">NIT/Documento:</label><br></br>
          <input
            type="text"
            id="supplierNIT"
            value={supplierNIT}
            onChange={(e) => setSupplierNIT(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contactPerson">Persona de Contacto:</label><br></br>
          <input
            type="text"
            id="contactPerson"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label><br></br>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label><br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label><br></br>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notes">Notas:</label><br></br>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div><br></br>
        <button type="submit">Crear Proveedor</button>
      </form>
    </div>
  );
}

export default SupplierCreationForm;