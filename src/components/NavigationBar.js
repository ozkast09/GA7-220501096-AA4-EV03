// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Importa  estilos

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/ingresar-producto">Ingresar Producto</Link></li>
        <li><Link to="/crear-producto">Crear Producto</Link></li>
        <li><Link to="/crear-proveedor">Crear Proveedor</Link></li>
        <li><Link to="/crear-marca">Crear Marca</Link></li>
        <li><Link to="/crear-ubicacion">Crear Ubicación</Link></li>
        <li><Link to="/crear-unidad-medida">Crear Unidad de Medida</Link></li>
        <li><Link to="/registrar-salida">Registrar Salida</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;