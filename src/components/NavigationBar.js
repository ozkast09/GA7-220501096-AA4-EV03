import React from 'react';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Stock</a></li>
        <li><a href="/ingresar">Ingresar Producto</a></li>
        <li><a href="/crear-producto">Crear Producto</a></li>
        <li><a href="/crear-proveedor">Crear Proveedor</a></li>
        {/* ... otros enlaces del menú ... */}
      </ul>
    </nav>
  );
}

export default NavigationBar;