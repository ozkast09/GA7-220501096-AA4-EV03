JavaScript

import React, { useState, useEffect } from 'react';

function ProductOutflowForm({ onProductOutflow }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Simulación de la obtención de productos desde una API (reemplazar con tu lógica real)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Aquí deberías hacer una llamada a tu API para obtener la lista de productos
        const response = await fetch('/api/products'); // Reemplaza '/api/products' con tu endpoint real
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error al cargar la lista de productos.');
      }
    };

    fetchProducts();
  }, []);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value < 1 ? 1 : value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!selectedProduct) {
      setError('Por favor, selecciona un producto.');
      return;
    }

    if (quantity < 1) {
      setError('La cantidad debe ser mayor que cero.');
      return;
    }

    const outflowData = {
      productId: selectedProduct,
      quantity: quantity,
      // Puedes incluir más información como la fecha de salida, usuario, etc.
    };

    try {
      // Aquí deberías hacer una llamada a tu API para registrar la salida del producto
      const response = await fetch('/api/outflows', { // Reemplaza '/api/outflows' con tu endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(outflowData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error al registrar la salida: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage('Salida de producto registrada exitosamente.');
      setSelectedProduct('');
      setQuantity(1);
      if (onProductOutflow) {
        onProductOutflow(data); // Llama a la función proporcionada para actualizar el stock en el componente padre
      }
    } catch (error) {
      console.error('Error registering product outflow:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registrar Salida de Producto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">Producto:</label>
          <select
            id="product"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            <option value="">Seleccionar producto</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.nombre} ({product.codigo})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button type="submit">Registrar Salida</button>
      </form>
    </div>
  );
}

export default ProductOutflowForm;