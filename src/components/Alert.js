// src/components/Alert.js
import React from 'react';
import './Alert.css'; // Importa estilos 

function Alert({ message }) {
  if (!message) {
    return null; // No mostrar nada si no hay mensaje
  }

  return (
    <div className="alert">
      {message}
    </div>
  );
}

export default Alert;