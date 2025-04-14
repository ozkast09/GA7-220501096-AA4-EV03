import React, { useState } from 'react';
import './ProductCreationForm.css'; // Importa  estilos

function ProductCreationForm({ onProductCreated, unitsOfMeasure, brands, locations, suppliers }) {
  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [unitOfMeasureId, setUnitOfMeasureId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [supplierId, setSupplierId] = useState('');

  // Estados para controlar la creación de nuevas entidades (si es necesario)
  const [showNewUnitOfMeasure, setShowNewUnitOfMeasure] = useState(false);
  const [newUnitOfMeasureName, setNewUnitOfMeasureName] = useState('');
  const [showNewBrand, setShowNewBrand] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [showNewLocation, setShowNewLocation] = useState(false);
  const [newLocationName, setNewLocationName] = useState('');
  const [showNewSupplier, setShowNewSupplier] = useState(false);
  const [newSupplierName, setNewSupplierName] = useState('');
  const [newSupplierContact, setNewSupplierContact] = useState(''); // Ejemplo de campo para proveedor

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones básicas (puedes agregar más)
    if (!name || !code || !unitOfMeasureId || !brandId || !locationId || !supplierId) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const newProduct = {
      name,
      code,
      description,
      unitOfMeasureId,
      brandId,
      locationId,
      supplierId,
    };

    // Llama a la función proporcionada por el componente padre para manejar la creación del producto
    if (onProductCreated) {
      onProductCreated(newProduct);
    }

    // Limpia el formulario después de la creación
    setName('');
    setCode('');
    setDescription('');
    setUnitOfMeasureId('');
    setBrandId('');
    setLocationId('');
    setSupplierId('');
  };

  // Funciones para manejar la creación de nuevas entidades (ejemplo para unidad de medida)
  const handleCreateNewUnitOfMeasure = () => {
    // Aquí deberías implementar la lógica para crear una nueva unidad de medida
    // y actualizar la lista de unitsOfMeasure en el componente padre.
    // Por ahora, solo mostramos un alert.
    if (newUnitOfMeasureName) {
      alert(`Se crearía la nueva unidad de medida: ${newUnitOfMeasureName}`);
      // Después de la creación exitosa, podrías actualizar el estado y ocultar el formulario de creación
      // y posiblemente seleccionar la nueva unidad creada.
      setNewUnitOfMeasureName('');
      setShowNewUnitOfMeasure(false);
    } else {
      alert('Por favor, ingresa el nombre de la nueva unidad de medida.');
    }
  };

  const handleCreateNewBrand = () => {
    if (newBrandName) {
      alert(`Se crearía la nueva marca: ${newBrandName}`);
      setNewBrandName('');
      setShowNewBrand(false);
    } else {
      alert('Por favor, ingresa el nombre de la nueva marca.');
    }
  };

  const handleCreateNewLocation = () => {
    if (newLocationName) {
      alert(`Se crearía la nueva ubicación: ${newLocationName}`);
      setNewLocationName('');
      setShowNewLocation(false);
    } else {
      alert('Por favor, ingresa el nombre de la nueva ubicación.');
    }
  };

  const handleCreateNewSupplier = () => {
    if (newSupplierName) {
      alert(`Se crearía el nuevo proveedor: ${newSupplierName} (Contacto: ${newSupplierContact})`);
      setNewSupplierName('');
      setNewSupplierContact('');
      setShowNewSupplier(false);
    } else {
      alert('Por favor, ingresa el nombre del nuevo proveedor.');
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre del Producto:</label><br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="code">Código:</label><br></br>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label><br></br>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="unitOfMeasure">Unidad de Medida:</label><br></br>
          <select
            id="unitOfMeasure"
            value={unitOfMeasureId}
            onChange={(e) => setUnitOfMeasureId(e.target.value)}
            required
          >
            <option value="">Seleccionar Unidad</option>
            {unitsOfMeasure && unitsOfMeasure.map((unit) => (
              <option key={unit.id} value={unit.id}>{unit.name}</option>
            ))}
          </select>
          <button type="button" onClick={() => setShowNewUnitOfMeasure(true)}>
            Crear Nueva Unidad
          </button>
          {showNewUnitOfMeasure && (
            <div>
              <input
                type="text"
                placeholder="Nombre de la nueva unidad"
                value={newUnitOfMeasureName}
                onChange={(e) => setNewUnitOfMeasureName(e.target.value)}
              />
              <button type="button" onClick={handleCreateNewUnitOfMeasure}>Crear</button>
              <button type="button" onClick={() => setShowNewUnitOfMeasure(false)}>Cancelar</button>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="brand">Marca:</label><br></br>
          <select
            id="brand"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
            required
          >
            <option value="">Seleccionar Marca</option>
            {brands && brands.map((brand) => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </select>
          <button type="button" onClick={() => setShowNewBrand(true)}>
            Crear Nueva Marca
          </button>
          {showNewBrand && (
            <div>
              <input
                type="text"
                placeholder="Nombre de la nueva marca"
                value={newBrandName}
                onChange={(e) => setNewBrandName(e.target.value)}
              />
              <button type="button" onClick={handleCreateNewBrand}>Crear</button>
              <button type="button" onClick={() => setShowNewBrand(false)}>Cancelar</button>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="location">Ubicación:</label><br></br>
          <select
            id="location"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            required
          >
            <option value="">Seleccionar Ubicación</option>
            {locations && locations.map((location) => (
              <option key={location.id} value={location.id}>{location.name}</option>
            ))}
          </select>
          <button type="button" onClick={() => setShowNewLocation(true)}>
            Crear Nueva Ubicación
          </button>
          {showNewLocation && (
            <div>
              <input
                type="text"
                placeholder="Nombre de la nueva ubicación"
                value={newLocationName}
                onChange={(e) => setNewLocationName(e.target.value)}
              />
              <button type="button" onClick={handleCreateNewLocation}>Crear</button>
              <button type="button" onClick={() => setShowNewLocation(false)}>Cancelar</button>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="supplier">Proveedor:</label><br></br>
          <select
            id="supplier"
            value={supplierId}
            onChange={(e) => setSupplierId(e.target.value)}
            required
          >
            <option value="">Seleccionar Proveedor</option>
            {suppliers && suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
            ))}
          </select>
          
          <button type="button" onClick={() => setShowNewSupplier(true)}>
            Crear Nuevo Proveedor
          </button>
          {showNewSupplier && (
            <div>
              <input
                type="text"
                placeholder="Nombre del proveedor"
                value={newSupplierName}
                onChange={(e) => setNewSupplierName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Contacto del proveedor"
                value={newSupplierContact}
                onChange={(e) => setNewSupplierContact(e.target.value)}
              />
              <button type="button" onClick={handleCreateNewSupplier}>Crear</button>
              <button type="button" onClick={() => setShowNewSupplier(false)}>Cancelar</button>
            </div>
          )}
        </div><br></br>

        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}

export default ProductCreationForm;