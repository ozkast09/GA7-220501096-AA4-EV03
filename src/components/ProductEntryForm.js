import React, { useState, useEffect } from 'react';
import './ProductEntryForm.css'; // Importa  estilos

function ProductEntryForm({ products, onProductAdded }) {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Buscar el producto seleccionado cuando cambia el ID
    if (productId && products) {
      const foundProduct = products.find(product => product.id === parseInt(productId));
      setSelectedProduct(foundProduct);
    } else {
      setSelectedProduct(null);
    }
  }, [productId, products]);

  const handleProductChange = (event) => {
    setProductId(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleDateChange = (event) => {
    setEntryDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!productId) {
      setErrorMessage('Por favor, selecciona un producto.');
      return;
    }

    if (!quantity || parseInt(quantity) <= 0) {
      setErrorMessage('Por favor, ingresa una cantidad válida.');
      return;
    }

    if (!entryDate) {
      setErrorMessage('Por favor, selecciona la fecha de ingreso.');
      return;
    }

    const entryData = {
      productId: parseInt(productId),
      quantity: parseInt(quantity),
      entryDate: entryDate,
    };

    // Llamar a la función proporcionada por el componente padre para manejar la adición del producto
    if (onProductAdded) {
      onProductAdded(entryData);
      // Limpiar el formulario después del éxito (opcional)
      setProductId('');
      setQuantity('');
      setEntryDate('');
      setSuccessMessage(`Se ingresaron ${quantity} unidades de ${selectedProduct?.name || 'producto'} correctamente.`);
    } else {
      setErrorMessage('Error: No se proporcionó la función para agregar el producto.');
    }
  };

  return (
    <div>
      <h2>Ingresar Productos a Bodega</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Producto:</label><br></br>
          <select id="productId" value={productId} onChange={handleProductChange}>
            <option value="">Seleccionar producto</option>
            {products && products.map((product) => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        {selectedProduct && (
          <p>Información del Producto: {selectedProduct.name} ({selectedProduct.code})</p>
        )}
        <div>
          <label htmlFor="quantity">Cantidad:</label><br></br>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <div>
          <label htmlFor="entryDate">Fecha de Ingreso:</label><br></br>
          <input
            type="date"
            id="entryDate"
            value={entryDate}
            onChange={handleDateChange}
          />
        </div><br></br>
        <button type="submit">Ingresar Producto</button>
      </form>
    </div>
  );
}

export default ProductEntryForm;