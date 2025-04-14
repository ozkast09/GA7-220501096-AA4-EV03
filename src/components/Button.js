// src/components/Button.js
import React from 'react';
import './Button.css'; // Importa  estilos

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;