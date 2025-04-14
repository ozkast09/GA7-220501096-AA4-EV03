import React from 'react';
import './SelectInput.css'; // Importa el archivo de estilos si lo tienes

function SelectInput({ id, name, label, value, onChange, options, error, ...rest }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id || name}>{label}</label>}
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        {...rest} // Permite pasar otras props directamente al input
      >
        {/* Opción por defecto o placeholder (opcional) */}
        {!value && <option value="">Seleccionar {label || name}</option>}

        {/* Mapea las opciones proporcionadas */}
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default SelectInput;